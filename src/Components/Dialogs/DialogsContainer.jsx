import React from "react";
import {sendMessage} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

export default compose(
    connect(mapStateToProps, {sendMessage}),
    withAuthRedirect
)(Dialogs);
