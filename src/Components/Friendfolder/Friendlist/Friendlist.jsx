import React from "react";
import s from "./Friendlist.module.css"

const FriendList = (props) =>{
    return(

        <div className={s.friends}>
            <a href="" >  {props.name}  {props.avatar} </a>
        </div>


    )
}

export default FriendList;
