import axios from "axios";


export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "5a156657-6985-42ea-9262-b6e3873afb30" //moi
        // "API-KEY": "66aaa482-f918-4f6c-9634-fa1259d1d2ac"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10, friend = false) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}&friend=${friend}`,) //friend
            .then(res => res.data);
    },
    follow(userId: string) {
        return instance.post(`follow/${userId}`);
    },
    unfollow(userId: string) {
        return instance.delete(`follow/${userId}`);
    },
    getProfile(userId: string) {
        return profileAPI.getProfile(userId)
    },
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
    },
    savePhoto(photoFile:any) {                           //
        const formData = new FormData();
        formData.append("image",photoFile);
        return instance.put(`profile/photo/`, formData,{
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        });
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

