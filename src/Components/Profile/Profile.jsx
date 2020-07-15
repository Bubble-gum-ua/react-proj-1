import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./Myposts/MyPostsContainer";


const Profile = () => {

    return (
        <div className={s.mainBar}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )

};

export default Profile;