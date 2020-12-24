import profileReducer, {addPost, deletePost} from "./profile-reducer";

import React from "react";
import PostImage1 from "../Assets/Images/Postimage1.png";
import PostImage2 from "../Assets/Images/Postimage2.png";

//1.Test data

let state = {
    posts: [
        {
            id: 1, message: "Hi, how are you?", likesCount: 15, photoAvatar: <img alt={""}
                                                                                  src={PostImage1}/>
        },
        {
            id: 2, message: "It's my first post", likesCount: 20, photoAvatar: <img alt={""}
                                                                                    src={PostImage2}/>
        },],

};

test('length of post should be incremented', () => {

    let action = addPost("Tuta i tama Text")
    //2. action
    let newState = profileReducer(state, action);
    //3. Result expectation
    expect(newState.posts.length).toBe(3);

});
test('message of new post should be correct', () => {

    let action = addPost("Tuta i tama Text")
    //2. action
    let newState = profileReducer(state, action);
    //3. Result expectation

    expect(newState.posts[2].message).toBe("Tuta i tama Text");
});
test('length after deleted should be decremented', () => {

    let action = deletePost(1);
    //2. action
    let newState = profileReducer(state, action);
    //3. Result expectation

    expect(newState.posts.length).toBe(1);
});
test('length after deleted shouldnt be decremented if id incorrect', () => {

    let action = deletePost(1001);
    //2. action
    let newState = profileReducer(state, action);
    //3. Result expectation

    expect(newState.posts.length).toBe(2);
});

