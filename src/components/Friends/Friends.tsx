import React, {useEffect, useState} from 'react';
import {UserType} from "../../redux/users-reducer";
import {instance} from "../../api/api";
import {useDispatch, useSelector} from "react-redux";
import {getFriendsProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import s from './friend.module.css'

// type FriendsType = {
//     friends: UserType[]
// }

export const Friends = () => {

   const dispatch = useDispatch()
    const friends = useSelector<AppStateType, UserType[] >(((state) => state.profilePage.friends))

    useEffect(() => {
        dispatch(getFriendsProfile())
    },[])


    return (
        <div>
            {friends?.map((friend) => {
                const {name,photos,status,location} = friend
                return <div className={s.friendsBlock}>
                    <img src={photos?.large ?? ''} alt="images-user"/>
                    <span>{name}</span>
                    <span>{status}</span>
                    <span>{location?.city ?? ''}</span>
                    <span>{location?.country ?? ''}</span>
                </div>
            })}

        </div>
    )
}