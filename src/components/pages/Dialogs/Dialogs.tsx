import React from "react"
import { NavLink } from "react-router-dom"
import s from './Dialogs.module.css'

const Dialogs: React.FC = () => {

	const users = [
		{name: 'Dmitry', id: 1},
		{name: 'Roman', id: 2},
		{name: 'Victor', id: 3},
		{name: 'Alex', id: 4},
	]

	const userMessages = [
		{message: 'Hello!', id: 1},
		{message: 'How are you?', id: 2},
		{message: 'Lets do that project what we talk about', id: 3},
		{message: 'It might help other people', id: 4},
		{message: 'Yeah great idea', id: 5}
	]



	return (
		<div className={s.dialogs}>
			<div className={s.usersList}>
				{users.map(el => <User key={el.id} name={el.name} userId={el.id} />)}
			</div>

			<div className={s.messages}>
				{userMessages.map(el => <Message key={el.id} text={el.message} />)}
			</div>
		</div>
	)
}

const Message: React.FC<MessagePropsType> = ({text}) => {
	return <div className={s.message}>{text}</div>
}

const User: React.FC<UserPropsType> = ({name, userId}) => {
	return <NavLink className={({ isActive }) => isActive ? s.activeUser : s.user} to={`${userId}`}>{name}</NavLink>
}

export default Dialogs



type MessagePropsType = {
	text: string
}

type UserPropsType = {
	name: string
	userId: number
}