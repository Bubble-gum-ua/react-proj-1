import React from "react";
import s from "./ProfileInfo.module.css";
import AvatarMain from "../../../Assets/Images/AvatarMain.png"
import MainWallpaper from "../../../Assets/Images/MainWalpaper.jpg"
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>

            {/*  <div>
                <img className={s.headimg}
                     src={MainWallpaper}/>
            </div>*/}
            <div className={s.cardProf}>
                <div>
                    <img className={s.ava}
                         src={AvatarMain}/>

                </div>
                <div className={s.discriptionBlock}>
                    <img src={props.profile.photos.large}/>
                    <div>{props.profile.fullName}</div>
                    <div>{props.profile.contacts.facebook}</div>
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>

                    ava+disc
                </div>
            </div>

        </div>
    )

};

export default ProfileInfo;