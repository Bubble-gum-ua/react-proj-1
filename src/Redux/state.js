import React from "react";


let state = {
    profilePage: {
        posts: [
            {
                id: 1, message: "Hi, how are you?", likesCount: 15, photoAvatar: <img alt={""}
                                                                                      src="https://i.pinimg.com/originals/3d/6f/b2/3d6fb2056e94691bf76a4426dd826aa4.jpg"/>
            },
            {
                id: 2, message: "It's my first post", likesCount: 20, photoAvatar: <img alt={""}
                                                                                        src="https://cdna.artstation.com/p/assets/images/images/019/650/704/large/ynorka-chiu-jaina-proudmoore-by-ynorka.jpg?1564434256"/>
            },]

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
                             src="https://scontent.fhrk2-1.fna.fbcdn.net/v/t1.0-9/10439027_865679430172240_8121937726512808115_n.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_ohc=ZGnGLW4tqJkAX-raucG&_nc_ht=scontent.fhrk2-1.fna&oh=aae310afc9bace3a4c828148c0170549&oe=5EE39F96"/>
            },
            {id: 2, name: 'Lusyi', avatar: <img alt={""} src="https://dota2.ru/img/heroes/pudge/portrait.jpg"/>},
            {
                id: 3,
                name: 'Lena',
                avatar: <img alt={""}
                             src="https://scontent.fhrk2-1.fna.fbcdn.net/v/t1.0-9/55471845_377284916190595_4144988876269682688_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=XY7sVPEDwn0AX-sOfST&_nc_ht=scontent.fhrk2-1.fna&oh=52b7efd264337a8586c64005d4a476b1&oe=5EE2CD14"/>
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
        ]
    },

    friendList: {
        friendWrapper:
            [
                {
                    id: 1,
                    name: "Ozzeron",
                    avatar: <img alt={""}
                                 src="https://scontent.fhrk2-1.fna.fbcdn.net/v/t1.0-9/10439027_865679430172240_8121937726512808115_n.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_ohc=ZGnGLW4tqJkAX-raucG&_nc_ht=scontent.fhrk2-1.fna&oh=aae310afc9bace3a4c828148c0170549&oe=5EE39F96"/>
                },

                {
                    id: 2,
                    name: "Lena",
                    avatar: <img alt={""}
                                 src="https://scontent.fhrk2-1.fna.fbcdn.net/v/t1.0-9/55471845_377284916190595_4144988876269682688_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=XY7sVPEDwn0AX-sOfST&_nc_ht=scontent.fhrk2-1.fna&oh=52b7efd264337a8586c64005d4a476b1&oe=5EE2CD14"/>
                },
                {
                    id: 3,
                    name: "Lusyi",
                    avatar: <img alt={""} src="https://dota2.ru/img/heroes/pudge/portrait.jpg"/>
                }
            ]

    }
}

export default state;