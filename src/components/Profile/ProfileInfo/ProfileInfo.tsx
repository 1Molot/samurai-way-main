import React from "react";
import s from './ProfileInfo.module.css';
import { ProfileType} from "../Profile";
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import {ProfilePropsType} from "../Profile";

const ProfileInfo = (props: ProfilePropsType) => {
    if(!props.profile){
        return <Preloader/>
    }

    return (
        <div>
            {/*<div>*/}
            {/*    <img*/}
            {/*        src='https://t3.ftcdn.net/jpg/05/24/30/02/360_F_524300228_egMskw0zvvdwNUFPeJLlplclKzFamXBk.jpg'/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}
export default ProfileInfo;