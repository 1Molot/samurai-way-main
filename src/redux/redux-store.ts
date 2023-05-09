import React from "react";
import {createStore} from 'redux'
import {combineReducers} from "redux";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import {profileReducer} from "./profile-reducer";
import authReducer from "./auth-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    //sidebar:sidebarReducer,
    auth: authReducer
});



let store = createStore(rootReducer);

export type AppStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;

export default store;

export class StateType {
}