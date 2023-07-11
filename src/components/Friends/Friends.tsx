import React, {useEffect} from 'react';
import {UserType} from "../../redux/users-reducer";
import {useDispatch, useSelector} from "react-redux";
import {getFriendsProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import s from './Friend.module.css'


export const Friends = () => {

   const dispatch = useDispatch()
    const friends = useSelector<AppStateType, UserType[] >(((state) => state.profilePage.friends))

    useEffect(() => {
        dispatch(getFriendsProfile())
    },[])


    return (
        <div>
            {friends?.map((friend,id) => {
                const {name,photos,status,location} = friend
                return <div key={id} className={s.friendsBlock}>
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