import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";         //import Users from "./UsersC";
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
                       //контейнерная компонента
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
export default connect(mapStateToProps, mapDispatchToProps)(Users);