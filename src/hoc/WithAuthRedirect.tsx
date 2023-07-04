import React, {Component, ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";


type MapStatePropsType = {
    isAuth: boolean
}

let mapStateToPropsForRedirect = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth
})

export function WithAuthRedirect<T>(Component: ComponentType<T>) {

    class RedirectComponent extends React.Component<MapStatePropsType, any> {
        render() {

            let {isAuth, ...restProps} = this.props

            if (!isAuth) return <Redirect to={"/login"}/>

            return <Component {...restProps as T}/>;
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent;
}