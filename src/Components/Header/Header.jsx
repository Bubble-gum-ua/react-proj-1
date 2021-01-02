import React from "react";
import s from "./Header.module.css";
import Logo from "../../Assets/Images/Logo.png"
import {NavLink} from "react-router-dom";
import Exit from "../../Assets/Images/Exit.png"

const Header = (props) => {
    return <header className={s.header}>
        <img src={Logo}/>

        <div className={s.loginBlock}>
            {props.isAuth
                ? <div> {props.login} <button onClick={props.logout}>Logout <img src={Exit}/> </button> </div>
                : <NavLink to={"/login"}> Login </NavLink>}
        </div>
    </header>
};

export default Header;