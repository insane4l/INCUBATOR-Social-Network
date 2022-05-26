import React, { createRef } from "react"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import { compose } from "redux"
import { DialogMessageType, DialogsUserType, sendMessageAC, setNewMessageBodyAC } from "../../../redux/dialogsReducer"
import { AppStateType } from "../../../redux/store"
import { getDialogsUsers, getNewMessageBody, getUserMessages } from "../../../selectors/dialogSelectors"
import { withRedirect } from "../../common/withRedirect"
import s from './Dialogs.module.css'

const Dialogs: React.FC<DialogsPropsType> = ({users, userMessages, newMessageBody, setNewMessageBody, sendMessage}) => {

	return (
		<div className={s.dialogs}>
			<div className={s.usersList}>
				{users.map(el => <User key={el.id} name={el.name} id={el.id} />)}
			</div>

			<div className={s.messages}>
				{userMessages.map(el => <Message key={el.id} message={el.message} />)}
				<textarea value={newMessageBody} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setNewMessageBody(e.currentTarget.value)}></textarea>
				<button onClick={sendMessage}>Send Message</button>
			</div>
		</div>
	)
}

const Message: React.FC<MessagePropsType> = ({message}) => {
	return <div className={s.message}>{message}</div>
}

const User: React.FC<UserPropsType> = ({name, id}) => {
	return <NavLink className={({ isActive }) => isActive ? s.activeUser : s.user} to={`${id}`}>{name}</NavLink>
}

const mapStateToProps = (state: AppStateType) => ({
	users: getDialogsUsers(state),
	userMessages: getUserMessages(state),
	newMessageBody: getNewMessageBody(state),
})


export default compose<React.ComponentType>(
	withRedirect,
	connect(mapStateToProps, {sendMessage: sendMessageAC, setNewMessageBody: setNewMessageBodyAC}),
)(Dialogs);

type DialogsPropsType = {
	users: DialogsUserType[]
	userMessages: DialogMessageType[]
	newMessageBody: string
	setNewMessageBody: (message: string) => void
	sendMessage: () => void
}

type MessagePropsType = {message: string};
type UserPropsType = DialogsUserType;