import React, {ChangeEvent, useState} from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import {ProfilePropsType, ProfileType} from "../Profile";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import myPhoto from "../../../assets/imges/myPhoto.png";
import ProfileDataFormReduxForm, {ProfileFormData} from "./ProfileDataForm";

const ProfileInfo = (props: ProfilePropsType) => {

    let [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {

        const files = e.currentTarget.files;

        if (files && files.length) {

            props.savePhoto(files[0])
        }
    }

    const onSubmit = (formData: ProfileFormData) => {
         props.saveProfile(formData).then(()=> {
             setEditMode(false)
         })
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <div>
                    <img src={props.profile.photos.large || myPhoto} className={s.mainPhoto}/>
                    {
                        props.isOwner && <label htmlFor="load_avatar">
                            <div className={s.button}>image</div>
                        </label>
                    }
                    <input id={"load_avatar"} hidden type={"file"} onChange={onMainPhotoSelected}/>
                    {editMode
                        ? <ProfileDataFormReduxForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}/>
                        : <ProfileData goToEditMode={() => {
                            setEditMode(true)
                        }} profile={props.profile} isOwner={props.isOwner}/>}
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                </div>
            </div>
        </div>
    )
}


export type ProfileDataType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}

export const ProfileData = (props: ProfileDataType) => {
    const {contacts} = props.profile

    type typeCont = keyof typeof contacts
    const keysContackts:typeCont[] = Object.keys(props.profile.contacts) as typeCont[]


    const drawContacts = keysContackts.map((key: typeCont) => {
        return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
    })
    return (
        <div className={s.info}>
            {props.isOwner && <div>
                <button onClick={props.goToEditMode}>edit</button>
            </div>}
            <div>
                <b>Full name</b>: {props.profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b>: {props.profile.lookingForAJob ? "yes" : "no"}
            </div>
            {
                props.profile.lookingForAJob &&
                <div>
                    <b>My professional skills</b>: {props.profile.lookingForAJobDescription}
                </div>
            }
            <div>
                <b>About me</b>: {props.profile.aboutMe}
            </div>
            <div className={s.contacts}>
                <div>
                    <b>Contacts</b>:{drawContacts}
                </div>

            </div>
        </div>
    )
}


//& ProfileType
export type ContactType = {
    contactTitle: string
    contactValue: string | null
}

export const Contact = (props: ContactType) => {

    return (
        <div className={s.contact}>
            <b>{props.contactTitle}</b>: {props.contactValue}
        </div>
    )
}

export default ProfileInfo;