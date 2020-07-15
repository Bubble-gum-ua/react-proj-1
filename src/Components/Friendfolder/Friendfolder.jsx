import React from "react";
import s from "./Friendfolder.module.css"
import FriendList from "./Friendlist/Friendlist";
const Friendfolder = (props) => {

    let state = props.friendWrapper;
    debugger;

    let friendField = state.map(f=> <FriendList name={f.name} id={f.id} avatar={f.avatar}/>)
    return(
        <div className={s.friends}>
            <h3>FRIENDS</h3>
            <div>
            {friendField}
            </div>
        </div>
    )
};

export default Friendfolder;