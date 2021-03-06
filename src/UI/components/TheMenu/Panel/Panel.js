import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import * as routes from '../../../../constants/routes'
import './Panel.scss'

function Panel({ title, id, path }) {
	const [isOpen, SetIsOpen] = useState(false)

	const openPanel = () => {
		SetIsOpen(!isOpen)
	}

	return (
		<li
			className={`panel bg-img-${id} ${isOpen ? '--open' : ''}`}
			onClick={openPanel}
		>
			<p>Helmets</p>
			<NavLink to={`${routes.HELMETS}/${path}`}>{title}</NavLink>
			<p>{title}</p>
		</li>
	)
}

export default Panel
