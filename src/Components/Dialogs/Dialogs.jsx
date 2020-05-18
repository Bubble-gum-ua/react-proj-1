import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogsItem";
import MessageItem from "./Message/Message";


const Dialogs = (props) => {


    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>);
    let messagesElements = props.state.messages.map(m => <MessageItem message={m.message}/>);


    let typoMessage = React.createRef();

    let meassageReff = () => {
        let message = typoMessage.current.value;
        alert(message)
    }



    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea ref={typoMessage}></textarea>
            </div>
            <div>
                <button onClick={meassageReff}>Answer</button>
            </div>
        </div>

    )
};

export default Dialogs;
