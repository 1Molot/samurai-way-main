import React from 'react';
import styles from "./users.module.css";

type UserType = {
    id: number,
    photoUrl:string,
    followed: boolean
    fullName: string
    status: string
    location: {
        city: string
        country: string
    }
}
type UsersType = UserType[]

export const Users = (props:UsersType) => {
    if(props.users.length === 0){
    props.setUsers([
        {
            id: 1,
            photoUrl:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fkino.mail.ru%2Fperson%2F447125_dmitrij_nagiev%2F&psig=AOvVaw119hCD3dD2-r-k5z8VtF1D&ust=1682174329783000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJjmruyZu_4CFQAAAAAdAAAAABAE',
            followed: false,
            fullName: 'Dmitry',
            status: 'I am boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            photoUrl:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fkino.mail.ru%2Fperson%2F447125_dmitrij_nagiev%2F&psig=AOvVaw119hCD3dD2-r-k5z8VtF1D&ust=1682174329783000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJjmruyZu_4CFQAAAAAdAAAAABAE',
            followed: true,
            fullName: 'Sasha',
            status: 'I am boss too',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: 3,
            photoUrl:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fkino.mail.ru%2Fperson%2F447125_dmitrij_nagiev%2F&psig=AOvVaw119hCD3dD2-r-k5z8VtF1D&ust=1682174329783000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJjmruyZu_4CFQAAAAAdAAAAABAE',
            followed: false,
            fullName: 'Andrew',
            status: 'I am boss too',
            location: {city: 'Kiev', country: 'Ukraine'}
        }
    ])
    }

    return (
        <div>
            {
      props.users.map( u => <div key={u.id}>
          <span>
              <div>
                  <img src={u.photoUrl} className={styles.userPhoto}/>
              </div>
              <div>
                  {u.followed
                      ? <button onClick={()=> {props.unfollow(u.id)}}>UnFollow</button>
                      : <button onClick={()=> {props.follow(u.id)}}>Follow</button>}
              </div>
          </span>
          <span>
          <span>
              <div>{u.fullName}</div>
              <div>u.status}</div>
          </span>
          <span>
                <div>{u.location.country}</div>
              <div>{u.location.city}</div>
          </span>
              </span>
      </div> )
            }
        </div>
    )
}






export default Users;