import React from "react";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your mood?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ],
    dialogs: [
        {
            id: 1,
            name: 'Ozzeron',
            avatar: <img alt={""}
                         src="https://scontent.fhrk2-1.fna.fbcdn.net/v/t1.0-9/10439027_865679430172240_8121937726512808115_n.jpg?_nc_cat=111&_nc_sid=85a577&_nc_ohc=tOXkwtAYbUEAX_kX-Pp&_nc_ht=scontent.fhrk2-1.fna&oh=5e18469b31e8a3ba59e830809bda285a&oe=5F1EF316"/>
        },
        {id: 2, name: 'Lusyi', avatar: <img alt={""} src="https://dota2.ru/img/heroes/pudge/portrait.jpg"/>},
        {
            id: 3,
            name: 'Lena',
            avatar: <img alt={""}
                         src="https://scontent.fhrk2-1.fna.fbcdn.net/v/t1.0-9/p960x960/55471845_377284916190595_4144988876269682688_o.jpg?_nc_cat=110&_nc_sid=85a577&_nc_ohc=YY6KOFhqKc8AX_Q2POZ&_nc_ht=scontent.fhrk2-1.fna&_nc_tp=6&oh=91b7a7c671fadcb838012abd7a7d8e47&oe=5F1BB0C4"/>
        },
        {
            id: 4,
            name: 'Freddy',
            avatar: <img alt={""}
                         src="https://static.scientificamerican.com/blogs/cache/file/1379B8E0-9602-42D5-9602278C1F21FAF2_source.jpg?w=590&h=800&AF11F83F-A202-49A5-948C06206102FF92"/>
        },
        {
            id: 5,
            name: 'Busya',
            avatar: <img alt={""} src="https://icatcare.org/app/uploads/2018/06/Layer-1704-1920x840.jpg"/>
        }
    ],
    newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {

    let stateCopy;

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY :
            return {
                ...state,
                newMessageBody: action.body
            };


        case SEND_MESSAGE :
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: "",
                messages: [...state.messages, {id: 6, message: body}]
            };


        default:
            return state;

    }
};
export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body});
export default dialogsReducer;