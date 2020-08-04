import React from "react";
import s from "./Users.module.css";
import userPhoto from "../.././Assets/Images/User.png"
import {NavLink} from "react-router-dom";
import * as axios from "axios";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>

            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && s.selectedPage}
                                 onClick={(e) => {
                                     props.onPAgeChanged(p)
                                 }}> {p} </span>
                })}

            </div>
            {
                props.users.map(u => <div key={u.id}>
               <span>
                   <div>
                       <NavLink to={"/profile/" + u.id}>
                       <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.usersPhoto}/>
                       </NavLink>
                   </div>
                   <div>
                       {u.followed
                           ? <button onClick={() => {

                               axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                   withCredentials: true,
                                   headers: {
                                       "API-KEY": "6294e4f4-48cf-4973-aca5-f3512edd3216"
                                   }
                               })
                                   .then(response => {
                                       if (response.data.resultCode === 0) {
                                           props.unfollow(u.id)
                                       }
                                   });


                           }}> PUSH ON ME, BITCH, FOR UNFOLLOW</button>
                           : <button onClick={() => {

                               axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                   withCredentials: true,
                                   headers: {
                                       "API-KEY": "6294e4f4-48cf-4973-aca5-f3512edd3216"
                                   }
                               })
                                   .then(response => {
                                       if (response.data.resultCode === 0) {
                                           props.follow(u.id)
                                       }
                                   });


                           }}> PUSH ON ME, BITCH, FOR FOLLOW</button>}

               </div>
               </span>
                    <span>
                   <span>
                       <div>{u.name}</div>
                       <div> {u.status}</div>
                   </span>
                   <span>
                       <div>{"u.location.country"}</div>
                       <div>{"u.location.city"}</div>
               </span>
               </span>
                </div>)
            }
        </div>

    )
};

export default Users;