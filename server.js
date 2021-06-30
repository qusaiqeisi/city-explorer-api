'use strict'


const express = require('express') // require the express package
const app = express() // initialize your express app instance
const cors = require('cors');
require('dotenv').config();
app.use(cors()) // after you initialize your express app instance
const weatherControl=require('./controller/Weather.Controller')
const moviesControl=require('./controller/Movies.Controller')

const PORT=process.env.PORT




app.get('/',  (req, res) =>{ 
  res.send('Hello World') 
})


app.get('/weather',weatherControl )

app.get('/movies',moviesControl )

app.listen(process.env.PORT) 






// const WEATHER_API_KEY = process.env.WEATHER_API_KEY
// const MOVIE_API_KEY = process.env.MOVIE_API_KEY


// app.get('/weather', (req, res) => {
//   let weather;
//   let lat = req.query.lat;
//   let lon = req.query.lon;


//   let url = `https://api.weatherbit.io/v2.0/forecast/daily?key=${WEATHER_API_KEY}&lat=${lat}&lon=${lon}`;
//   let weatherbitResponde = axios.get(url).then(response => {
//     weather = response.data;
//     let forecast = weather.data.map(item => {
//       return new ForeCast(item)
//     })
//     res.json(forecast)
//   }).catch(err => {
//     res.status(500).send(`error in getting data ==> ${err}`)
//   })

// })



// app.get('/movies', (req, res)=>{
//   let city=req.query.city
//  let urlMove=`https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_API_KEY}&query=${city}`

//  let moveResponce=axios.get(urlMove).then(response => {
//    // console.log(response.data.results);
//    let movie=response.data.results.map(item=>{
//      return new Movie(item)
//    })
//    res.json(movie)
//  }).catch(err=>{
//    res.status(500).send(`error in getting data ==> ${err}`)
// })



// })
// class ForeCast {
//   constructor(weather) {

//     this.date = weather.valid_date
//     this.description = weather.weather.description

//   }
// }


// class Movie{
//   constructor(data){
//     this.average_votes = data.vote_average;

//     this.total_votes=data.vote_count

//     this.image_url=data.backdrop_path

//     this.popularity=data.popularity

//     this.released_on=data.release_date
   
// }
// }




