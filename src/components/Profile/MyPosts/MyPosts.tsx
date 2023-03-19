import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


type MyPostsType = {
    id:number
    message:string
    likesCont:number
    posts:string
    map:string
}
//Partial<MyPostsType>
const MyPosts = (props:MyPostsType) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCont}/>)

    return (
        <div>
            <div className={s.postsBlock}>
                <h3>My posts</h3>
            </div>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
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