import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {AllPropsType} from "./HeaderContainer";
const Header = (props:AllPropsType) => {

    return (
        <header className={s.header}>
            <img src='https://www.svgrepo.com/show/261808/api.svg'/>
            <div className={s.loginBlock}>
                { props.isAuth ?
                    <div className={s.loginText} >{props.login} - <button onClick={()=>{
                        props.logout()
                    }
                    }>Log out</button> </div>
                   : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}
export default Header;