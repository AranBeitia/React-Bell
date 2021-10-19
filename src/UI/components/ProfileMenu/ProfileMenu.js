import React, { useContext } from 'react'
import AuthContext from '../../../context/AuthContext'
import { ButtonIcon } from '../Button/Button.style'
import ProfileStyle from './Profile.style'

function ProfileMenu() {
	const { logout, theme } = useContext(AuthContext)

	const handleLogout = () => {
		logout()
	}

	const handleTheme = () => {
		theme()
	}

	return (
		<ProfileStyle>
			<ul className="profile__nav">
				<li className="profile__item" onClick={handleTheme}>
					<ButtonIcon className="icon-cogs" />
					<span className="profile__text">theme</span>
				</li>
				<li className="profile__item" onClick={handleLogout}>
					<ButtonIcon className="icon-switch" />
					<span className="profile__text">logout</span>
				</li>
			</ul>
		</ProfileStyle>
	)
}

export default ProfileMenu
