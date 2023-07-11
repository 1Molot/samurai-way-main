import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

export type PhotosType = {
    small: string
    large: string
}

export type ProfileType = {
    aboutMe: string | undefined,
    contacts: {
        facebook: string,
        website: null,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: null,
        github: string,
        mainLink: null
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: PhotosType
}
export type ProfilePropsType = {
    profile : ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner:boolean
    savePhoto:any //
}
const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;