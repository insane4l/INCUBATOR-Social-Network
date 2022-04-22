import React from "react"
import { NavLink } from "react-router-dom";
import s from './Header.module.css'

const Header: React.FC<HeaderPropsType> = ({isUserAuthorized, userName}) => {
	return (
		<header className={s.header}>
			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/S-Bahn-Logo.svg/1200px-S-Bahn-Logo.svg.png" />

			<div className={s.loginBlock}>
				{isUserAuthorized
					? <div>{userName}</div>
					: <NavLink className={s.loginBtn} to="/login/">Login</NavLink>
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
