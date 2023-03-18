import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


type MyPostsType = {
    id:number
    message:string
    likesCont:number
}

const MyPosts = (props:Partial<MyPostsType>) => {

    let posts = [
        {id: 1, message: 'Hi, how are you?', likesCont: 12},
        {id: 2, message: 'It\'s my first post', likesCont: 11},
    ]
    let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCont}/>)
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