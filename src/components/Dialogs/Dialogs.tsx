import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Redirect} from "react-router-dom";


const Dialogs = (props: DialogsPropsType) => {

    let state = props.dialogsPage
    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>);
    let messagesElements = state.messages.map(message => <Message message={message.message} key={message.id}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {

        props.sedMessage()
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        props.updateNewMessageBody(body)
    }

    if(!props.isAuth) return <Redirect to={"/login"}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter your message'></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs