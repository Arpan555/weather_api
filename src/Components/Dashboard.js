import React,{useEffect} from 'react'
import {logout} from "../Redux/Actions/actions"
import { useDispatch,useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { requestonlycity} from '../Thunk'
const Dashboard = () => {
    const apiData = useSelector(state =>state.reducer.weatherData)
    const city=useSelector(state=>state.reducer.city)
    const dispatch = useDispatch()
    const history=useHistory()
    useEffect(() => {
    dispatch(requestonlycity(city))
    }, [dispatch])
      return (
        <div>
            <center>
                <input type="button" value="Logout" onClick={()=>{localStorage.removeItem("token") 
                localStorage.removeItem("id") 
                localStorage.removeItem("name") 
                dispatch(logout()) } }/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="button" value="History" onClick={()=>history.push("/history")}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="button" value="Back To Home" onClick={()=>history.push("/")}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="button" value="Search By City" onClick={()=>history.push("/city")}/>
           
            <h1>Dashboard</h1>
           
            <h3>{apiData &&  <p> {apiData} </p>}</h3>
            
            </center>
        </div>
    )
}

export default Dashboard;
