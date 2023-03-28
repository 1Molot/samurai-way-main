import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsType} from "../../../redux/state";


type MyPostsType = {
    posts: PostsType
    addPost: (postValue: string) => void
}

const MyPosts = (props: MyPostsType) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCont}/>)

    let newPostElement: React.RefObject<HTMLTextAreaElement> = React.createRef();

    let addPost = () => {
        if( newPostElement.current) {
            let text = newPostElement.current.value;
            props.addPost(text);
            // newPostElement.current.value = '';
            props.updateNewPostText('');
        }
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div>
            <div className={s.postsBlock}>
                <h3>My posts</h3>
            </div>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post
                    </button>
                    {/*<button>Remove</button>*/}
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;