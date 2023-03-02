import React from "react";
import s from './Post.module.css';

type PropsType = {
    message: string
}

const Post = (props:PropsType) => {

    return (
        <div className={s.item}>
            <img src='https://oper.ru/static/data/gallery/l1048753984.jpg'/>
            {props.message}
            <div>
                <span>like</span>
            </div>
        </div>
    )
};

export default Post;