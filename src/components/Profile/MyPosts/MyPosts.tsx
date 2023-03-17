import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

type MyPostsType = {
    id:number
    message:string
    likesCont:number
}

const MyPosts = (props:MyPostsType) => {

    let postData = [
        {id: 1, message: 'Hi, how are you?', likesCont: 12},
        {id: 2, message: 'It\'s my first post', likesCont: 11},
    ]
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
                <Post message={postData[0].message} likesCount={postData[0].likesCont}/>
                <Post message={postData[1].message} likesCount={postData[1].likesCont}/>

            </div>
        </div>
    )
}

export default MyPosts;