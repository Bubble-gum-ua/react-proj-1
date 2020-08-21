import * as axios from "axios";


const instatnce = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "6294e4f4-48cf-4973-aca5-f3512edd3216"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {

        return instatnce.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });

    },
    follow(userId) {
        return instatnce.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    unfollow(userId) {
        return instatnce.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    }
};


