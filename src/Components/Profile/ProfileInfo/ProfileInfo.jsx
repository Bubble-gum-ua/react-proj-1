import React, {useState} from "react";
import s from "./ProfileInfo.module.css";
import AvatarMain from "../../../Assets/Images/AvatarMain.png"
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../Assets/Images/User.png"
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    let [editMode, setEditMode] = useState(false);
    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }
    const onSubmit = (formData) => {
        const promise = saveProfile(formData);
        promise.then(
            () => {
                setEditMode(false)
            }
        )
    };

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

                    {editMode
                        ? <ProfileDataForm initialValues={profile} onSubmit={onSubmit} profile={profile}/>
                        : <ProfileData goToEditMode={() => {
                            setEditMode(true)
                        }} profile={profile} isOwner={isOwner}/>}


                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                </div>
            </div>
        </div>
    )
};
const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>
        {isOwner && <div>
            <button onClick={goToEditMode}>Edit info</button>
        </div>}
        <div><b>Full Name: </b>{profile.fullName}</div>
        <div><b>Contacts: </b> {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}</div>
        <div><b>Looking for a job: {profile.lookingForAJob ? "yes" : "no"}</b></div>
        {profile.lookingForAJob &&
        <div>
            <b>My professional skills</b> {profile.lookingForAJobDescription}
        </div>
        }
        <div><b> About me</b> {profile.aboutMe}</div>
    </div>
}


const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}>
        <b>{contactTitle} : </b> {contactValue}
    </div>
}

export default ProfileInfo;