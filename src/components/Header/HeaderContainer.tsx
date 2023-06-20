import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getAuthUserData, logout} from "../../redux/auth-reducer";

export type PropsType = {
    // setAuthUserData: (userId: number,email: string, login: string) => void
    getAuthUserData: () => void
}

class HeaderContainer extends React.Component<AllPropsType> {
    componentDidMount() {
        this.props.getAuthUserData();

    }

    render() {
        return <Header {...this.props} logout={this.props.logout}/>
    }
}
export type AllPropsType = PropsType & {
    isAuth: boolean | null,
    login: string | null,
    logout: () => void
}

export type AllPropsTypeForLoginComponent =  {
    isAuth: boolean | null,
    login: (email:string,password:string,rememberMe:boolean) => void,
}

const mapStateToProps = (state:AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,

})
                                                                        //thunk
export default connect(mapStateToProps,{getAuthUserData,logout}) (HeaderContainer);