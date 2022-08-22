import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {authApi} from "../../api/api"
import s from "./Login.module.css"

const Register = () => {
    let navigate = useNavigate();
  const routeChange = () =>{
    let path = `/register`;
    navigate(path);
  }
  const FormSubmit = (e) =>{
    authApi.register(e.target[0].value, e.target[1].value,
       e.target[2].value)
    routeChange()

    
  }
    return<div className={s.forms}>
    <h1>Register</h1>
<form onSubmit={FormSubmit}>
  <div>
  <div>
        <label >Name</label>
        <input type="text" placeholder="name" id="name" name="name"  required/>
    </div>
        <label >Email     </label>
        <input type="text" id="email" name="email" placeholder="email" required />
    </div>
   
    <div>
        <label >Password      </label>
        <input type="password" id="password" placeholder="password" name="password" required />
    </div>
    
    <button type="submit" onClick={() => {
       
    }}>Register</button>
</form>
<NavLink to="/regs">If have registered yet</NavLink>


</div>
}

export default Register