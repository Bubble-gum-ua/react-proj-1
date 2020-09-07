import React from "react";
import PostImage1 from "../Assets/Images/Postimage1.png"
import PostImage2 from "../Assets/Images/Postimage2.png"
import {usersAPI} from "../API/Api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

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
    newPostText: "look at u'r code",
    profile: null

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
        case SET_USER_PROFILE : {

            return {
                ...state,
                profile: action.profile,
            };

        }
        default:
            return state;
    }


};
export const addPost = () => ({type: ADD_POST});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        });
};
export const updateNewPostText = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;