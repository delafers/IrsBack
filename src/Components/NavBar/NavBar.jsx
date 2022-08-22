import React from 'react';
import s from "./NavBar.module.css"

const NavBar = () => {
    return (
        <div className={s.nav}>
            <div>
                <a href={"/"}>
                    Main
                </a>
            </div>
            <div>
                <a href={"/"}>
                    Future products
                </a>
            </div>
            <a href={"/"}>
                Info
            </a>
        </div>
    );
};

export default NavBar;
