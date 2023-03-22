import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {DialogsPageType, ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    state:ProfilePageType
    addPost: (postValue: string) => void
}

const Profile = (props:ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts} addPost={props.addPost} />
        </div>
    )
}

export default Profile;