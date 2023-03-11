import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogsItemPropsType = {
   id: string
  name: string
}

const DialogItem = (props: DialogsItemPropsType) => {
    let path = "/dialogs/1" + props.id;
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name} </NavLink>
    </div>
}

type MessagePropsType = {
    message: string
}
const Message = (props: MessagePropsType) => {
    return <div className={s.dialog}>{props.message}</div>
}
type DialogsPropsType = {
}
const Dialogs = (props: DialogsPropsType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Dimych" id="1"/>
                <DialogItem name="Andrey" id="2"/>
                <DialogItem name="Sveta" id="3"/>
                <DialogItem name="Sasha" id="4"/>
                <DialogItem name="Victor" id="5"/>
                <DialogItem name="Valera" id="6"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="How is your it-kamasutra?"/>
                <Message message="Yo"/>
                <Message message="Yo"/>
                <Message message="Yo"/>
            </div>
        </div>
    )
}

export default Dialogs