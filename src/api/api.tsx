import axios from "axios";
import {ProfileFormData} from "../components/Profile/ProfileInfo/ProfileDataForm";


export const instance = axios.create({
    //withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'de0c020c-dd6c-405b-bbe4-e54523e78d81',
        "Authorization": "Bearer 786566ee-a0d5-4dd1-b899-5bc981895f5a"
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
    updateStatus(status: string) {
        return instance.put(`profile/status/`, {status: status})
    },
    savePhoto(photoFile: File) {                           //
        const formData = new FormData();
        formData.append("image", photoFile);
        return instance.put(`profile/photo/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    saveProfile(profile: ProfileFormData) {
        return instance.put(`profile/`, profile)
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email: string, password: string, rememberMe: boolean, captcha: string | null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha});
    },
    logout() {
        return instance.delete(`auth/login`);
    },
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`);
    }
}

