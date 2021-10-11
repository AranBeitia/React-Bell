import React from 'react'
import { NavLink } from 'react-router-dom'
import * as routes from '../../../constants/routes'
import PanelStyled from './Panel.style'

class Panel extends React.Component {
	render() {
		return (
			<PanelStyled className="bg-1">
				<p>Helmets</p>
				<p>Snowmobile</p>
				<NavLink to={routes.SNOW}>Snow</NavLink>
			</PanelStyled>
		)
	}
}

export default Panel
