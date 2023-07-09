import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Friends} from "../Friends/Friends";

const Navbar = () => {

    const myId = useSelector<AppStateType, number | null>(state => state.auth.userId)

    return (
        <nav className={s.nav}>
           <div>
               <div className={s.item}>
                   <NavLink to={`/profile/${myId}`} activeClassName={s.activeLink}>Profile</NavLink>
               </div>
               <div className={`${s.item} ${s.active}`}>
                   <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
               </div>
               <div className={`${s.item} ${s.active}`}>
                   <NavLink to="/users" activeClassName={s.activeLink}>Users</NavLink>
               </div>
               <div className={`${s.item} ${s.active}`}>
                   <NavLink to="/friends" activeClassName={s.activeLink}>Friends</NavLink>
               </div>
               <div className={s.item}>
                   <a>News</a>
               </div>
               <div className={s.item}>
                   <a>Music</a>
               </div>
               <div className={s.item}>
                   <a>Settings</a>
               </div>
           </div>
            <Friends/>
        </nav>
    )
}

export default Navbar;