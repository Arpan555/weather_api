const express=require("express")
const weather_router=express.Router()
const {fetchweather,fetchweatherLL} =require("../Controllers/weather.js")

weather_router.get(`/data`,fetchweather)
weather_router.get(`/curdata`,fetchweatherLL)

module.exports=weather_router