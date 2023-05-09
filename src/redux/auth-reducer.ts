import React from "react";

export type UserrType = {
    userId: number,      //id
    email: string,
    login: string,
    isAuth:boolean
}
export type UserrsType = UserrType[]

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

export default authReducer;