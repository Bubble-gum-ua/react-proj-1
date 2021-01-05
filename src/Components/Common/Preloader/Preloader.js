import preloader from "../../../Assets/Images/loadIco.gif";
import React from "react";
import s from "./Preloader.module.css"

let Preloader = (props) => {
    return (
        <div className={s.preloader}>
            <img src={preloader}/>
        </div>
    )
};

export default Preloader;