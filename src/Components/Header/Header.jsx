import React from "react";
import s from "./Header.module.css";
import Logo from "../../Assets/Images/Logo.png"
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img src={Logo}/>

        <div className={s.loginBlock}>
            {props.isAuth ? props.login
                : <NavLink to={"/login"}> Login </NavLink>}
        </div>
    </header>
};

export default Header;