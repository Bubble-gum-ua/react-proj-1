import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import mails from "../../Assets/Images/mails.png"
import music from "../../Assets/Images/music.png"
import news from "../../Assets/Images/news.png"
import settings from "../../Assets/Images/settings.png"
import usermenu from "../../Assets/Images/usermenu.png"
import users from "../../Assets/Images/users.png"

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.active}><img src={usermenu}/> Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/dialogs" activeClassName={s.active}><img src={mails}/> Messages</NavLink>
            </div>

            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/users" activeClassName={s.active}><img src={users}/> Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/News" activeClassName={s.active}><img src={news}/> News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.active}><img src={music}/> Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.active}><img src={settings}/> Settings</NavLink>
            </div>


        </nav>
    )
};


export default Navbar;