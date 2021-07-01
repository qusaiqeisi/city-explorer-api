'use strict'
const WEATHER_API_KEY= process.env.WEATHER_API_KEY;
const Forecast=require('../model/Forecast.Model');
const axios = require('axios'); // require the package
const cache = require('../utils/cache');
const Cache = require('../utils/cache');


let cache = new Cache();
cache['data']=[];


const weatherControl=(req, res)=>{
    let weather;
    let lat=req.query.lat;
    let lon=req.query.lon;
    let arrOfData=[]
    if(lat && lon){
      if (cache.data.length >0){
        arrOfData=cache.data.map(data =>new Forecast(data))
        console.log('=============== data caming from the cache');
        res.send(arr)
      }
    }

let url=`https://api.weatherbit.io/v2.0/forecast/daily?key=${WEATHER_API_KEY}&lat=${lat}&lon=${lon}`;
let weatherbitResponde=axios.get(url).then(response => {
  weather=response.data;
  let forecast=weather.data.map(item=>{
    return new Forecast(item)
  })
  res.json(forecast)
}).catch(err=>{
  res.status(500).send(`error in getting data ==> ${err}`)
})
  
}

module.exports=weatherControl;