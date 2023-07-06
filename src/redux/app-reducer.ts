import {getAuthUserData} from "./auth-reducer";
import {ThunkDispatch} from "redux-thunk";

export type TyperInitialState = {
    initialized: boolean,
}

let initialState = {
    initialized: false,
};

const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS';

const appReducer = (state: TyperInitialState = initialState, action: TsarACType) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

type TsarACType = InitialSuccess

type InitialSuccess = ReturnType<typeof initialSuccess>
export const initialSuccess = () => ({
    type: 'app/INITIALIZED_SUCCESS'
} as const)

export const initializeApp = () => (dispatch: ThunkDispatch<any, any, any>) => {
    let promise = dispatch(getAuthUserData());

    Promise.all([promise])
        .then(() => {
            dispatch(initialSuccess());
        })
}

export default appReducer;
