import React, { useContext } from 'react'
import AuthContext from '../../../context/AuthContext'
import ButtonIcon from '../Button/ButtonIcon'
import './Profile.scss'

function ProfileMenu() {
	const { logout, theme } = useContext(AuthContext)

	const handleLogout = () => {
		logout()
	}

	const handleTheme = () => {
		theme()
	}

	return (
		<nav className="profile">
			<ul className="profile__nav">
				<li className="profile__item" onClick={handleTheme}>
					<ButtonIcon />
					<span>theme</span>
				</li>
				<li className="profile__item" onClick={handleLogout}>
					<ButtonIcon />
					<span href="#" className="icon-button">
						logout
					</span>
				</li>
			</ul>
		</nav>
	)
}

export default ProfileMenu
