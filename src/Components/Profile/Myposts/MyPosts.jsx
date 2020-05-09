import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = () => {
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
                <Post message="Hi, how are you?" likescount="15" photoava={<img
                    src="https://i.pinimg.com/originals/3d/6f/b2/3d6fb2056e94691bf76a4426dd826aa4.jpg"/>}/>

                <Post message="It's my first post " likescount="20" photoava={<img
                    src="https://cdna.artstation.com/p/assets/images/images/019/650/704/large/ynorka-chiu-jaina-proudmoore-by-ynorka.jpg?1564434256"/>}/>

            </div>

        </div>)


};

export default MyPosts;