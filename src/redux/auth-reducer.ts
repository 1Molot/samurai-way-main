import {Dispatch} from "redux";
import {authAPI, securityAPI} from "../api/api";
import {ThunkDispatch} from "redux-thunk";
import {stopSubmit} from "redux-form";

export type TypeInitialState = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    captchaUrl: string | null
}

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null // if null, then captcha is not required
};

const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS';

const authReducer = (state: TypeInitialState = initialState, action: TsarACType) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

type TsarACType = SetAuthUserData | SetCaptchaUrlSuccess

type SetAuthUserData = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: 'auth/SET_USER_DATA', payload: {userId, email, login, isAuth}
} as const)

type SetCaptchaUrlSuccess = ReturnType<typeof getCaptchaUrlSuccess>
export const getCaptchaUrlSuccess = (captchaUrl: string | null) => ({
    type: 'auth/GET_CAPTCHA_URL_SUCCESS', payload: {captchaUrl}
} as const)

export const getAuthUserData = () => async (dispatch: Dispatch) => {
    let response = await authAPI.me();

    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (email: string, password: string, rememberMe: boolean = false,captcha:string | null) => async (dispatch: ThunkDispatch<any, any, any>) => {
    let response = await authAPI.login(email, password, rememberMe,captcha);

    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if(response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        let message = response.data.mangle.length > 0 ? response.data.message[0] : "Some error"
        dispatch(stopSubmit("login", {_error: message}))
    }
}

export const getCaptchaUrl = () => async (dispatch: ThunkDispatch<any, any, any>) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url
        dispatch(getCaptchaUrlSuccess(captchaUrl))

}

export const logout = () => async (dispatch: Dispatch) => {
    let response = await authAPI.logout();

        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
}

export default authReducer;