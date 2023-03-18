import React from "react";
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogsItemPropsType = {
    id: number | string
    name: string
}

const DialogItem = (props: DialogsItemPropsType) => {
    let path = "/dialogs/1" + props.id;
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name} </NavLink>
    </div>
}

export default DialogItem;

