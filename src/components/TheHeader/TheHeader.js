import React from 'react'
import { NavLink } from 'react-router-dom'
import * as routes from '../../constants/routes'
import logo from '../../assets/img/logo.svg'
import './TheHeader.scss'

class TheHeader extends React.Component {
	render() {
		return (
			<header className="header">
				<nav className="header__nav">
					<NavLink to={routes.HOME} className="header__brand">
						<img src={logo} alt="Bell logo" className="header__logo" />
					</NavLink>
					<NavLink to={routes.LOGIN}>Login / Register</NavLink>
				</nav>
			</header>
		)
	}
}

export default TheHeader
