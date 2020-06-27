import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogsItem";
import MessageItem from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/state";


const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;


    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>);
    let messagesElements = state.messages.map(m => <MessageItem message={m.message}/>);

    let newMessageBody = state.newMessageBody;


    /*  let typoMessage = React.createRef();*/

    /*    let meassageReff = () => {
            let message = typoMessage.current.value;
            alert(message)
        }*/

    let pnSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    };

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    };


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
            {/* <div>
                <textarea ref={typoMessage}></textarea>
            </div>
            <div>
                <button onClick={meassageReff}>Answer</button>
            </div>*/}
        </div>

    )
};

export default Dialogs;
