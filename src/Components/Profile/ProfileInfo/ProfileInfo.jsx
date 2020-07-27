import React from "react";
import s from "./ProfileInfo.module.css";
import AvatarMain from "../../../Assets/Images/AvatarMain.png"
import MainWallpaper from "../../../Assets/Images/MainWalpaper.jpg"


const ProfileInfo = () => {
    return (
        <div>

            <div>
                <img className={s.headimg}
                     src={MainWallpaper}/>
            </div>
            <div className={s.cardProf}>
                <div>
                    <img className={s.ava}
                         src={AvatarMain}/>

                </div>
                <div className={s.discriptionBlock}>
                    ava+disc
                </div>
            </div>

        </div>
    )

};

export default ProfileInfo;