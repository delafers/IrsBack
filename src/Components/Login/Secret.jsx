import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {authApi} from "../../api/api"
import { useFormik } from 'formik';
import s from "./Login.module.css"

  
 
  const SignupForm = ({setAuth}) => {
    const[err, setErr] = useState(null)
    let navigate = useNavigate();
    const routeChange = () =>{
      let path = `/`;
      navigate(path);
    }
    const formik = useFormik({
      initialValues: {
        email: '',
        password:""
      },
      onSubmit: values => {
        
        authApi.login(values.email, values.password).then(function (response) {
          debugger
          let data = JSON.stringify(response.data)
         let pasrsed = JSON.parse(data)
         
          if(pasrsed.code === "authorised"){
            setAuth(true)
            routeChange()
            
          }else{
            setErr("No such user or password incorrect")
          }
          console.log(JSON.stringify(response.data));
        })
      
      },
    });
    return (<div className={s.forms}> 
      
      <form onSubmit={formik.handleSubmit}>     
        <div>
        
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        </div>
        <div>
          
        <label htmlFor="password">Last Name</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        
        </div>
      {err? <div>{err}</div>: <></>}
      <div>
        <button type="submit">Submit</button>
      </div>
        
      </form>
      
    </div>
    );
  };


export default SignupForm