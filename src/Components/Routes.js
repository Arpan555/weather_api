import React from "react";
import { useSelector } from "react-redux";
import {
  Link,
  Route,
  Switch,
  BrowserRouter,
  Redirect,
} from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Signup from "./Signup"
import History from "./History"

const PrivateRoute = (props) => {
  const { token } = useSelector((state)=>state.reducer)
  return token ? (
    <Route {...props} />
  ) : (
    <Redirect to={{pathname: "/login"}}/>) }

function Routes() {
    const { token } = useSelector((state)=>state.reducer)
return (
    <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {!token && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>

        </ul>
        <Switch>
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/history" component={History} />
          <Route path="/login" component={Login} />
          <Route path="/signup"component={Signup}/>
          <Route path="/">Home</Route>
        </Switch>
    </BrowserRouter>
  );
}
export default Routes;
