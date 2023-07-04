import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {MyPostsContainerProps} from "./MyPostsContainer";
import {AddNewPostFormRedux, PostFormDataType} from "./AddNewPostForm";


const MyPosts = React.memo((props: MyPostsContainerProps) => {

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCont}/>)

    let newPostElement = React.createRef();

    let onAddPost = (values: PostFormDataType) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
})

export default MyPosts;