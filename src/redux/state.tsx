import React from "react";
import {rerenderEntireTree} from "../render";


export type StateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType
}
export type ProfilePageType = {
    posts: PostsType
    newPostText: string //
}
export type DialogsPageType = {
    dialogs: DialogsType
    messages: MessagesType
}
export type PostsType = PostType[]

export type PostType = {
    id: number
    message: string
    likesCont: number
}

export type DialogType = {
    id: number
    name: string
}
export type DialogsType = DialogType[]

export type MessageType = {
    id: number
    message: string
}
export type MessagesType = MessageType[]

let state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCont: 12},
            {id: 2, message: 'It\'s my first post', likesCont: 11},
        ],
        newPostText: 'it-kamasutra.com'
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrew'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Victor'},
            {id: 6, name: 'Valera'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'},
        ]
    },
    // sidebar: {}
}

window.state = state;

export let addPost = () => {   //postMessage: string
    let newPost: PostType = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCont: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}
export let updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}


export default state;

