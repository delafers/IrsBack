import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {authApi} from "../../api/api"

const Log = () => {
    let navigate = useNavigate();
  const routeChange = () =>{
    let path = `/login`;
    navigate(path);
  }
  const FormSubmit = (e) =>{
    authApi.login(e.target[0].value, e.target[1].value)
    routeChange()
  }
    return<div>
    <h1>Login</h1>
<form onSubmit={FormSubmit}>
    
    <div>
        <label for="email">Email</label>
        <input type="text" id="email" name="email" required />
    </div><div>
        <label for="password">Password</label>
        <input type="password" id="password" name="password" required />
    </div>

    <button type="submit" onClick={() => {
       
    }}>register</button>
</form>
<NavLink to="/register">Return to Login</NavLink>


</div>
}

export default Log