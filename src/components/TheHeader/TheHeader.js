import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import * as routes from '../../constants/routes'
import AuthContext from '../../context/AuthContext'
import logo from '../../assets/img/logo.svg'
import './TheHeader.scss'

function TheHeader() {
	const { user, isAuthenticated } = useContext(AuthContext)
	return (
		<header className="header">
			<nav className="header__nav">
				<NavLink to={routes.HOME} className="header__brand">
					<img src={logo} alt="Bell logo" className="header__logo" />
				</NavLink>
				{isAuthenticated ? (
					<div>
						<p>Hello {user.name}</p>
						<NavLink to={routes.PROFILE}>
							<span>avatar</span>
						</NavLink>
					</div>
				) : (
					<NavLink to={routes.LOGIN}>Login / Register</NavLink>
				)}
			</nav>
		</header>
	)
}

export default TheHeader
