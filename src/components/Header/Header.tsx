import React from "react"
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../../redux/authReducer";
import s from './Header.module.css'

const Header: React.FC<HeaderPropsType> = ({isUserAuthorized, userName}) => {

	const dispatch = useDispatch();
	const onLogout = () => {
		dispatch(logout())
	}

	return (
		<header className={s.header}>
			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/S-Bahn-Logo.svg/1200px-S-Bahn-Logo.svg.png" />

			<div className={s.loginBlock}>
				{isUserAuthorized
					? <div>
						<span>{userName}</span>
						<button onClick={onLogout}>Log out</button>
					  </div>
					: <NavLink className={s.loginBtn} to="/login">Log in</NavLink>
				}
			</div>
		</header>
	)
}

export default Header;


type HeaderPropsType = {
	isUserAuthorized: boolean
	userName: string | null
}
