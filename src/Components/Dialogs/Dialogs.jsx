import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogsItem";
import MessageItem from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../Common/FormsControls/FromsControls";
import {maxLengthCreator, required} from "../../Utils/Validators/validators";

class Dialogs extends React.Component {


    render() {
        let state = this.props.dialogsPage;
        let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}
                                                                 avatar={d.avatar}/>);
        let messagesElements = state.messages.map(m => <MessageItem message={m.message} key={m.id}/>);

        let addNewMessage = (values) => {
            this.props.sendMessage(values.newMessageBody);
        };

        if (!this.props.isAuth) return <Redirect to={"/login"}/>;

        return (
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    <div>{messagesElements}</div>
                </div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>

        )
    }
}

const maxLength30 = maxLengthCreator(30);

const AddMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className={s.messageForm}>
            <div>
                <Field component={TextArea}
                       validate={[required, maxLength30]}
                       name="newMessageBody" placeholder="Enter your message"/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
};

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);

export default Dialogs;
