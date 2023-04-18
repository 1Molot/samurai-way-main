import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {ActionsType, PostsType} from "../../../redux/state";
import MyPosts from "./MyPosts";
import {text} from "stream/consumers";
import StoreContext from "../../../StoreContext";


type MyPostsType = {
    posts: PostsType
    newPostText: string
    dispatch: (action: ActionsType) => void
    // updateNewPostText: (text: any) => void
    // addPost: () => void;
    //text:string
}

                  //props: MyPostsType
const MyPostsContainer = () => {

    return (
        <>
            <StoreContext.Consumer>
                {
                (store) => {
                    let state = store.getState()
                    let addPost = () => {
                        // props.addPost(); //
                        store.dispatch(addPostActionCreator());
                    }

                    let onPostChange = (props: text) => {
                        // let text = newPostElement.current?.value as string;
                        // props.updateNewPostText(text); //
                        let action = updateNewPostTextActionCreator(text);
                        store.dispatch(action);
                    }
                    return (
                        <MyPosts updateNewPostText={onPostChange}
                                 addPost={addPost}
                                 posts={state.getState().profilePage.posts}
                                 newPostText={state.getState().profilePage.newPostText}/>
                    )
                }
                </StoreContext.Consumer>
                </>
                )
            }

                export default MyPostsContainer;