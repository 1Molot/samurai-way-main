import React from "react";
import { legacy_createStore as createStore} from 'redux'
import {combineReducers} from "redux";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import {profileReducer} from "./profile-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    //sidebar:sidebarReducer
});

export type AppStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer);

// @ts-ignore
window.store = store;

export default store;

export class StateType {
}