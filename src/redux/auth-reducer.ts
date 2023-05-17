
// export type UserrType = {
//     userId: number,      //id
//     email: string,
//     login: string,
//     isAuth:boolean
// }
// export type UserrsType = UserrType[]

import {Dispatch} from "redux";
import {authAPI} from "../api/api";

let initialState = {
    id: null,      //id
    email: null,
    login: null,
    isAuth: false
};


type TypeInitialState = {
    id: number | null,      //id
    email: string | null,
    login: string | null,
    isAuth:boolean
}
const SET_USER_DATA = 'SET_USER_DATA';


const authReducer = (state:TypeInitialState = initialState, action: TsarACType) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
             ...action.data,
                isAuth:true
            }

        default:
            return state
    }
}

type TsarACType = SetAuthUserData

type SetAuthUserData = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (userId: number,email: string, login: string,) => ({
    type: 'SET_USER_DATA',data: {userId, email, login}
} as const)

export const getAuthUserData = () => (dispatch: Dispatch) => {
    return authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data;
            dispatch(setAuthUserData(id, email, login));
        }
    });
}

export default authReducer;