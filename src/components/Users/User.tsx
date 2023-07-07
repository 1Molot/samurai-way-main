import React from 'react';
import styles from "./Users.module.css";
import usersPhoto from "../../assets/imges/user.png";
import {NavLink} from "react-router-dom";
import {UserType} from "../../redux/users-reducer";

export type UserPropsType = {
    user: UserType
    followingInProgress: string[]
    unfollow: (userId: string) => void
    follow: (userId: string) => void
}

const User = (props: UserPropsType) => {

    return (
        <div>
           <span>
              <div>
                  <NavLink to={'/profile/' + props.user.id}>
                  <img src={props.user.photos.small !== null ? props.user.photos.small : usersPhoto} className={styles.userPhoto}/>
                      </NavLink>
              </div>
              <div>
                  {
                      props.user.followed
                          ? <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                    onClick={() => {
                                        props.unfollow(props.user.id)
                                    }}>
                              UnFollow</button>

                          : <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                    onClick={() => {
                                        props.follow(props.user.id)
                                    }}>
                              Follow</button>
                  }
              </div>
          </span>
            <span>
          <span>
              <div>{props.user.name}</div>
              <div>{props.user.status}</div>
          </span>
          <span>
                <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
          </span>
              </span>
        </div>
    )
}

export default User;