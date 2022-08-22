import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Header.module.css"

const Header = () => {
    return (
        <div className={s.head}>
        <header className={s.space}>
            <div>
                <h1>
                    Welcome to database
                </h1>
            </div>
            <div>
                <NavLink to="/register">
                    <button>To Login</button>
                </NavLink>
            
            </div>
        </header>
        </div>
    );
};

export default Header;
