import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import {logout} from "../Redux/Actions/actions"
import { useDispatch } from 'react-redux'
// import {requestcity} from "../Thunk"
const Dashboard = () => {
    navigator.geolocation.watchPosition(pos => console.log(pos)); 
    const[cityData,setCityData]=useState("") 
    const dispatch = useDispatch()
    const history=useHistory()
    const handleInputData=(e)=>{
        let {name,value}=e.target;
        setCityData({...cityData,[name]:value})
}
const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(cityData)
    // dispatch(requestcity(cityData))
}

      return (
        <div><center>
            <input type="button" value="Logout" onClick={()=>{localStorage.removeItem("token") 
            localStorage.removeItem("id")  
            dispatch(logout()) } 
        }/>
            <h1>Dashboard</h1>
            <form method="POST" onSubmit={handleSubmit}> 
            <label htmlFor="html">City: </label>
            <input type="text" name="city" onChange={handleInputData}/>
            <input type="submit" value="submit"/>
            </form>
            </center>
        </div>
    )
}

export default Dashboard
