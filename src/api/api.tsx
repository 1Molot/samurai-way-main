import axios from "axios";
import {getUsers} from "../redux/users-reducer";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "66aaa482-f918-4f6c-9634-fa1259d1d2ac"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => {
                return response.data
            });
    },
    follow(userId: string) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    unfollow(userId: string) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    }
}

// export const getUsers2 = (currentPage = 1,pageSize = 10) => {
//     return instance.get(`follow?page=${currentPage}&count=${pageSize}`, )
//         .then(response => {
//            return  response.data
//         })
// }
