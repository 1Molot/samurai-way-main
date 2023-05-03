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
    pageSize:5 ,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
};

const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'    //iz

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
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {                               //iz
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {                               //iz
            return {...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {                               //iz
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state
    }
}

type TsarACType = followACType | unfollowACType | setUsersACType | setCurrentPageACType  | setUsersTotalCountACType | toggleIsFetchingACType

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
type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>  //iz
export const setCurrentPageAC = (currentPage: number) => ({
    type: 'SET_CURRENT_PAGE', currentPage
} as const)
type setUsersTotalCountACType = ReturnType<typeof setUsersTotalCountAC>  //iz
export const setUsersTotalCountAC = (totalUsersCount: number) => ({
    type: 'SET_TOTAL_USERS_COUNT', count:totalUsersCount
} as const)
type toggleIsFetchingACType = ReturnType<typeof toggleIsFetchingAC>  //iz
export const toggleIsFetchingAC = (isFetching: boolean) => ({
    type: 'TOGGLE_IS_FETCHING', isFetching
} as const)

export default usersReducer;