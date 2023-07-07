import {ProfileType} from "../components/Profile/Profile";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";


let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCont: 12},
        {id: 2, message: 'It\'s my first post', likesCont: 11},
    ],
    profile: null as ProfileType | null,
    status: ""
};

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'profile/SET-STATUS';
const DELETE_POST = 'profile/DELETE_POST';

export const profileReducer = (state = initialState, action: ProfileActionsType) => {
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
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p=> p.id !== action.postId)}
        }
        default:
            return state
    }
}

export type ProfileActionsType = AddPostACType
    | setUserProfileACType
    | SetStatusACType
    | DeletePostACType

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


// type getUserProfileACType = ReturnType<typeof getUserProfile>
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

export default profileReducer;