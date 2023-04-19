import React from "react";
import profileReducer, {ProfileActionsType} from "./profile-reducer";
import dialogsReducer, {DialogsActionsType} from "./dialogs-reducer";
//import sidebarReducer from "./sidebar-reducer";

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
    newMessageBody: string
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
export type ActionsType = ProfileActionsType | DialogsActionsType
export type StoreType = {
    _state: StateType
    _callSubscriber: (state: StateType) => void
    getState: () => StateType
    subscribe: (observer: (state: StateType) => void) => void
    dispatch: (action: ActionsType) => void
}

let store: StoreType = {
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
            ],
            newMessageBody: ""
        },
        //sidebar: {}
    },
    _callSubscriber(state: StateType) {
        console.log('State changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer: (state: StateType) => void) {
        this._callSubscriber = observer; //наблюдатель(pater) button.addEventListener
    },

    dispatch(action: ActionsType) {

        this._state.profilePage = profileReducer(this._state.profilePage, action as ProfileActionsType);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action as DialogsActionsType);
        // this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}


//@ts-ignore
window.state = store;
export default store;


