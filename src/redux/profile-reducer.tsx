import React from "react";
import {PostType, ProfilePageType} from "./state";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state: ProfilePageType, action: ProfileActionsType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {
                id: 5,
                message: state.newPostText,
                likesCont: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
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