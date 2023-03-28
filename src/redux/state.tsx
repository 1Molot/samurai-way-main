import React from "react";

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
// export type UpdateNewPostTextType =
export type DialogsType = DialogType[]
export type MessageType = {
    id: number
    message: string
}
export type MessagesType = MessageType[]

let rerenderEntireThree = (state: StateType) => {
    console.log('State changed');
}

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

//@ts-ignore
window.state = state;

export const addPost = () => {   //postMessage: string
    let newPost: PostType = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCont: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireThree(state);
}
export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText;
    rerenderEntireThree(state);
}

export const subscribe = (observer: (state: StateType) => void) => {
    rerenderEntireThree = observer; //наблюдатель(pater) button.addEventListener
}

export default state;
// store - OOP
// перепаковать state засунуть все в store.export v index

