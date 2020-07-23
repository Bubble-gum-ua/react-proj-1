import React from "react";
import Ozzeron from "../Assets/Images/Ozzeron.jpg"
import Lena from "../Assets/Images/Lena.jpg"
import Lusuy from "../Assets/Images/Lusuy.jpg"

let initialState = {
    friendWrapper:
        [
            {
                id: 1,
                name: "Ozzeron",
                avatar: <img alt={""}
                             src={Ozzeron}/>
            },

            {
                id: 2,
                name: "Lena",
                avatar: <img alt={""}
                             src={Lena}/>
            },
            {
                id: 3,
                name: "Lusyi",
                avatar: <img alt={""} src={Lusuy}/>
            }
        ]

};

const sidebarReducer = (state = initialState, action) => {


    return state;
};

export default sidebarReducer;