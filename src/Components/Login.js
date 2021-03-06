import React,{useState} from 'react'
import { useHistory,Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import {requestlogin} from "../Thunk" 
const Login = () => {
     const token =useSelector(state=>state.reducer.token)
     const [loginForm,setLoginForm]=useState({email: '', password: ''})
     const cordinate = useSelector(state => state.reducer.cordinate)
     const dispatch = useDispatch()
     const history=useHistory()
     const handleInputData=(e)=>
    {
      let {name,value}=e.target;
      setLoginForm({...loginForm,[name]:value})

    }
    
    const handleSubmit=(e)=>
    {   e.preventDefault()
        dispatch(requestlogin(loginForm));
        
        if(token) {
          history.push("/dashboard")
          }   
           
  }   
  return (
    <div>
      <center>
        <h1>Login</h1>
            <form method="POST" onSubmit={handleSubmit}>
            <label htmlFor="html">Email: </label> &nbsp;&nbsp;
            <input type="text" name="email" onChange={handleInputData}/><br/><br/>
            <label htmlFor="html">Password: </label> &nbsp;&nbsp;
            <input type="password" name="password" onChange={handleInputData}/><br/><br/>
            <input type="submit" value="Login"/>
            <p>Don't have an account? <span> <Link to="/signup">Sign Up</Link></span></p>
          </form>
      </center>
    </div>
  );
};
export default Login
