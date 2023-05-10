import axios from "axios";



const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/' ,
    headers: {
        "API-KEY": "66aaa482-f918-4f6c-9634-fa1259d1d2ac"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1,pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, )
            .then(response => {
                return  response.data
            })}
}

export const getUsers2 = (currentPage = 1,pageSize = 10) => {
    return instance.get(`follow?page=${currentPage}&count=${pageSize}`, )
        .then(response => {
           return  response.data
        })
}
