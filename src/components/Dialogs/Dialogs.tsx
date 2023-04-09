import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType, sedMessageCreator, StateType, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";


type DialogsPropsType = {
    state: DialogsPageType
}

const Dialogs = (props: DialogsPropsType) => {

    let state = props.store.getState().dialogsPage

    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = state.messages.map(message => <Message message={message.message}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = (e:MouseEvent<HTMLButtonElement,MouseEvent>) => {
        props.store.dispatch(sedMessageCreator());
    }
    let onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));

    }

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