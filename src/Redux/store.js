import React from "react";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1, message: "Hi, how are you?", likesCount: 15, photoAvatar: <img alt={""}
                                                                                          src="https://i.pinimg.com/originals/3d/6f/b2/3d6fb2056e94691bf76a4426dd826aa4.jpg"/>
                },
                {
                    id: 2, message: "It's my first post", likesCount: 20, photoAvatar: <img alt={""}
                                                                                            src="https://cdna.artstation.com/p/assets/images/images/019/650/704/large/ynorka-chiu-jaina-proudmoore-by-ynorka.jpg?1564434256"/>
                },],
            newPostText: "look at u'r code"

        },

        dialogsPage: {
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
        },

        sideBar: {
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

        }
    },
    _callSubscriber() {
        console.log("state changed");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sidebarReducer(this._state.sideBar, action);
        this._callSubscriber(this._state);


    }

};


export default store;
window.store = store;