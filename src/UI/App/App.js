import React from 'react'
import { useAuth } from '../../context/Auth/reducer'
import { GlobalStyles } from '../components/Theme/Global.styles'
import { ThemeProvider } from 'styled-components'
import { Switch, Route } from 'react-router-dom'
import * as routes from '../../constants/routes'

import Home from '../pages/HomePage'
import Helmets from '../pages/HelmetPage'
import Auth from '../pages/AuthPage'

import Redux from '../components/redux/Redux'

function App() {
	const { themeMode } = useAuth()

	return (
		<ThemeProvider theme={themeMode}>
			<GlobalStyles />
			<Switch>
				<Route
					path={routes.HOME}
					exact
					render={(routeProps) => <Home {...routeProps} />}
				/>
				<Route
					path={`${routes.HELMETS}/:category`}
					exact
					render={(routeProps) => <Helmets {...routeProps} />}
				/>
			</Switch>
			<Switch>
				<Route
					path={routes.AUTH}
					exact
					render={(routeProps) => <Auth {...routeProps} />}
				/>
			</Switch>
			<Switch>
				<Route
					path="/redux"
					render={(routeProps) => <Redux {...routeProps} />}
				/>
			</Switch>
		</ThemeProvider>
	)
}

export default App
