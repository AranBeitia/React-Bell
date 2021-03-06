import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import * as routes from '../../../constants/routes'
import { useAuth } from '../../../context/Auth/reducer'
import logo from '../../assets/img/logo.svg'
import { Button, ButtonIcon } from '../Button/Button.style'
import './TheHeader.scss'

import ProfileMenu from '../ProfileMenu/ProfileMenu'

function TheHeader(props) {
	const { user, isAuth } = useAuth()
	const [open, setOpen] = useState(false)

	return (
		<header className="header container">
			<nav className="header__nav">
				<NavLink to={routes.HOME} className="header__brand">
					<img src={logo} alt="Bell logo" className="header__logo" />
				</NavLink>
				{isAuth ? (
					<div className="header__profile">
						<span>Hello {user.name}</span>
						<ButtonIcon
							className="icon-avatar header__icon"
							onClick={() => setOpen(!open)}
						/>
						{open && <ProfileMenu />}
					</div>
				) : (
					<Button>
						<NavLink to={routes.AUTH}>Login / Register</NavLink>
					</Button>
				)}
			</nav>
		</header>
	)
}

export default TheHeader
