import React from "react";
import {ProfileType} from "../components/Profile/Profile";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";


let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCont: 12},
        {id: 2, message: 'It\'s my first post', likesCont: 11},
    ],
    // newPostText: 'it-kamasutra.com',
    profile: null as ProfileType | null,
    status: ""
};

const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET-STATUS';

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
        // case UPDATE_NEW_POST_TEXT: {
        //     return {
        //         ...state,
        //         newPostText: action.newText
        //     };
        // }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state
    }
}

export type ProfileActionsType = AddPostACType
    // | UpdateNewPostTextACType
    | setUserProfileACType
    | SetStatusACType

type AddPostACType = ReturnType<typeof addPostActionCreator>
export const addPostActionCreator = (newPostText:string) => ({
    type: ADD_POST,newPostText
} as const)

type setUserProfileACType = ReturnType<typeof setUserProfileAC>
export const setUserProfileAC = (profile: ProfileType) => ({
    type: SET_USER_PROFILE, profile
} as const)

// type getUserProfileACType = ReturnType<typeof getUserProfile>
export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfileAC(response.data));
    });
}
export const getStatus = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatusAC(response.data));
        });
}
export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatusAC(status));
            }
        });
}

// type UpdateNewPostTextACType = ReturnType<typeof updateNewPostTextActionCreator>
// export const updateNewPostTextActionCreator = (text: string) => ({
//     type: UPDATE_NEW_POST_TEXT, newText: text
// } as const)

type SetStatusACType = ReturnType<typeof setStatusAC>
export const setStatusAC = (status: string) => ({
    type: SET_STATUS, status
} as const)

export default profileReducer;