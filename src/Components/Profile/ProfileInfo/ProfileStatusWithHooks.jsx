import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateMode = () => {
        setEditMode(true);
    }
    const deActivateMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {!editMode &&
            <div>
               <b>Status: </b> <span onDoubleClick={activateMode}>  {props.status || "Tupo bez musley"} </span>
            </div>
            }
            {editMode &&
            <div>
                <input autoFocus={true} onChange={onStatusChange} onBlur={deActivateMode} value={status}/>
            </div>
            }
        </div>
    )

}

export default ProfileStatusWithHooks;