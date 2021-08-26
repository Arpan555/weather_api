import React from "react";
import {BrowserRouter,Switch,Route,Link} from "react-router-dom"
import Signup from "./Components/Signup"
import Login from "./Components/Login"
import Dashboard from "./Components/Dashboard"
import Publicroute from "./Components/Publicroute";
import Privateroute from "./Components/Privateroute";
import City from "./Components/City";
import History from "./Components/History";
function App() {
  return (
    <>
      <h1>App</h1>
      <BrowserRouter>
          <Route>
            <ul>
            <li><Link exact to="/">Home</Link></li>
            <li><Link exact to="/login">Login</Link></li>
            <li><Link exact to="/dashboard">Dashboard</Link></li>
            </ul>
          </Route>
          <Switch>
              <Publicroute restricted={false} component={Signup} path="/signup" exact/>
              <Publicroute restricted={true} component={Login} path="/login" exact/>
              <Privateroute component={City} path="/city" exact/>
              <Privateroute component={History} path="/history" exact/>
              <Privateroute component={Dashboard} path="/dashboard" exact/>
          </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
