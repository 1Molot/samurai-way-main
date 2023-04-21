import React from "react";



export type UserType = {
    id: number,
    photoUrl:string,
    followed: boolean
    fullName: string
    status: string
    location: {
        city: string
        country: string
    }
}
export type UsersType = UserType[]

let initialState = {
    users: [

    ],
};

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'

const usersReducer = (state = initialState, action: TsarACType) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users:
                state.users.map(u=>{
                    if(u.id === action.action.userId){
                        return {...u,followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state, users:
                    state.users.map(u=>{
                        if(u.id === action.userId){
                            return {...u,followed: false}
                        }
                        return u
                    })
            }
        case SET_USERS: {
            return {...state,users: [...state.users, ...action.users]}
        }
        default:
            return state
    }

    type TsarACType = followACType | unFollowACType | setUsersACType

    type followACType = ReturnType<typeof followAC>
    const followAC = (userId:number) => ({
        type: 'FOLLOW', userId
    } as const)

    type unFollowACType = ReturnType<typeof unFollowAC>
    const unFollowAC = (userId:number) => ({
        type: 'UNFOLLOW', userId
    } as const)
}
type setUsersACType = ReturnType<typeof setUsersAC>
    const setUsersAC = (users:string) => ({
        type: 'SET_USERS', users
    } as const)


export default usersReducer;