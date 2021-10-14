import React from 'react'
// import { NavLink } from 'react-router-dom'
// import * as routes from '../../constants/routes'
import './TheMenu.scss'

import Panel from './Panel'
class TheMenu extends React.Component {
	render() {
		return (
			<nav>
				<ul className="panels">
					<Panel />
				</ul>
			</nav>
		)
	}
}
export default TheMenu
