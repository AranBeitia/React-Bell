import React from 'react'
import { useAuth } from '../../../context/Auth/reducer'
import { ButtonIcon } from '../Button/Button.style'
import ProfileStyle from './Profile.style'

function ProfileMenu() {
	const { logout, getTheme } = useAuth()

	return (
		<ProfileStyle>
			<ul className="profile__nav">
				<li className="profile__item" onClick={getTheme}>
					<ButtonIcon className="icon-cogs" />
					<span className="profile__text">theme</span>
				</li>
				<li className="profile__item" onClick={logout}>
					<ButtonIcon className="icon-switch" />
					<span className="profile__text">logout</span>
				</li>
			</ul>
		</ProfileStyle>
	)
}

export default ProfileMenu
