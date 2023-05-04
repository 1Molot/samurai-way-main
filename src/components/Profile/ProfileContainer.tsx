import React from "react";
import Profile, {ProfileType} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setUserProfileAC} from "../../redux/profile-reducer";

//UsersProps
class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
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

export type ProfilePropsType = ReturnType<typeof mapStateToProps> & MapDispatchToPropsType

export default connect(mapStateToProps, {setUserProfileAC}) (ProfileContainer);