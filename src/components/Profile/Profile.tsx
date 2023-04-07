import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {DialogsPageType, ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePage:ProfilePageType
    addPost: (postValue: string) => void
    updateNewPostText: (newText: string) => void
}

const Profile = (props:ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;