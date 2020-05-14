import React from "react";
import s from "./Friendlist.module.css"
import {NavLink} from "react-router-dom";

const FriendList = (props) =>{
    let path = "/" + props.id;
    return(

        <div className={s.friends}>
            <NavLink to={path} activeClassName={s.active}> {props.avatar} {props.name} </NavLink>


        </div>


    )
}

export default FriendList;
