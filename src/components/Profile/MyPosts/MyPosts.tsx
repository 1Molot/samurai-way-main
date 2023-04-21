import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {MyPostsContainerProps} from "./MyPostsContainer";

// type MyPostsType = {
//     posts: PostsType
//     newPostText: string
//     dispatch: (action: ActionsType) => void
//     // updateNewPostText: (text: any) => void
//     // addPost: () => void;
//     //text:string
// }

const MyPosts = (props: MyPostsContainerProps) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCont}/>)

    let newPostElement: React.RefObject<HTMLTextAreaElement> = React.createRef();

    let onAddPost = () => {
        props.addPost(); //
    }

    let onPostChange = () => {
        let text = newPostElement.current?.value as string;
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
                    <button onClick={onAddPost}>Add post
                    </button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;