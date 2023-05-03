import React from 'react';
import styles from "./users.module.css";
import {UsersProps} from "./UsersContainer";
import axios from "axios";
import usersPhoto from '../../assets/imges/user.png'

// классовая компонента
class Users extends React.Component<UsersProps> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount); //iz
        });
    }

    onPageChanged = (pageNumber:number) => {                   //iz
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    render() { //дай мне JSX, не делает перерисовку(render)

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)    //iz

        let pages = [];
        for (let i = 1; i < pagesCount; i++) {                 //iz
            pages.push(i);
        }

        return (
            <div>
                <div>
                    {pages.map((p:number) => {                                                              //iz
                       return <span
                           className={this?.props?.currentPage === p ? styles.selectedPage:''}
                           onClick={ (e) => {this.onPageChanged(p)}}>
                           {p}
                       </span>
                    })}

                </div>
                {
                    this.props.users.map(u => <div key={u.id}>
          <span>
              <div>
                  <img src={u.photos.small !== null ? u.photos.small : usersPhoto} className={styles.userPhoto}/>
              </div>
              <div>
                  {u.followed
                      ? <button onClick={() => {
                          this.props.unfollow(u.id)
                      }}>UnFollow</button>
                      : <button onClick={() => {
                          this.props.follow(u.id)
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

}

export default Users;