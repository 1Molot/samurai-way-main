import React from 'react';
import {LoginFormDataType, LoginReduxForm} from "./LoginForm";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {AllPropsType, AllPropsTypeForLoginComponent} from "../Header/HeaderContainer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";

const Login = (props:AllPropsTypeForLoginComponent) => {

    const onSubmit = (formData:LoginFormDataType) => {
        //callback
        props?.login?.(formData.email,formData.password,formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state:AppStateType) => ({
    isAuth: state.auth.isAuth,
    // login: state.auth.login,
})


export default connect(mapStateToProps,{login})(Login);