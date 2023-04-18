import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sedMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {StoreType} from "../../redux/state";
import Dialogs from "../Dialogs";


type DialogsPropsType = {
    store: StoreType
}

const DialogsContainer = (props: DialogsPropsType) => {

    let state = props.store.getState().dialogsPage
    
    // let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    // let messagesElements = state.messages.map(message => <Message message={message.message}/>);
    // let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sedMessageCreator());
    }
                 //e: ChangeEvent<HTMLTextAreaElement>
    let onNewMessageChange = (body) => {
        // let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
      <>
          <Dialogs updateNewMessageBody={onNewMessageChange}
                   sedMessage={onSendMessageClick}
                   dialogsPage={state}
          />
      </>
    )
}
export default DialogsContainer