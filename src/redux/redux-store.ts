import React from "react";
import {applyMiddleware, createStore} from 'redux'
import {combineReducers} from "redux";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import {profileReducer} from "./profile-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    //sidebar:sidebarReducer,
    auth: authReducer
});



let store = createStore(rootReducer,applyMiddleware(thunkMiddleware));

export type AppStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;

export default store;

export class StateType {
}