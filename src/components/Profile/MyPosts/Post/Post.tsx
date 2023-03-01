import React from "react";
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img src='https://oper.ru/static/data/gallery/l1048753984.jpg'/>
            post 1
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post;