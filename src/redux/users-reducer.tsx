import React from "react";

export type UserType = {
    id: string,
    photos: {
        small: string | null,
        large: string | null,
    },
    followed: boolean
    name: string     //fullName
    status: string
    location: {
        city: string
        country: string
    }
}
export type UsersType = UserType[]

let initialState = {
    users: [] as UsersType,
};

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'

const usersReducer = (state = initialState, action: TsarACType) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users:
                    state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: true}
                        }
                        return u
                    })
            }
        case UNFOLLOW:
            return {
                ...state, users:
                    state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: false}
                        }
                        return u
                    })
            }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state
    }
}

type TsarACType = followACType | unfollowACType | setUsersACType

type followACType = ReturnType<typeof followAC>
export const followAC = (userId: string) => ({
    type: 'FOLLOW', userId
} as const)

type unfollowACType = ReturnType<typeof unfollowAC>
export const unfollowAC = (userId: string) => ({
    type: 'UNFOLLOW', userId
} as const)

type setUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: UserType[]) => ({
    type: 'SET_USERS', users
} as const)


export default usersReducer;