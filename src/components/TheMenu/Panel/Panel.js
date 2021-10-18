import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
// import PanelStyled from './Panel.style'
import './Panel.scss'

function Panel({ title, id, path }) {
	const [isOpen, SetIsOpen] = useState(false)

	const openPanel = () => {
		SetIsOpen(!isOpen)
	}

	return (
		<li
			className={`panel panel--img-${id} ${isOpen ? '--open' : ''}`}
			onClick={openPanel}
		>
			<p>Helmets</p>
			<p>{title}</p>
			<NavLink to={path}>{title}</NavLink>
		</li>
	)
}

export default Panel
