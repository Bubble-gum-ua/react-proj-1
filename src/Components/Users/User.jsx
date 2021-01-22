import React from "react";
import s from "./Users.module.css";
import userPhoto from "../.././Assets/Images/User.png"
import {NavLink} from "react-router-dom";

let User = ({user,followingInProgress,unfollow,follow}) => {
       return (
        <div className={s.usersWrapp}>
               <span>
                   <div>
                       <NavLink to={"/profile/" + user.id}>
                       <img src={user.photos.small != null ? user.photos.small : userPhoto} className={s.usersPhoto}/>
                       </NavLink>
                   </div>
                   <div>
                       {user.followed

                           ? <button disabled={followingInProgress.some(id => id == user.id)} onClick={() => {
                               unfollow(user.id);
                           }}> PUSH ON ME, DUDE, FOR UNFOLLOW</button>

                           : <button disabled={followingInProgress.some(id => id == user.id)} onClick={() => {
                               follow(user.id);
                           }}> PUSH ON ME, DUDE, FOR FOLLOW</button>}

               </div>
               </span>
                    <span>
                   <span>
                       <div>{user.name}</div>
                       <div> {user.status}</div>
                   </span>
                   <span>
                       <div>{"user.location.country"}</div>
                       <div>{"user.location.city"}</div>
               </span>
               </span>
                </div>)

};

export default User;