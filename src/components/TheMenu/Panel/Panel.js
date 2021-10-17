import React from 'react'
import { NavLink } from 'react-router-dom'
// import PanelStyled from './Panel.style'
import './Panel.scss'

function Panel({ title, id, path }) {
	// const [isOpen, SetIsOpen] = useState(false)

	// openPanel = () => {
	// 	SetIsOpen(!isOpen)
	// }

	return (
		<li className={`panel panel--img-${id}`}>
			<NavLink to={path}>{title}</NavLink>
		</li>
	)
}

export default Panel
