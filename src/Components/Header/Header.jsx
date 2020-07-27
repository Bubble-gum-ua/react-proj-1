import React from "react";
import s from "./Header.module.css";
import Logo from "../../Assets/Images/Logo.png"

const Header = () => {
    return <header className={s.header}>
        <img src={Logo}/>
    </header>
};

export default Header;