import React from "react";
import s from "./Post.module.css";


const Post = (props) => {
    return (

        <div className={s.item}>
            <div>
                {props.photoava}
            </div>

            {props.message}
            <div>
                <span>Likes</span> {props.likescount}
            </div>
        </div>


    )


};

export default Post;