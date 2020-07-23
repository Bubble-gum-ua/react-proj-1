import React from "react";
import s from "./Users.module.css";
import * as axios from "axios";
import userPhoto from "../.././Assets/Images/User.png"

let Users = (props) => {

    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    props.setUsers(response.data.items)
                });

        }
    }

    return <div>
        <button onClick={getUsers}>Get Users</button>
        {
            props.users.map(u => <div key={u.id}>
               <span>
                   <div>
                       <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.usersPhoto}/>
                   </div>
                   <div>
                       {u.followed
                           ? <button onClick={() => {
                               props.unfollow(u.id)
                           }}> PUSH ON ME, BITCH, FOR UNFOLLOW</button>
                           : <button onClick={() => {
                               props.follow(u.id)
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
};

export default Users;