import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = () => {

    let posts = [
        {
            id: 1, message: "Hi, how are you?", likesCount: 15, photoAvatar: <img
                src="https://i.pinimg.com/originals/3d/6f/b2/3d6fb2056e94691bf76a4426dd826aa4.jpg"/>
        },
        {
            id: 2, message: "It's my first post", likesCount: 20, photoAvatar: <img
                src="https://cdna.artstation.com/p/assets/images/images/019/650/704/large/ynorka-chiu-jaina-proudmoore-by-ynorka.jpg?1564434256"/>
        },

    ];

    let postsElements = posts.map(p => <Post message={p.message} likescount={p.likesCount}
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