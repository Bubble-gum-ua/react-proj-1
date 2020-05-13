import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {


    let postsElements = props.posts.map(p => <Post message={p.message} likescount={p.likesCount}
                                                   photoava={p.photoAvatar}/>);

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea> </textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div>
                new posts
            </div>
            <div className={s.posts}>
                {postsElements}


            </div>

        </div>)


};

export default MyPosts;