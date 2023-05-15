import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {
    follow, getUsers,
    setCurrentPage,
    setUsers,
    setUsersTotalCount, toggleFollowingProgress, toggleIsFetching,
    unfollow,
    UserType
} from "../../redux/users-reducer";
import axios from "axios";
import Preloader from "../common/preloader/Preloader";
import {usersAPI} from "../../api/api";

//контейнерная компонента
class UsersContainer extends React.Component<UsersProps> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize);

    }

    render() { //дай мне JSX, не делает перерисовку(render)

        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       users={this.props.users}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}

                       // toggleFollowingProgress={this.props.toggleFollowingProgress} //nenado
                       followingInProgress={this.props.followingInProgress}
                />
            </>
        )
    }
}

let mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress

    }
}

const mapDispatchToProps = {
    follow,
    unfollow,
    // setUsers,
    setCurrentPage,
    // setUsersTotalCount,
    // toggleIsFetching,
    // toggleFollowingProgress,
    getUsers
}

export type UsersProps = ReturnType<typeof mapStateToProps> & MDPType


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

type MDPType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    // setUsers: (users: UserType[]) => void
    setCurrentPage: (pageNumber: number) => void
    // setUsersTotalCount: (totalCount: number) => void
    // toggleIsFetching: (isFetching: boolean) => void
    // toggleFollowingProgress: (isFetching: boolean, userId: string) => void
    getUsers: (currentPage: number, pageSize: number) => void
}
