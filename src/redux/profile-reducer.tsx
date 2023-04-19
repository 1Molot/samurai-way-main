import React from "react";
import {PostType, ProfilePageType} from "./state";


let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCont: 12},
        {id: 2, message: 'It\'s my first post', likesCont: 11},
    ],
    newPostText: 'it-kamasutra.com'
};

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
//ProfilePageType
const profileReducer = (state = initialState, action: ProfileActionsType) => {        //ProfilePageType
    switch (action.type) {
        case ADD_POST:{
            let newPost: PostType = {
                id: 5,
                message: state.newPostText,
                likesCont: 0
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT:{
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;

    }


export const addPostActionCreator = () => ({
    type: ADD_POST
} as const)
export const updateNewPostTextActionCreator = (text: string) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
} as const)


type AddPostACType = ReturnType<typeof addPostActionCreator>
type UpdateNewPostTextACType = ReturnType<typeof updateNewPostTextActionCreator>
export type ProfileActionsType = AddPostACType | UpdateNewPostTextACType

export default profileReducer;