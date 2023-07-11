import React, {ChangeEvent, useEffect, useState} from "react";

type ProfileStatusWithHooksType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatusWithHooks = (props: ProfileStatusWithHooksType) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(()=> {
        setStatus(props.status)
    },[props.status])     // синхронизация, когда измениться статус

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status);
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (

        <>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || "---"}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                           value={status}/>
                </div>
            }
        </>
    )
}


export default ProfileStatusWithHooks;