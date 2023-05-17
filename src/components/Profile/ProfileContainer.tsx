import React from "react";
import Profile, {ProfileType} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";


class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = String(28786); //2
        }
        this.props.getUserProfile(userId);
    }

    render() {
        if(!this.props.isAuth) return <Redirect to={"/login"}/>

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

type MapDispatchToPropsType = {
    // setUserProfileAC: (profile: ProfileType) => void
    getUserProfile: (userId: string) => void
}


let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export type ProfilePropsType =
    ReturnType<typeof mapStateToProps>
    & MapDispatchToPropsType
    & RouteComponentProps<PathParamsType>

type PathParamsType = {
    userId: string
}

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);