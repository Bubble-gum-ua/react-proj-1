import React from "react";
import PostImage1 from "../Assets/Images/Postimage1.png"
import PostImage2 from "../Assets/Images/Postimage2.png"
import {profileAPI, usersAPI} from "../API/Api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

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
    profile: null,
    status: ""

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
        case SET_STATUS : {

            return {
                ...state,
                status: action.status,
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
export const setStatus = (status) => ({type: SET_STATUS, status});
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        });
};
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        });
};
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
};
export const updateNewPostText = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;