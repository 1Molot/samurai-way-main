import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "5a156657-6985-42ea-9262-b6e3873afb30" //moi
        // "API-KEY": "66aaa482-f918-4f6c-9634-fa1259d1d2ac"
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
        return instance.post(`follow/${userId}`);
    },
    unfollow(userId: string) {
        return instance.delete(`follow/${userId}`);
    },
    getProfile(userId: string) {
        // console.warn('Obsolete method. Please profileAPI object')
        return profileAPI.getProfile(userId)
    },
    getFriends: () => {
        return instance.get('users?friend=true')
    }
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status:string) {
        return instance.put(`profile/status/`, {status:status})
    }
}

export const authAPI = {
    me() {
       return  instance.get(`auth/me`);
    },
    login(email:string, password:string, rememberMe:boolean) {
       return  instance.post(`auth/login`,{email, password, rememberMe});
    },
    logout() {
       return  instance.delete(`auth/login`);
    },
}

