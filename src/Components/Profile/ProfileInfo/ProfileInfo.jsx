import React from "react";
import s from "./ProfileInfo.module.css";
import AvatarMain from "../../../Assets/Images/AvatarMain.png"
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = ({profile,status,updateStatus}) => {

    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.cardProf}>
                <div>
                    <img className={s.ava}
                         src={AvatarMain}/>

                </div>
                <div className={s.discriptionBlock}>
                    <img src={profile.photos.large}/>
                    <div>{profile.fullName}</div>
                    <div>{profile.contacts.facebook}</div>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>

                    ava+disc
                </div>
            </div>
        </div>
    )
};

export default ProfileInfo;