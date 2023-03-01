import React from "react";
import App from "../App";
import s from './Profile.module.css';

const Profile = () => {
    return  <div className={s.content}>
        <div>
            <img src='https://t3.ftcdn.net/jpg/05/24/30/02/360_F_524300228_egMskw0zvvdwNUFPeJLlplclKzFamXBk.jpg'/>
        </div>
        <div>
            ava + description
        </div>
        <div>
            My posts
        </div>
        <div>
            New posts
        </div>
        <div className={s.posts}>
            <div className={s.item}>
                post 1
            </div>
            <div>
                post 2
            </div>
        </div>
    </div>
}

export default Profile;