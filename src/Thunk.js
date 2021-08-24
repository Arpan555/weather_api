import axios from "axios"
import {signup,login} from "./Redux/Actions/actions"
const request=axios.create({
    baseURL:"http://localhost:8000",
})

export const requestsignup=(state)=>{
    return async(dispatch)=>{
        try{
            console.log(state)
            const signupData= await request.post("/signup",state)
            console.log(signupData.data)
            dispatch(signup(signupData.data));
            

        }catch(err){
            console.log(err);
        }
    }
}

export const requestlogin=(state)=>{
    return async(dispatch)=>{
        try{
            console.log(state)
            const loginData= await request.post("/login",state)
            console.log(loginData.data)
            dispatch(login(loginData.data));
        
            
        }catch(err){
            console.log(err);
        }
    }
}
