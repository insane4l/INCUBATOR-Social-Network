import React from "react"
import { NavLink } from "react-router-dom"
import s from './Navbar.module.css'

const Navbar: React.FC = () => {

	let links = [
		{title: 'Profile', path: '/profile'},
		{title: 'Dialogs', path: '/dialogs'},
		{title: 'Users', path: '/users'},
		{title: 'News', path: '/news'},
		{title: 'Music', path: '/music'},
		{title: 'Settings', path: '/settings'}
	]


	return (
		<nav className={s.nav}>

			{ links.map(el => <NavbarLink key={el.path} title={el.title} path={el.path}/>) }
			
		</nav>
	)
}

const NavbarLink: React.FC<NavbarLinkPropsType> = ({title, path}) => {
	return (

        <NavLink className={({ isActive }) => isActive ? s.activelink : s.link} to={path}>
            {title}
        </NavLink>
			
	)
}

export default Navbar


type NavbarLinkPropsType = {
	title: string
	path: string
}