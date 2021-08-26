const express=require("express")
const weather_router=express.Router()
const {fetchweather,fetchweatherLL,fetchweatherCurCity} =require("../Controllers/weather.js")

weather_router.get(`/data`,fetchweather)
weather_router.get(`/curdata`,fetchweatherLL)
weather_router.get(`/city/:city_name`,fetchweatherCurCity)

module.exports=weather_router