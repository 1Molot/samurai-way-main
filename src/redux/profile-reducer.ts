import React from "react";
import {ProfileType} from "../components/Profile/Profile";


let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCont: 12},
        {id: 2, message: 'It\'s my first post', likesCont: 11},
    ],
    newPostText: 'it-kamasutra.com',
    profile: null as ProfileType | null
};

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

export const profileReducer = (state = initialState, action: ProfileActionsType) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCont: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state
    }
}

export type ProfileActionsType = AddPostACType | UpdateNewPostTextACType | setUserProfileACType

type AddPostACType = ReturnType<typeof addPostActionCreator>
export const addPostActionCreator = () => ({
    type: ADD_POST
} as const)

type setUserProfileACType = ReturnType<typeof setUserProfileAC>
export const setUserProfileAC = (profile: ProfileType) => ({
    type: SET_USER_PROFILE, profile
} as const)

type UpdateNewPostTextACType = ReturnType<typeof updateNewPostTextActionCreator>
export const updateNewPostTextActionCreator = (text: string) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
} as const)

export default profileReducer;