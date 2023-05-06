import React from "react";
import Profile, {ProfileType} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setUserProfileAC} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

//UsersProps
class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = String(2);
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            this.props.setUserProfileAC(response.data);
        });
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType) => ({
  profile: state.profilePage.profile
})

type MapDispatchToPropsType = {
    setUserProfileAC: (profile: ProfileType) => void
}


let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export type ProfilePropsType = ReturnType<typeof mapStateToProps> & MapDispatchToPropsType & RouteComponentProps<PathParamsType>

type PathParamsType = {
    userId: string
}

export default connect(mapStateToProps, {setUserProfileAC})(WithUrlDataContainerComponent);