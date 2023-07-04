import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {ThunkDispatch} from "redux-thunk";
import {stopSubmit} from "redux-form";

export type TypeInitialState = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth:boolean,
}

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,

};

const SET_USER_DATA = 'SET_USER_DATA';

const authReducer = (state:TypeInitialState = initialState, action: TsarACType) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

type TsarACType = SetAuthUserData

type SetAuthUserData = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (userId: number | null,email: string | null, login: string | null,isAuth: boolean) => ({
    type: 'SET_USER_DATA',payload: {userId, email, login,isAuth}
} as const)

export const getAuthUserData = () => (dispatch: Dispatch) => {

     return authAPI.me().then(response => {
         console.log(response, 'res')
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data;
            dispatch(setAuthUserData(id, email, login,true));
        }
    });
}

export const login = (email:string,password:string,rememberMe: boolean = false) => (dispatch: ThunkDispatch<any, any, any>) => {

      authAPI.login(email,password,rememberMe).then(response => {
        if (response.data.resultCode === 0) {
          dispatch(getAuthUserData())
        }else {
            let message = response.data.mangle.length > 0 ? response.data.message[0] : "Some error"
            dispatch(stopSubmit("login",{_error:message}))
        }
    });
}

export const logout = () => (dispatch: Dispatch) => {

     authAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null,false));
        }
    });
}

export default authReducer;