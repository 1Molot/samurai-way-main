import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sedMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {StoreType} from "../../redux/state";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


type DialogsPropsType = {
    store: StoreType
}
                  //props: DialogsPropsType
const DialogsContainer = () => {

    return (
      <>
          <StoreContext.Consumer>
              {
              (store) => {
                  let state = store.getState().dialogsPage

                  let onSendMessageClick = () => {
                      store.dispatch(sedMessageCreator());
                  }
                  //e: ChangeEvent<HTMLTextAreaElement>
                  let onNewMessageChange = (body) => {
                      // let body = e.target.value;
                      store.dispatch(updateNewMessageBodyCreator(body));
                  }
       return (
           <Dialogs updateNewMessageBody={onNewMessageChange}
                   sedMessage={onSendMessageClick}
                   dialogsPage={state}/>
       )
              }
          }
          </StoreContext.Consumer>
      </>
    )
}
export default DialogsContainer