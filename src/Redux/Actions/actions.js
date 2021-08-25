import { SIGN_UP,LOGIN,LOGOUT,FETCH_WEATHER,FETCH_WEATHER_LL,HISTORY } from "./index";

export const signup=(payload)=>({
    type:SIGN_UP,
    payload,
})
export const login=(payload)=>{
        console.log(payload.token)
        console.log(payload.result._id)
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