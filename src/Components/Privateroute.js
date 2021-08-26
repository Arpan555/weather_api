import React from 'react'
import { Route,Redirect } from 'react-router'
import { useSelector } from 'react-redux'
const Privateroute = ({component:Component,...res}) => {
    const token=useSelector(state=>state.reducer.token)
    return (
       <Route {...res}
       render={props=>(
           token?(
               <Component {...res} {...props}/>

           ):
           (
               <Redirect to="/login"/>
           )
       )}
       />     
       
    )
}

export default Privateroute
