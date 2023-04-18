import React from "react";
import { legacy_createStore as createStore} from 'redux'
import {combineReducers} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:profileReducer,
    //sidebar:sidebarReducer
});




let store = createStore(reducers);



export default store;