import './App.css';
import {useEffect, useState} from "react";
import axios from "axios"
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom'
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Main from "./Components/Main/Main";
import SignupForm from './Components/Login/Secret';
import Register from './Components/Login/Register';

function App() {
    const [isAuth, setAuth] = useState(false)
    return (
        <>
        <BrowserRouter>
            <Header/>
            {!isAuth ?
                    <div className="errAuth">
                        Some Content is disabled. Please auth
                    </div> : <></>
            }
            
           
            <div className="App">
                <NavBar />
                <Routes>
                    <Route  exact={true} path={"/"}
                     element={<Main isAuth={isAuth} setAuth={setAuth}/>} />
                    <Route path='/regs' element={<Register />}/>
                    <Route path='/register' element={<SignupForm setAuth={setAuth} />}/>
                </Routes>
                
            </div>
            </BrowserRouter>
        </>
    );
}

export default App;
