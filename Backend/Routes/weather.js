const express=require("express")
const weather_router=express.Router()
const {fetchweather,fetchweatherLL,fetchweatherCurCity} =require("../Controllers/weather.js")

weather_router.get(`/data`,fetchweather)
weather_router.get(`/curcity`,fetchweatherLL)
weather_router.get(`/defcity`,fetchweatherCurCity)

module.exports=weather_router