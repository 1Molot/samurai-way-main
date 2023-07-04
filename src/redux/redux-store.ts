import {applyMiddleware, createStore} from 'redux'
import {combineReducers} from "redux";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import {profileReducer} from "./profile-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import authReducer from "./auth-reducer";
import appReducer from "./app-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    //sidebar:sidebarReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;

export default store;

export class StateType {
}