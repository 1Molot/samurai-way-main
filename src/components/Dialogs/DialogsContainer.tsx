import React from "react";
import {sedMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {StoreType} from "../../redux/state";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {DialogsPageType, ProfilePageType} from "../../redux/store";


// type DialogsPropsType = {
//     store: StoreType
// }
export type StateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType
}

                          //state
let mapStateToProps = (props:StateType) => {
    return {
        dialogsPage:state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {    //callback
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
        sedMessage: () => {
            dispatch(sedMessageCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;