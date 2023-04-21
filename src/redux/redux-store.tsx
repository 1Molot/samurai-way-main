import React from "react";
import { legacy_createStore as createStore} from 'redux'
import {combineReducers} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:profileReducer,
    usersPage: usersReducer,
    //sidebar:sidebarReducer
});


let store = createStore(reducers);

window.store = store;

export default store;

export class StateType {
}