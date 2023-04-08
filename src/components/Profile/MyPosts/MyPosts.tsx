import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, PostsType, updateNewPostTextActionCreator} from "../../../redux/state";


type MyPostsType = {
    posts: PostsType
    addPost: (postValue: string) => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}



const MyPosts = (props: MyPostsType) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCont}/>)

    let newPostElement: React.RefObject<HTMLTextAreaElement> = React.createRef();

    let addPost = () => {
        //     if (newPostElement.current) {
        //         let text = newPostElement.current.value;
        //         props.dispatch({type: 'ADD-POST'});
        //         // newPostElement.current.value = '';
        //         props.updateNewPostText('');
        //     }
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current?.value as string;
        // let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        // props.dispatch({type: 'UPDATE-NEW-POST-TEXT',newText: text});
        props.dispatch(action);
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