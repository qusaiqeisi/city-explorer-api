'use strict'
const MOVIE_API_KEY = process.env.MOVIE_API_KEY
const Movie = require('../model/Movie.Model')
const Cache = require('../utils/cache')
const axios = require('axios'); // require the package


// const moviesControl=(req, res)=>{
//    let city_name=req.query.city
//   let urlMove=`https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_API_KEY}&query=${city_name}`

//   let moveResponce=axios.get(urlMove).then(response => {
//     let movie=response.data.results.map(item=>{
//       return new Movie(item)
//     })
//     res.json(movie)
//   }).catch(err=>{
//     res.status(500).send(`error in getting data ==> ${err}`)
// })
// }

// module.exports=moviesControl;


let newCache = new Cache();
newCache['data'] = []
let dayM;
let dateByDay;
const moviesControl = (req, res) => {
  let movies = [];
  let city_name = req.query.city
  let urlMove = `https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_API_KEY}&query=${city_name}`
  let day = new Date();
  let dayChange = day.getMonth();

//   let moveResponce=axios.get(urlMove).then(response => {
//     let movie=response.data.results.map(item=>{
//       return new Movie(item)
//     })

  if (city_name) {
    if (newCache['data'].length > 0 && dayChange === dateByDay) {
      movies = newCache['data'].map(item => {
        return new Movie(item)
      })
      res.json(movies)

    } else {
      dayM = new Date();
      dateByDay = dayM.getMonth();
      axios.get(urlMove).then(response => {

        movies = response.data.results.map(item => {
          return new Movie(item)
        })
        res.json(movies);
        newCache['data'] = response.data.results;

      }).catch(err => {
        res.status(500).send(`error in getting data ==> ${err}`)
      })
      res.json(movie)
      //   }).catch(err=>{
      //     res.status(500).send(`error in getting data ==> ${err}`)
      // })
    }
  } else {
    res.send('pleass provide your city name')
  }


}

module.exports = moviesControl;
