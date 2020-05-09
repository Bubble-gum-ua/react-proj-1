import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./Myposts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
        <div>
            <img className={s.headimg} src="https://cdn.beach-inspector.com/static/awards/lp-header.jpg?w=1200&h=400&fit=crop"/>
        </div>
        <div>
            <img className={s.ava}
                 src="https://vignette.wikia.nocookie.net/wow/images/e/e5/200px-Bolvar%2C_Fireblood.jpg/revision/latest?cb=20191029151859&path-prefix=ru"/>
            ava+disc
        </div>
       <MyPosts/>
    </div>
    )

};

export default Profile;