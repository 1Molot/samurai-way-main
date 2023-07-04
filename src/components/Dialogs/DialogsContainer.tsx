import React from "react";
import {sedMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";


let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
export let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        sedMessage: (newMessageBody:string) => {
            dispatch(sedMessageCreator(newMessageBody));
        }
    }
}

export type DialogsPropsType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    // WithAuthRedirect
)(Dialogs);