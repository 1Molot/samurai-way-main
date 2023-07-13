import {PhotosType, ProfileType} from "../components/Profile/Profile";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";
import {UserType} from "./users-reducer";
import {AppDispatch, AppStateType} from "./redux-store";
import {stopSubmit} from "redux-form";
import {ProfileFormData} from "../components/Profile/ProfileInfo/ProfileDataForm";


let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCont: 12},
        {id: 2, message: 'It\'s my first post', likesCont: 11},
    ],
    profile: null as ProfileType | null,
    friends: [] as UserType[],
    status: "",
    newPostText: '',
};
type initStateType = typeof initialState

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_FRIENDS_PROFILE = 'SET_FRIENDS_PROFILE';
const SET_STATUS = 'profile/SET-STATUS';
const DELETE_POST = 'profile/DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS';

export const profileReducer = (state = initialState, action: ProfileActionsType): initStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCont: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_FRIENDS_PROFILE: {
            return {...state, friends: action.friends}
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p=> p.id !== action.postId)}
        }
        case SAVE_PHOTO_SUCCESS: {

            if(state.profile){

                return {...state, profile: {...state.profile, photos: action.photos }}
            }

            return state
        }
        default:
            return state
    }
}

export type ProfileActionsType = AddPostACType
    | setUserProfileACType
    | SetStatusACType
    | DeletePostACType
    | setFriendsProfileACType
    | savePhotoSuccessACType

type AddPostACType = ReturnType<typeof addPostActionCreator>
export const addPostActionCreator = (newPostText: string) => ({
    type: 'profile/ADD-POST', newPostText
} as const)

type setUserProfileACType = ReturnType<typeof setUserProfileAC>
export const setUserProfileAC = (profile: ProfileType) => ({
    type: 'SET_USER_PROFILE', profile
} as const)

type SetStatusACType = ReturnType<typeof setStatusAC>
export const setStatusAC = (status: string) => ({
    type: 'profile/SET-STATUS', status
} as const)

type DeletePostACType = ReturnType<typeof deletePostAC>
export const deletePostAC = (postId: number) => ({
    type: 'profile/DELETE_POST', postId
} as const)

type setFriendsProfileACType = ReturnType<typeof setFriendsProfileAC>
export const setFriendsProfileAC = (friends: UserType[]) => ({
    type: 'SET_FRIENDS_PROFILE', friends
} as const)

type savePhotoSuccessACType = ReturnType<typeof savePhotoSuccessAC> //
export const savePhotoSuccessAC = (photos:PhotosType) => ({
    type: SAVE_PHOTO_SUCCESS, photos
} as const)

export const getUserProfile = (userId: string) => async (dispatch: Dispatch) => {
    let response = await usersAPI.getProfile(userId);
        dispatch(setUserProfileAC(response.data));
}
export const getStatus = (userId: string) => async (dispatch: Dispatch) => {
    let response = await profileAPI.getStatus(userId);
            dispatch(setStatusAC(response.data));
}
export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
    let response = await profileAPI.updateStatus(status);
            if (response.data.resultCode === 0) {
                dispatch(setStatusAC(status));
            }
}
export const savePhoto = (file: File) => async (dispatch: Dispatch) => {   //
    let response = await profileAPI.savePhoto(file);
            if (response.data.resultCode === 0) {
                dispatch(savePhotoSuccessAC(response.data.data.photos));
            }
}
                                                                 //dispatch: ThunkDispatch<any, any, any>
export const saveProfile = (profile: ProfileFormData) => async (dispatch: AppDispatch, getState:() => AppStateType):Promise<any> => {
    const userId = getState().auth.userId
    const response = await profileAPI.saveProfile(profile);

    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(String(userId)))
        return Promise.resolve({})
    }else{                                            //{"contacts": {"facebook": response.data.messages[0]}}
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}))
        return Promise.reject(response.data.messages[0])
    }
}

export const getFriendsProfile = () => async (dispatch: Dispatch) => {
    let response = await usersAPI.getUsers(1,6, true);
    dispatch(setFriendsProfileAC(response.items));
}


export default profileReducer;