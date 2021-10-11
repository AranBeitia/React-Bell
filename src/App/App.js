import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import * as routes from '../constants/routes'

import Home from '../pages/HomePage'
import Helmets from '../pages/HelmetPage'

function App() {
	return (
		<Router>
			<Switch>
				<Route path={routes.HOME} exact component={Home} />
				<Route path={routes.HELMETS} exact component={Helmets} />
			</Switch>
		</Router>
	)
}

export default App
