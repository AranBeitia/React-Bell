import React from 'react'
import { NavLink } from 'react-router-dom'
import * as routes from '../../../constants/routes'
// import PanelStyled from './Panel.style'
import './Panel.scss'

class Panel extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isOpen: false,
		}
	}
	openPanel = () => {
		this.setState({ isOpen: !this.state.isOpen })
	}

	render() {
		const { isOpen } = this.state
		return (
			<>
				<li
					className={`panel panel--img-1 ${isOpen ? '--open' : ''}`}
					onClick={this.openPanel}
				>
					<p>Helmets</p>
					<p>Snowmobile</p>
					<NavLink to={routes.SNOW}>Snow</NavLink>
				</li>
				<li className="panel panel--img-2">
					<p>Helmets</p>
					<p>Snowmobile</p>
					<NavLink to={routes.SIDE}>Side X Side</NavLink>
				</li>
				<li className="panel panel--img-3">
					<p>Helmets</p>
					<p>Snowmobile</p>
					<NavLink to={routes.MOTOIII}>Moto III</NavLink>
				</li>
				<li className="panel panel--img-4">
					<p>Helmets</p>
					<p>Snowmobile</p>
					<NavLink to={routes.DIRT}>Dirt bike</NavLink>
				</li>
				<li className="panel panel--img-5">
					<p>Helmets</p>
					<p>Snowmobile</p>
					<NavLink to={routes.STREET}>Street bike</NavLink>
				</li>
			</>
		)
	}
}

export default Panel
