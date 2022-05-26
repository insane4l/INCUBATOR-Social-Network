import React from 'react';

class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps: ProfileStatusPropsType) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.changeValue(this.state.status);
    }

    onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>
                {this.state.editMode 
                    ? <div>
                        <input onBlur={this.deactivateEditMode} value={this.state.status} onChange={this.onStatusChange} type="text" autoFocus/>
                    </div>

                    : <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || "--------"}</span>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;


type ProfileStatusPropsType = {
    status: string
    changeValue: (message: string) => void
}