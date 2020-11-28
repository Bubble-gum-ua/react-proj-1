import React from "react";
import Ozzeron from "../Assets/Images/Ozzeron.jpg"
import Lena from "../Assets/Images/Lena.jpg"
import Lusuy from "../Assets/Images/Lusuy.jpg"
import Freddy from "../Assets/Images/Freddy.jpg"
import Busya from "../Assets/Images/Busya.jpg"

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
                         src={Ozzeron}/>
        },
        {id: 2, name: 'Lusyi', avatar: <img alt={""} src={Lusuy}/>},
        {
            id: 3,
            name: 'Lena',
            avatar: <img alt={""}
                         src={Lena}/>
        },
        {
            id: 4,
            name: 'Freddy',
            avatar: <img alt={""}
                         src={Freddy}/>
        },
        {
            id: 5,
            name: 'Busya',
            avatar: <img alt={""} src={Busya}/>
        }
    ]
};

const dialogsReducer = (state = initialState, action) => {

    let stateCopy;

    switch (action.type) {

        case SEND_MESSAGE :
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };

        default:
            return state;
    }
};
export const sendMessage = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;