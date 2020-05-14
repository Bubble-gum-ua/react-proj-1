import React from "react";
import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <div>
            <NavLink to={path} activeClassName={s.active}> {props.name} {props.avatar} </NavLink>
            </div>

        </div>

    )
};


export default DialogItem;
