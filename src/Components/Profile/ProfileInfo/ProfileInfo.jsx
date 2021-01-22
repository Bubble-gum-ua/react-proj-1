import React from "react";
import s from "./ProfileInfo.module.css";
import AvatarMain from "../../../Assets/Images/AvatarMain.png"
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../Assets/Images/User.png"


const ProfileInfo = ({profile,status,updateStatus,isOwner,savePhoto}) => {

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
if (e.target.files.length) {
    savePhoto(e.target.files[0]);
}
    }

    return (
        <div>
            <div className={s.cardProf}>
                <div>
                    <img className={s.ava}
                         src={AvatarMain}/>

                </div>
                <div className={s.discriptionBlock}>
                    <img src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
                    {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
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