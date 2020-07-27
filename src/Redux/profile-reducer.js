import React from "react";
import PostImage1 from "../Assets/Images/Postimage1.png"
import PostImage2 from "../Assets/Images/Postimage2.png"



const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [
        {
            id: 1, message: "Hi, how are you?", likesCount: 15, photoAvatar: <img alt={""}
                                                                                  src={PostImage1}/>
        },
        {
            id: 2, message: "It's my first post", likesCount: 20, photoAvatar: <img alt={""}
                                                                                    src={PostImage2}/>
        },],
    newPostText: "look at u'r code"

};
const profileReducer = (state = initialState, action) => {


    switch (action.type) {
        case ADD_POST :
            let newPost = {
                id: 6,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            };


        case UPDATE_NEW_POST_TEXT : {

            return {
                ...state,
                newPostText: action.newText,
            };

        }
        default:
            return state;
    }


};
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;