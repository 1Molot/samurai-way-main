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

let store = {
    _state: {
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
    },
    getState() {
        return this._state;
    },
    _callSubscriber(state: StateType) {
        console.log('State changed');
    },
    addPost() {   //postMessage: string
        let newPost: PostType = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCont: 0
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer: (state: StateType) => void) {
        this._callSubscriber = observer; //наблюдатель(pater) button.addEventListener
    }
}


export default store;

//@ts-ignore
window.state = store;

// store - OOP
// перепаковать state засунуть все в store.export v index

