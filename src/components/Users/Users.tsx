import React from 'react';
import styles from "./users.module.css";
import {UsersProps} from "./UsersContainer";
import axios from "axios";
import usersPhoto from '../../assets/imges/user.png'


export const Users = (props: UsersProps) => {

    let getUser = () => {

        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items);
            });
            // props.setUsers([
            //     {
            //         id: '1',
            //         photoUrl:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fkino.mail.ru%2Fperson%2F447125_dmitrij_nagiev%2F&psig=AOvVaw119hCD3dD2-r-k5z8VtF1D&ust=1682174329783000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJjmruyZu_4CFQAAAAAdAAAAABAE',
            //         followed: false,
            //         fullName: 'Dmitry',
            //         status: 'I am boss',
            //         location: {city: 'Minsk', country: 'Belarus'}
            //     },
            //     {
            //         id: '2',
            //         photoUrl:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fkino.mail.ru%2Fperson%2F447125_dmitrij_nagiev%2F&psig=AOvVaw119hCD3dD2-r-k5z8VtF1D&ust=1682174329783000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJjmruyZu_4CFQAAAAAdAAAAABAE',
            //         followed: true,
            //         fullName: 'Sasha',
            //         status: 'I am boss too',
            //         location: {city: 'Moscow', country: 'Russia'}
            //     },
            //     {
            //         id: '3',
            //         photoUrl:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fkino.mail.ru%2Fperson%2F447125_dmitrij_nagiev%2F&psig=AOvVaw119hCD3dD2-r-k5z8VtF1D&ust=1682174329783000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJjmruyZu_4CFQAAAAAdAAAAABAE',
            //         followed: false,
            //         fullName: 'Andrew',
            //         status: 'I am boss too',
            //         location: {city: 'Kiev', country: 'Ukraine'}
            //     }
            // ])

        }
    }

    return (
        <div>
            <button onClick={getUser}>Get Users</button>
            {
                props.users.map(u => <div key={u.id}>
          <span>
              <div>
                  <img src={u.photos.small !== null ? u.photos.small : usersPhoto} className={styles.userPhoto}/>
              </div>
              <div>
                  {u.followed
                      ? <button onClick={() => {
                          props.unfollow(u.id)
                      }}>UnFollow</button>
                      : <button onClick={() => {
                          props.follow(u.id)
                      }}>Follow</button>}
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