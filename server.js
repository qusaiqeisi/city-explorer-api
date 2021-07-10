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
