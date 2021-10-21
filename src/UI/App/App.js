import React from 'react'
import { useAuth } from '../../context/Auth/reducer'
import { ProductProvider } from '../../context/Product/reducer'
import { ShoppingProvider } from '../../context/Shopping/reducer'
import { GlobalStyles } from '../components/Theme/Global.styles'
import { ThemeProvider } from 'styled-components'
import { Switch, Route } from 'react-router-dom'
import * as routes from '../../constants/routes'

import Home from '../pages/HomePage'
import Helmets from '../pages/HelmetPage'
import Login from '../pages/LoginPage'

function App() {
	const { themeMode } = useAuth()

	return (
		<ThemeProvider theme={themeMode}>
			<GlobalStyles />
			<ProductProvider>
				<Switch>
					<Route
						path={routes.HOME}
						exact
						render={(routeProps) => <Home {...routeProps} />}
					/>
					<ShoppingProvider>
						<Route
							path={`${routes.HELMETS}/:category`}
							exact
							render={(routeProps) => <Helmets {...routeProps} />}
						/>
					</ShoppingProvider>
				</Switch>
				<Switch>
					<Route
						path={routes.LOGIN}
						exact
						render={(routeProps) => <Login {...routeProps} />}
					/>
				</Switch>
			</ProductProvider>
		</ThemeProvider>
	)
}

export default App
