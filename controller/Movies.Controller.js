'use strict'
const MOVIE_API_KEY = process.env.MOVIE_API_KEY
const cache = require('../utils/cache')
const axios = require('axios'); // require the package
const { response } = require('express');
const Movie = require('../model/Movie.Model')

let newCache = new cache();
newCache['data'] = [];
let dayMovie;
let dateMovie;

const moviesControl = (req, res) => {
  let movies = [];

  let city_name = req.query.city
  let movieUrl = `https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_API_KEY}&query=${city_name}`
  let datEm = new Date();
  let dateChange = datEm.getMonth();

  if (city_name) {
    if (newCache['data'].length > 0 && datEm === dateChange) {
      movies = newCache['data'].map(item => { return new Movie(item) })
      res.json(movies);
    } else {
      dayMovie = new Date();
      dateMovie = dayMovie.getMonth();
      axios.get(movieUrl).then(response => {

        movies = response.data.results.map(item => {
          return new Movie(item)
        })
        res.json(movies);
        newCache['data'] = response.data.results;
      }).catch(err => {

        res.status(500).send(`Error while getting the data  ==> ${err}`)
      })
    }

  } else {
    res.send('please provide your city name')
  }

}

module.exports = moviesControl;