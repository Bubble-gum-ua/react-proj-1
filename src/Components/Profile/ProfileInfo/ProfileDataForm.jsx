import React from "react";
import s from "./ProfileInfo.module.css";
import {createField, Input, TextArea} from "../../Common/FormsControls/FromsControls";
import {reduxForm} from "redux-form";
import styles from "../../Login/Login.module.css";



const ProfileDataForm = ({handleSubmit,profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <button>Save changes</button>
        </div>
        {error &&
        <div className={styles.formSummaryError}>
            {error}
        </div>
        }
        <div><b>Full Name: </b>{createField("Full Name", "fullName", [], Input)}</div>
         <div><b>Contacts: </b> {Object.keys(profile.contacts).map(key => {
             return <div key={key} className={s.contact}>
                 <b>{key} : {createField(key, "contacts." + key, [], Input)}</b>
             </div>
        })}</div>
        <div>
            <b>Looking for a job: </b>
            {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
        </div>
        <div>
            <b>My professional skills: </b>
            {createField("My professional skills", "lookingForAJobDescription", [], TextArea)}
        </div>

        <div>
            <b> About me</b>
    {createField("About me", "aboutMe", [], Input)}
        </div>
    </form>
}

const ProfileDataFromReduxForm = reduxForm({
    form: "edit-profile"
})(ProfileDataForm);
export default ProfileDataFromReduxForm;
