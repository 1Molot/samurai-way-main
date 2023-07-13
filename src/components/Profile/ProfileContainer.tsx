import React from "react";
import Profile, {ProfileType} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    getFriendsProfile,
    getStatus,
    getUserProfile,
    savePhoto,
    saveProfile,
    updateStatus
} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {ProfileFormData} from "./ProfileInfo/ProfileDataForm";


class ProfileContainer extends React.Component<ProfilePropsType> {

    private userId: string | null = null;

    refreshProfile() {
        this.userId = this.props.match.params.userId;
        if (!this.userId) {
            this.userId = String(this.props.authorizedUserId)
            if (!this.userId) {
                this.props.history.push("login")
            }
        }
        this.props.getFriendsProfile()
        this.props.getUserProfile(this.userId);
        this.props.getStatus(this.userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps: Readonly<ProfilePropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <div>
                <Profile
                    isOwner={!this.props.match.params.userId}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}
                    savePhoto={this.props.savePhoto}
                    saveProfile={this.props.saveProfile}
                />

            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
    friends: state.profilePage.friends
})

type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
    getFriendsProfile: () => void
    savePhoto: (file: File) => void
    saveProfile:(profile: ProfileFormData) => Promise<void>
}

export type ProfilePropsType =
    ReturnType<typeof mapStateToProps>
    & MapDispatchToPropsType
    & RouteComponentProps<PathParamsType>

type PathParamsType = {
    userId: string
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, getFriendsProfile, savePhoto, saveProfile}),//
    withRouter,
    // WithAuthRedirect
)(ProfileContainer);