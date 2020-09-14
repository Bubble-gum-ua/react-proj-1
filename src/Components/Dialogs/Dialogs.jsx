import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogsItem";
import MessageItem from "./Message/Message";
import {Redirect} from "react-router-dom";

class Dialogs extends React.Component {


    render() {
        let state = this.props.dialogsPage;
        let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}
                                                                 avatar={d.avatar}/>);
        let messagesElements = state.messages.map(m => <MessageItem message={m.message} key={m.id}/>);
        let newMessageBody = state.newMessageBody;

        let pnSendMessageClick = () => {
            this.props.sendMessage();
        };

        let onNewMessageChange = (e) => {
            let body = e.target.value;
            this.props.updateNewMessageBody(body);
        };

        if (!this.props.isAuth) return <Redirect to={"/login"} />;

        return (
            <div className={s.dialogs}>

                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    <div>{messagesElements}</div>
                    <div> <textarea value={newMessageBody}
                                    onChange={onNewMessageChange}
                                    placeholder="Enter your message"></textarea></div>
                    <div>
                        <button onClick={pnSendMessageClick}>Send</button>
                    </div>
                </div>

            </div>

        )
    }
}

export default Dialogs;
