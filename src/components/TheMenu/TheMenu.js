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
					<Panel />
					<Panel />
					<Panel />
					<Panel />
					{/* <li>
						<NavLink to={routes.SNOW}>Snow</NavLink>
					</li>
					<li>
						<NavLink to={routes.SIDE}>Side X Side</NavLink>
					</li>
					<li>
						<NavLink to={routes.MOTOIII}>Moto III</NavLink>
					</li>
					<li>
						<NavLink to={routes.DIRT}>Dirt bike</NavLink>
					</li>
					<li>
						<NavLink to={routes.STREET}>Street bike</NavLink>
					</li> */}
				</ul>
			</nav>
		)
	}
}
export default TheMenu
