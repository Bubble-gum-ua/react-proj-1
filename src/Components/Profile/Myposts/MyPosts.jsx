import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, Form, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../Utils/Validators/validators";
import {TextArea} from "../../Common/FormsControls/FromsControls";


const MyPosts = React.memo(props => {

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likescount={p.likesCount}
                                                   photoava={p.photoAvatar}/>);

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };


    return (
        <div  className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div>
                new posts
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>)
});

const maxLength10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
    return (
        <Form onSubmit={props.handleSubmit} className={s.formPost}>
            <div>
                <Field name="newPostText" component={TextArea} placeholder={"Post message"}
                       validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </Form>
    )
};

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);
export default MyPosts;