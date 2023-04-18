import React from "react";
import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:profileReducer,
    //sidebar:sidebarReducer
});




let store = createStore(reducers);



export default store;