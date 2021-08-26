import React,{useState} from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { requestcity } from '../Thunk'
const City = () => {
    const userName=useSelector(state=>state.reducer.name)
    console.log(userName)
    const [cityData,setCityData]=useState({name:userName,city:""})
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
        history.push("/dashboard")
    }
    return (
        <div>
            <center>
             <h2>City</h2>   
            <form method="POST" onSubmit={handleSubmit}> 
            <label htmlFor="html">Name: </label>
            <input type="text" name="name" value={cityData.name} onChange={handleInputData} readOnly/><br/><br/>
            <label htmlFor="html">City: </label>
            <input type="text" name="city" value={cityData.city} onChange={handleInputData}/>
            <input type="submit" value="submit"/>
            </form>
            <hr/>
            
            </center>
        </div>
    )
}

export default City
