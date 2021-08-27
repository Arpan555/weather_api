import React,{useEffect} from 'react'
import {logout} from "../Redux/Actions/actions"
import { useDispatch,useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { requestonlycity,requestcurrentlocation} from '../Thunk'
import { setlatitudelongitude } from '../Redux/Actions/actions'
const Dashboard = () => {
    const apiData = useSelector(state =>state.reducer.weatherData)
    const city=useSelector(state=>state.reducer.city)
    const cordinate = useSelector(state => state.reducer.cordinate)
    const dispatch = useDispatch()
    const history=useHistory()
    if (!cordinate){
      navigator.geolocation.getCurrentPosition((pos)=>
  {
      const {latitude,longitude}=pos.coords
      dispatch(setlatitudelongitude({latitude,longitude}))
  })
  }
    useEffect(() => {
    {   if(!cordinate){
            dispatch(requestonlycity(city))
            
        }else{
            const {latitude,longitude}=cordinate
            dispatch(requestcurrentlocation({latitude,longitude}))
            }
    }
}, [dispatch,cordinate,city])     
                
                
                
    return (
        <div>
            <center>
                <input type="button" value="Logout" onClick={()=>{localStorage.removeItem("token") 
                localStorage.removeItem("id") 
                localStorage.removeItem("name")
                localStorage.removeItem("cordinate")
                dispatch(logout()) } }/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="button" value="History" onClick={()=>history.push("/history")}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="button" value="Back To Home" onClick={()=>history.push("/")}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="button" value="Search By City" onClick={()=>history.push("/city")}/>
           
            <h1>Dashboard</h1>
            <hr/>
            <h3>Weather Report</h3>
            
        {apiData.name == null ? "" : 
        (
          <table>
            <tr>
              <td>City:</td>
              <td>{apiData.name}</td>
            </tr>
            <tr>
              <td>Country Code:</td>
              <td>{apiData.sys.country}</td>
            </tr>
            <tr>
              <td>Temp:</td>
              <td>{`${apiData.main.temp-273.15.toFixed(2)} Celsius`}</td>
            </tr>
            <tr>
              <td>Temp Min:</td>
              <td>{`${apiData.main.temp_min-273.15.toFixed(2)} Celsius`}</td>
            </tr>
            <tr>
              <td>Temp Max:</td>
              <td>{`${apiData.main.temp_max-273.15.toFixed(2)} Celsius`}</td>
            </tr>
            <tr>
              <td>Humidity:</td>
              <td>{apiData.main.humidity}</td>
            </tr>
            <tr>
                <td>Weather Main</td>
                <td>{apiData.weather[0].main}</td>
            </tr>
            <tr>
            <td>Weather Description</td>
            <td>{apiData.weather[0].description}</td>
            </tr>
            
          </table>
        )}
            </center>
        </div>
    )
}

export default Dashboard;
