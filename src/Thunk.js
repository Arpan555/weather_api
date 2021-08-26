import axios from "axios"
import {signup,login,fetchweather,fetchbylonlat,history,defaultcity} from "./Redux/Actions/actions"
const request=axios.create({
    baseURL:"http://localhost:8000",
})

export const requestsignup=(state)=>{
    return async(dispatch)=>{
        try{
            const signupData= await request.post("/signup",state)
            dispatch(signup(signupData.data));
        }catch(err)
        {
            console.log(err);
        }
    }
}

export const requestlogin=(state)=>{
    return async(dispatch)=>{
        try{
            const loginData= await request.post("/login",state)
            dispatch(login(loginData.data));
        }catch(err)
        {
            console.log(err);
        }
    }
}

export const requestcity=(state)=>{
    return async(dispatch)=>{
        const {city,name}=state
        try {
            const fetchData= await request.get(`/data?q=${city}&name=${name}`)
            dispatch(fetchweather(fetchData.data));
        } catch (error) 
        {
            console.log(error)    
        }
    }
}   

export const requestcurrentlocation=(state)=>{
    return async(dispatch)=>{
        const {latitude,longitude}=state
        try {
            const fetchDataByLL= await request.get(`/curdata?lon=${longitude}&lat=${latitude}`)
            dispatch(fetchbylonlat(fetchDataByLL.data));
    
        } catch (error) 
        {
            console.log(error)    
        }
    }
}

export const requesthistory=(state)=>{
    return async(dispatch)=>{
        try{
            console.log(state)
            const historyData=await request.get(`/history/${state}`)
            dispatch(history(historyData.data))
        }catch(error)
        {
            console.log(error)
        }
            
    }
}
export const requestonlycity=(state)=>{
    return async(dispatch)=>{
        try {
            console.log(state)
            const weatherCityData=await request.get(`/city/${state}`)
            dispatch(defaultcity(weatherCityData.data))
        } catch (error) {
            
        }
    }
}