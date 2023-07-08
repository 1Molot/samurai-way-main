import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {usersAPI} from "../../api/api";


class ProfileContainer extends React.Component<ProfilePropsType> {

    private userId: string | null = null;

    componentDidMount() {
        this.userId = this.props.match.params.userId;
        if (!this.userId) {
            this.userId = String(this.props.authorizedUserId)//String(28786); //moi
            if (!this.userId) {
                this.props.history.push("login")
            }
        }

        usersAPI.getFriends().then(res => {
            console.log(res.data)
        }) //zapixnyt v sanky

        this.props.getUserProfile(this.userId);//vbIzov sanki
        this.props.getStatus(this.userId);
    }

    componentDidUpdate(prevProps: Readonly<ProfilePropsType>, prevState: Readonly<{}>, snapshot?: any) {

        const paramId = this.props.match.params.userId

        if(this.userId !== paramId) {

            this.userId = paramId;

            this.props.getUserProfile(this.userId);
            this.props.getStatus(this.userId);
        }
    }

    render() {
        return (
            <div>
                <Profile profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}/>
            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
}

export type ProfilePropsType =
    ReturnType<typeof mapStateToProps>
    & MapDispatchToPropsType
    & RouteComponentProps<PathParamsType>

type PathParamsType = {
    userId: string
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    // WithAuthRedirect
)(ProfileContainer);