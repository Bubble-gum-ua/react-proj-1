import React from "react";
import s from "./Users.module.css";

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
            id: 1,
            photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBAq7blqdI8FbCfEvsyPkQmfy3XC4gYhulmg&usqp=CAU",
            followed: false,
            fullName: "Barry",
            status: "Love big tit's",
            location: {city: "Minesota", country: "USA"}
        },
            {
                id: 2,
                photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBAq7blqdI8FbCfEvsyPkQmfy3XC4gYhulmg&usqp=CAU",
                followed: true,
                fullName: "Ammy",
                status: "I'm wait for DickHead",
                location: {city: "Calgary", country: "Canada"}
            },
            {
                id: 3,
                photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBAq7blqdI8FbCfEvsyPkQmfy3XC4gYhulmg&usqp=CAU",
                followed: false,
                fullName: "DickHead",
                status: "Stupid boy",
                location: {city: "Kharkiv", country: "Ukraine"}
            },])
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
               <span>
                   <div>
                       <img src={u.photoURL} className={s.usersPhoto}/>
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
                       <div>{u.fullName}</div>
                       <div> {u.status}</div>
                   </span>
                   <span>
                       <div>{u.location.country}</div>
                       <div>{u.location.city}</div>
               </span>
               </span>
            </div>)
        }
    </div>
};

export default Users;