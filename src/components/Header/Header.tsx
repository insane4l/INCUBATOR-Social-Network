import React from "react"
import s from './Header.module.css'

const Header: React.FC = () => {
	return (
		<header className={s.header}>
			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/S-Bahn-Logo.svg/1200px-S-Bahn-Logo.svg.png" />
		</header>
	)
}

export default Header
