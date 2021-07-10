// 'use strict'


// const express = require('express') // require the express package
// const app = express() // initialize your express app instance
// const cors = require('cors');
// require('dotenv').config();
// app.use(cors()) // after you initialize your express app instance
// const weatherControl=require('./controller/Weather.Controller')
// const moviesControl=require('./controller/Movies.Controller')

// const PORT=process.env.PORT


// const express = require("express"); // require the express package
// const app = express(); // initialize your express app instance
// const weatherData = require("./data/weather.json");
// const cors = require("cors");

// app.use(cors()); // after you initialize your express app instance
// require("dotenv").config();

// const PORT = process.env.PORT;
// // a server endpoint
// app.get(
//     "/", // our endpoint name
//     function(req, res) {
//         // callback function of what we should do with our request
//         res.send("Hello World"); // our endpoint function response
//     }
// );

// app.get("/weather", (req, res) => {
//     const newWeatherData = weatherData.data.map((value) => {
//         return new Weather(value);
//     });
//     res.json(newWeatherData);
// });

// class Weather {
//     constructor(weatherArr) {
//         this.description = weatherArr.weather.description;
//         this.date = weatherArr.valid_date;
//     }
// }

// app.listen(PORT); 

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
