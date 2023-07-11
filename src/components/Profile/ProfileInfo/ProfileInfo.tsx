import React, {ChangeEvent} from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import {ProfilePropsType} from "../Profile";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import myPhoto from "../../../assets/imges/myPhoto.png";

const ProfileInfo = (props: ProfilePropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {

        const files = e.currentTarget.files;

        if (files && files.length) {

            props.savePhoto(files[0])
        }
    }

    return (
        <>
            <div className={s.descriptionBlock}>
                <div>
                    <img src={props.profile.photos.large || myPhoto} className={s.mainPhoto}/>
                    {
                        props.isOwner && <label htmlFor="load_avatar">
                            <div className={s.button}>image</div>
                        </label>
                    }

                    <input
                        id={"load_avatar"}
                        hidden
                        type={"file"} onChange={onMainPhotoSelected}/>
                </div>

                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </>
    )
}
export default ProfileInfo;