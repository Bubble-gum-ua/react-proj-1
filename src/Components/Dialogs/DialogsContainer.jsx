import React from "react";
import {sendMessage, updateNewMessageBody} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
};


const DialogsContainer = connect(mapStateToProps, {sendMessage,updateNewMessageBody})(Dialogs);

export default DialogsContainer;
