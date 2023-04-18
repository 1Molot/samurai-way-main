import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsType, DialogsPageType, ProfilePageType} from "../../redux/state";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {StateType} from "../../redux/store";

type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsType) => void
}
// export type StoreType = {
//     _state: StateType
//     _callSubscriber: (state: StateType) => void
//     getState: () => StateType
//     subscribe: (observer: (state: StateType) => void) => void
//     dispatch: (action: ActionsType) => void
// }

const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer  />
                     {/*          posts={props.profilePage.posts}*/}
                     {/*newPostText={props.profilePage.newPostText}*/}
                     {/*dispatch={props.dispatch}/>*/}
        </div>
    )
}

export default Profile;