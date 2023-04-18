import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {ActionsType, PostsType} from "../../../redux/state";
import MyPosts from "../MyPosts";
import {text} from "stream/consumers";


type MyPostsType = {
    posts: PostsType
    newPostText: string
    dispatch: (action: ActionsType) => void
   // updateNewPostText: (text: any) => void
   // addPost: () => void;
    //text:string
}


const MyPostsContainer = (props: MyPostsType) => {

    let state = props.store.getState();

    let addPost = () => {
        // props.addPost(); //
       props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (props:text) => {
        // let text = newPostElement.current?.value as string;
        // props.updateNewPostText(text); //
        let action = updateNewPostTextActionCreator(text);
      props.store.dispatch(action);
    }

    return (
        <>
            <MyPosts updateNewPostText={onPostChange} addPost={addPost}
                     posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
            />
        </>
    )
}

export default MyPostsContainer;