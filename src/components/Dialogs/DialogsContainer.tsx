import React from "react";
import {sedMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";


let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {    //callback
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
        sedMessage: () => {
            dispatch(sedMessageCreator());
        }
    }
}

let AuthRedirectComponent = WithAuthRedirect(Dialogs) //iz

export type DialogsPropsType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);  //Dialogs


export default DialogsContainer;