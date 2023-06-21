import React from "react";
import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

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

type InitialStateType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: string[]
}

let initialState: InitialStateType = {
    users: [] as UsersType,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};

const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

const usersReducer = (state = initialState, action: TsarACType): InitialStateType => {
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
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state
    }
}

type TsarACType = followACType |
    unfollowACType |
    setUsersACType |
    setCurrentPageACType |
    setUsersTotalCountACType |
    toggleIsFetchingACType |
    toggleFollowingProgress

type followACType = ReturnType<typeof followSuccess>
export const followSuccess = (userId: string) => ({
    type: 'FOLLOW', userId
} as const)

type unfollowACType = ReturnType<typeof unfollowSuccess>
export const unfollowSuccess = (userId: string) => ({
    type: 'UNFOLLOW', userId
} as const)

type setUsersACType = ReturnType<typeof setUsers>

export const setUsers = (users: UserType[]) => ({
    type: 'SET_USERS', users
} as const)

type setCurrentPageACType = ReturnType<typeof setCurrentPage>

export const setCurrentPage = (currentPage: number) => ({
    type: 'SET_CURRENT_PAGE', currentPage
} as const)

type setUsersTotalCountACType = ReturnType<typeof setUsersTotalCount>

export const setUsersTotalCount = (totalUsersCount: number) => ({
    type: 'SET_TOTAL_USERS_COUNT', count: totalUsersCount
} as const)

type toggleIsFetchingACType = ReturnType<typeof toggleIsFetching>

export const toggleIsFetching = (isFetching: boolean) => ({
    type: 'TOGGLE_IS_FETCHING', isFetching
} as const)

type toggleFollowingProgress = ReturnType<typeof toggleFollowingProgress>

export const toggleFollowingProgress = (isFetching: boolean, userId: string) => ({
    type: 'TOGGLE_IS_FOLLOWING_PROGRESS', isFetching, userId
} as const)

export const requestUsers = (page: number, pageSize: number) => {
    return (dispatch:Dispatch) => {

        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));

        usersAPI.getUsers(page, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setUsersTotalCount(data.totalCount));
        });
    }
}

export const follow = (userId: string) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId));
            });
    }
}

export const unfollow = (userId: string) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId));
            });
    }
}


export default usersReducer;