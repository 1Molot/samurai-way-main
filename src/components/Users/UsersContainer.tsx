import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {follow, requestUsers, setCurrentPage, unfollow} from "../../redux/users-reducer";
import Preloader from "../common/preloader/Preloader";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {
    getUsers,
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getPortionSize
} from "../../redux/users-selectors";

//контейнерная компонента
class UsersContainer extends React.Component<UsersProps> {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize,this.props.friend);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.requestUsers(pageNumber, this.props.pageSize,this.props.friend);
    }
    render() { //дай мне JSX, не делает перерисовку(render)

        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    portionSize={this.props.portionSize}
                    totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       users={this.props.users}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       followingInProgress={this.props.followingInProgress}
                />
            </>
        )
    }
}

let mapStateToProps = (state: AppStateType) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        portionSize:getPortionSize(state)
    }
}

type MDPType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setCurrentPage: (pageNumber: number) => void
    requestUsers: (currentPage: number, pageSize: number,friend?:boolean) => void
}

const mapDispatchToProps = {
    follow,
    unfollow,
    setCurrentPage,
    requestUsers
}

export type UsersProps = ReturnType<typeof mapStateToProps> & MDPType & {friend?:boolean}

export default compose<React.ComponentType<any>>(
    //WithAuthRedirect,//защита
    connect(mapStateToProps, mapDispatchToProps)
)(UsersContainer);


