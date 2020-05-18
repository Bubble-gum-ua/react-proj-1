import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./Myposts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPost} from "../../Redux/state";

const Profile = (props) => {


    return (
        <div className={s.mainBar}>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts} addPost={addPost}/>
        </div>
    )

};

export default Profile;