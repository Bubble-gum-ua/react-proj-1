import React from "react";

let initialState = {
    friendWrapper:
        [
            {
                id: 1,
                name: "Ozzeron",
                avatar: <img alt={""}
                             src="https://scontent.fhrk2-1.fna.fbcdn.net/v/t1.0-9/10439027_865679430172240_8121937726512808115_n.jpg?_nc_cat=111&_nc_sid=85a577&_nc_ohc=tOXkwtAYbUEAX_kX-Pp&_nc_ht=scontent.fhrk2-1.fna&oh=5e18469b31e8a3ba59e830809bda285a&oe=5F1EF316"/>
            },

            {
                id: 2,
                name: "Lena",
                avatar: <img alt={""}
                             src="https://scontent.fhrk2-1.fna.fbcdn.net/v/t1.0-9/p960x960/55471845_377284916190595_4144988876269682688_o.jpg?_nc_cat=110&_nc_sid=85a577&_nc_ohc=YY6KOFhqKc8AX_Q2POZ&_nc_ht=scontent.fhrk2-1.fna&_nc_tp=6&oh=91b7a7c671fadcb838012abd7a7d8e47&oe=5F1BB0C4"/>
            },
            {
                id: 3,
                name: "Lusyi",
                avatar: <img alt={""} src="https://dota2.ru/img/heroes/pudge/portrait.jpg"/>
            }
        ]

};

const sidebarReducer = (state = initialState, action) => {


    return state;
};

export default sidebarReducer;