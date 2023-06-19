import React from "react";
import MyPosts from "./MyPosts";

import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../../redux/redux-store";
import {addPostActionCreator} from "../../../redux/profile-reducer";


const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
    }
}

 const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        // updateNewPostText: (text: string) => {
        //     let action = updateNewPostTextActionCreator(text);
        //     dispatch(action);
        // },
        addPost: (newPostText:string) => {    //iz
            dispatch(addPostActionCreator(newPostText));
        }
    }
}

export type MyPostsContainerProps = ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps>

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;