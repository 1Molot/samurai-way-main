import React from 'react';
import {UserType} from "../../redux/users-reducer";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

export type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    users: UserType[]
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    currentPage: number
    followingInProgress: string[]
    portionSize:number
}
// presend component
const Users = (props: UsersPropsType) => {

    return (
        <div>
            <Paginator
                portionSize={props.portionSize}//
                currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                       totalUsersCount={props.totalUsersCount}
                       pageSize={props.pageSize}/>
            <div>
            {
                props.users.map(u => <User user={u}
                                           followingInProgress={props.followingInProgress}
                                           key={u.id}
                                           unfollow={props.unfollow}
                                           follow={props.follow}
                    />
                )
            }
            </div>
        </div>
    )
}

export default Users;