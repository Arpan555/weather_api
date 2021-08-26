import React,{useState} from 'react'
import {Link,useHistory} from "react-router-dom"
import { useDispatch } from 'react-redux'
import {requestsignup} from "../Thunk"
const Signup = () => {
    const [signupForm,setSignupForm]=useState({name:'',email: '',city:'',password: ''})
    const dispatch = useDispatch()
    const history=useHistory()
    const handleInputData=(e)=>
    {
        let {name,value}=e.target;
        setSignupForm({...signupForm,[name]:value})
    }
    
    const handleSubmit=(e)=>
    {
        e.preventDefault()
        dispatch(requestsignup(signupForm));
        history.push("/login")
    }
    
        
    return (
        <div>
            <center>
                <h1>Signup</h1> 
                    <form method="POST" onSubmit={handleSubmit}>
                        <label htmlFor="html">Name: </label> &nbsp;&nbsp;
                        <input type="text" name="name" onChange={handleInputData}/><br/><br/>
                        <label htmlFor="html">Email: </label> &nbsp;&nbsp;
                        <input type="email" name="email" onChange={handleInputData}/><br/><br/>
                        <label htmlFor="html">City: </label> &nbsp;&nbsp;
                        <input type="text" name="city" onChange={handleInputData}/><br/><br/>
                        <label htmlFor="html">Password: </label> &nbsp;&nbsp;
                        <input type="password" name="password" onChange={handleInputData}/><br/><br/>
                        <input type="submit" value="SignUp"/>
                        <p>you have already account <span> <Link to="/login">Login</Link></span></p>
                    </form>
            </center>
        </div>
    )
}

export default Signup
