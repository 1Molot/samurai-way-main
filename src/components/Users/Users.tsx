import React from 'react';
import styles from "./users.module.css";
import usersPhoto from "../../assets/imges/user.png";
import {toggleFollowingProgress, UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../api/api";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    users: UserType[]
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    currentPage: number
    // toggleFollowingProgress: (isFetching: boolean, userId: string) => void
    // id:string
    followingInProgress: string[]
}
// presend component
let Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map((p: number) => {
                    return <span key={p}
                                 className={props?.currentPage === p ? styles.selectedPage : ''}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}>
                           {p}
                       </span>
                })}

            </div>
            {
                props.users.map(u => <div key={u.id}>
          <span>
              <div>
                  <NavLink to={'/profile/' + u.id}>
                  <img src={u.photos.small !== null ? u.photos.small : usersPhoto} className={styles.userPhoto}/>
                      </NavLink>
              </div>
              <div>
                  {
                      u.followed
                          ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                    onClick={() => {
                                        props.unfollow(u.id)
                                    }}>
                              UnFollow</button>

                          : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                    onClick={() => {
                                        props.follow(u.id)
                                    }}>
                              Follow</button>
                  }
              </div>
          </span>
                    <span>
          <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
          </span>
          <span>
                <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
          </span>
              </span>
                </div>)
            }
        </div>
    )
}

export default Users;