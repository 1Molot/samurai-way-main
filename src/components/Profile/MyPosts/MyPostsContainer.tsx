import React from "react";
import MyPosts from "./MyPosts";

import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../../redux/redux-store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

// type MyPostsType = {
//     posts: PostsType
//     newPostText: string
//     dispatch: (action: ActionsType) => void
//     // updateNewPostText: (text: any) => void
//     // addPost: () => void;
//     //text:string
// }

 const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

 const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateNewPostText: (text: string) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

export type MyPostsContainerProps = ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps>

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;