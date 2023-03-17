import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";



const DialogItem = (props: DialogsItemPropsType) => {
    let path = "/dialogs/1" + props.id;
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name} </NavLink>
    </div>
}
type DialogsItemPropsType = {
    id: string
    name: string
}
type DialogsPropsType = {
    message: string
    id: number
}
type MessagePropsType = {
    message: string
}
const Message = (props: MessagePropsType) => {
    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'},
    ]
    let messageData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},

    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                {/*<DialogItem name="Dimych" id="1"/>*/}
                {/*<DialogItem name="Andrey" id="2"/>*/}
                {/*<DialogItem name="Sveta" id="3"/>*/}
                {/*<DialogItem name="Sasha" id="4"/>*/}
                {/*<DialogItem name="Victor" id="5"/>*/}
                {/*<DialogItem name="Valera" id="6"/>*/}
            </div>
            <div className={s.messages}>
                <Message message={messageData[0].message}/>
                <Message message={messageData[1].message}/>
                {/*<Message message="Hi"/>*/}
                {/*<Message message="How is your it-kamasutra?"/>*/}
                {/*<Message message="Yo"/>*/}
                {/*<Message message="Yo"/>*/}
                {/*<Message message="Yo"/>*/}
            </div>
        </div>
    )
}

export default Dialogs