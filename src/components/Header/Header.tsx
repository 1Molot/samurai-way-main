import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";


export type PropsType = {
    isAuth: boolean | null,
    login: string | null,
}
const Header = (props:PropsType) => {
    return (
        <header className={s.header}>
            <img src='https://img.freepik.com/premium-vector/aa-letter-monogram-bold-company-name-logo_609138-89.jpg?w=740'/>

            <div className={s.loginBlock}>
                { props.isAuth ? props.login
                   : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;