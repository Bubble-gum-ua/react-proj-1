import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path} activeClassName={s.active}> {props.name} </NavLink>
        </div>
    )
};

const MessageItem = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
};
const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Ozzeron" id="1"/>
                <DialogItem name="Lusyi" id="2"/>
                <DialogItem name="Lena" id="3"/>
                <DialogItem name="Freddy" id="4"/>
                <DialogItem name="Busya" id="5"/>
            </div>
            <div className={s.messages}>
                <MessageItem message="Hi"/>
                <MessageItem message="How is your mood?"/>
                <MessageItem message="Yo"/>
                <MessageItem message="Yo"/>
                <MessageItem message="Yo"/>

            </div>
        </div>

    )
};

export default Dialogs;
