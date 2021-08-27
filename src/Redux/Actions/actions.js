import { SIGN_UP,LOGIN,LOGOUT,FETCH_WEATHER,
FETCH_WEATHER_LL,
HISTORY,DEFAULT_CITY,SET_LATITUDE_LONGITUDE } from "./index";

export const signup=(payload)=>{
    localStorage.setItem("city",payload.result.city)
    return{
        type:SIGN_UP,
        payload
    }
}
export const login=(payload)=>{
        localStorage.setItem("token",payload.token)
        localStorage.setItem("id",payload.result._id)
        localStorage.setItem("name",payload.result.name)
        
    return{
    type:LOGIN,
    payload,
    }
};

export const logout=(payload)=>{
    return{
        type:LOGOUT,
        payload
    }
}
export const fetchweather=(payload)=>{
    return {
        type:FETCH_WEATHER,
        payload
    }
}
export const fetchbylonlat=(payload)=>{
    return{
        type:FETCH_WEATHER_LL,
        payload
    }
}
export const history=(payload)=>{
    return{
        type: HISTORY,
        payload
    }
}

export const defaultcity=(payload)=>{
    return{
        type:DEFAULT_CITY,
        payload
    }
}
export const setlatitudelongitude=(payload)=>{
    localStorage.setItem("cordinate",JSON.stringify(payload))
    return{
        type:SET_LATITUDE_LONGITUDE,
        payload
    }
}