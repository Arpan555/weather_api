import { SIGN_UP,LOGIN,LOGOUT } from "./index";

export const signup=(payload)=>({
    type:SIGN_UP,
    payload,
})
export const login=(payload)=>{
        console.log(payload.token)
        console.log(payload.result._id)
        localStorage.setItem("token",payload.token)
        localStorage.setItem("id",payload.result._id)
    
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