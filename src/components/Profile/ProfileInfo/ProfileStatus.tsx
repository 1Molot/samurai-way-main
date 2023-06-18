import React, {ChangeEvent} from "react";

type ProfileStatusType = {
    status: string
    updateStatus: any
    // updateStatus: (status:string) => void
    // value:number
}

class ProfileStatus extends React.Component<ProfileStatusType> {


    state = {
        editMode: false,
        status: this.props.status

    }

    activateEditMode = () => {
        this.setState({   //асинхронен
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({   //асинхронен
            editMode: false
        })
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e:ChangeEvent<HTMLInputElement>) => {
      this.setState({
          status:e.currentTarget.value
      })
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<{}>, snapshot?: any) {
        if(prevProps.status !== this.props.status) {
            this.setState({status:this.props.status})
        }
    }


    render() {

        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || "---"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input  onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}
                               value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;