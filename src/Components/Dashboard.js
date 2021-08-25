import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import {logout} from "../Redux/Actions/actions"
import { useDispatch,useSelector } from 'react-redux'
import {requestcity,requestcurrentlocation} from "../Thunk"
const Dashboard = () => {
    const apiData = useSelector(state =>state.reducer.weatherData)
    const userName=useSelector(state=>state.reducer.name)
    const arrapiData=[apiData]
    const[cityData,setCityData]=useState({name:userName,city:""}) 
    const dispatch = useDispatch()
    const history=useHistory()
    const handleInputData=(e)=>
    {
        let {name,value}=e.target;
        setCityData({...cityData,[name]:value})
    }
    const handleSubmit=(e)=>
    {
        e.preventDefault()
        dispatch(requestcity(cityData))
        setCityData({city:""})
    }
    useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos)=>{
        const {latitude,longitude}=pos.coords
        dispatch(requestcurrentlocation({latitude,longitude}))
    }) }, [dispatch])
      return (
        <div>
            <center>
                <input type="button" value="Logout" onClick={()=>{localStorage.removeItem("token") 
                localStorage.removeItem("id")  
                dispatch(logout()) } }/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="button" value="History" onClick={()=>history.push("/history")}/>
            
            <h1>Dashboard</h1>
            <form method="POST" onSubmit={handleSubmit}> 
            <label htmlFor="html">Name:</label>
            <input type="text" name="name" value={cityData.name} onChange={handleInputData} readOnly/><br/><br/>
            <label htmlFor="html">City: </label>
            <input type="text" name="city" value={cityData.city} onChange={handleInputData}/>
            <input type="submit" value="submit"/>
            </form>
            <hr/>
            <h3>{arrapiData&& <p> {arrapiData}</p>}</h3>
            
            </center>
        </div>
    )
}

export default Dashboard
