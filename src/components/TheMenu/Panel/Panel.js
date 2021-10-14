import React from 'react'
import { NavLink } from 'react-router-dom'
import * as routes from '../../../constants/routes'
// import PanelStyled from './Panel.style'
import './Panel.scss'

function Panel({ title, id, path }) {
	console.log(path)
	// const [isOpen, SetIsOpen] = useState(false)

	// openPanel = () => {
	// 	SetIsOpen(!isOpen)
	// }

	return (
		<li className={`panel panel--img-${id}`}>
			<p>{title}</p>
			<p>{title}</p>
			<NavLink to={path}>{title}</NavLink>
		</li>
	)
}

export default Panel
