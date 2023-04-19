import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {ActionsType, PostsType} from "../../../redux/state";
import MyPosts from "./MyPosts";
import {text} from "stream/consumers";
import {connect} from "react-redux";


type MyPostsType = {
    posts: PostsType
    newPostText: string
    dispatch: (action: ActionsType) => void
    // updateNewPostText: (text: any) => void
    // addPost: () => void;
    //text:string
}


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;