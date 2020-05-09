import React from "react";
import s from "./Dialogs.module.css"

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog +' '+ s.active}>
                    Ozzeron
                </div>
                <div className={s.dialog}>
                    Lusyi
                </div>
                <div className={s.dialog}>
                    Lena
                </div>
                <div className={s.dialog}>
                    Freddy
                </div>
                <div className={s.dialog}>
                    Busya
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How is your mood?</div>
                <div className={s.message}>Yo</div>

            </div>
        </div>

    )
};

export default Dialogs;
