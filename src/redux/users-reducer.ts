import {usersAPI} from "../api/api";
import {AnyAction, Dispatch} from "redux";
import {updateObjectInArray} from "../utils/object-helpers/object-helpers";
import {AxiosResponse} from "axios";

export type UserType = {
    id: string,
    photos: {
        small: string | null,
        large: string | null,
    },
    followed: boolean
    name: string
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
    portionSize:number
}

let initialState: InitialStateType = {
    users: [] as UsersType,
    pageSize: 10, //5
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
    portionSize: 10
};

const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT'
const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET_USERS'
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_PROGRESS'

const usersReducer = (state = initialState, action: TsarACType): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users:updateObjectInArray(state.users,action.userId,"id",{followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users:updateObjectInArray(state.users,action.userId,"id",{followed: false})
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
    type: 'users/FOLLOW', userId
} as const)

type unfollowACType = ReturnType<typeof unfollowSuccess>
export const unfollowSuccess = (userId: string) => ({
    type: 'users/UNFOLLOW', userId
} as const)

type setUsersACType = ReturnType<typeof setUsers>

export const setUsers = (users: UserType[]) => ({
    type: 'users/SET_USERS', users
} as const)

type setCurrentPageACType = ReturnType<typeof setCurrentPage>

export const setCurrentPage = (currentPage: number) => ({
    type: 'users/SET_CURRENT_PAGE', currentPage
} as const)

type setUsersTotalCountACType = ReturnType<typeof setUsersTotalCount>

export const setUsersTotalCount = (totalUsersCount: number) => ({
    type: 'users/SET_TOTAL_USERS_COUNT', count: totalUsersCount
} as const)

type toggleIsFetchingACType = ReturnType<typeof toggleIsFetching>

export const toggleIsFetching = (isFetching: boolean) => ({
    type: 'users/TOGGLE_IS_FETCHING', isFetching
} as const)

type toggleFollowingProgress = ReturnType<typeof toggleFollowingProgress>

export const toggleFollowingProgress = (isFetching: boolean, userId: string) => ({
    type: 'users/TOGGLE_IS_FOLLOWING_PROGRESS', isFetching, userId
} as const)

export const requestUsers = (page: number, pageSize: number,frend?:boolean) => {
    return async (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));
        let data = await usersAPI.getUsers(page, pageSize,frend);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setUsersTotalCount(data.totalCount));
    }
}

type ResponseType = {
    data: {
        resultCode: number
    }
}

//xz
const followUnfollowFlow = async (userId: string, dispatch: Dispatch, apiMethod: (userId:string) => Promise<AxiosResponse>, actionCreator: (userId: string) => AnyAction) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await apiMethod(userId);
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId: string) => {
    return async (dispatch: Dispatch) => {

        followUnfollowFlow(userId, dispatch, usersAPI.follow.bind(usersAPI), followSuccess)
    }
}

export const unfollow = (userId: string) => {
    return async (dispatch: Dispatch) => {
        followUnfollowFlow(userId, dispatch, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)

    }
}

export default usersReducer;