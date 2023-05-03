import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC,
    unfollowAC,
    UserType
} from "../../redux/users-reducer";
import axios from "axios";

                       //контейнерная компонента
class UsersContainer extends React.Component<UsersProps> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChanged = (pageNumber:number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    render() { //дай мне JSX, не делает перерисовку(render)


        return (
            <div>
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       users={this.props.users}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                />

            </div>
        )
    }

}


let mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize, //iz
        totalUsersCount: state.usersPage.totalUsersCount, //iz
        currentPage: state.usersPage.currentPage, //iz
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: string) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber:number) => {        //iz
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount:number) => {         //iz
            dispatch(setUsersTotalCountAC(totalCount))
        }
    }
}

export type UsersProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);