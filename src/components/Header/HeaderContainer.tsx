import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getAuthUserData} from "../../redux/auth-reducer";

type PropsType = {
    // setAuthUserData: (userId: number,email: string, login: string) => void
    getAuthUserData: () => void
}

class HeaderContainer extends React.Component<AllPropsType> {
    componentDidMount() {
        this.props.getAuthUserData();

    }

    render() {
        return <Header {...this.props}/>
    }
}
export type AllPropsType = PropsType & {
    isAuth: boolean | null,
    login: string | null,

}

const mapStateToProps = (state:AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,

})

export default connect(mapStateToProps,{getAuthUserData}) (HeaderContainer);