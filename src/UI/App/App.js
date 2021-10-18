import React, { useState, useEffect } from 'react'
import { getProducts } from '../../api'
import { readLocalStorage, writeLocalStorage } from '../../utils/localstorage'
import { Switch, Route } from 'react-router-dom'
import * as routes from '../../constants/routes'
import ProductContext from '../../context/ProductContext'
import AuthContext from '../../context/AuthContext'
import { darkTheme, lightTheme } from '../components/Theme/Theme'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../components/Theme/Global.styles'

import Home from '../pages/HomePage'
import Helmets from '../pages/HelmetPage'
import Login from '../pages/LoginPage'

function App() {
	const [categories, setCategories] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [user, setUser] = useState({})
	const [isAuth, setIsAuth] = useState(false)
	const [theme, setTheme] = useState('dark')

	useEffect(() => {
		const lastState = readLocalStorage('helmets')
		if (!lastState) {
			getProducts()
				.then((data) => {
					setCategories(data)
					setIsLoading(true)
				})
				.catch(() => {
					setIsLoading(false)
				})
			return
		}

		setCategories(lastState.categories)
		setUser(lastState.user)
		setIsAuth(lastState.isAuth)
		setIsLoading(lastState.isLoading)
		setTheme(lastState.theme)
	}, [])

	useEffect(() => {
		writeLocalStorage(
			'helmets',
			JSON.stringify({ categories, user, isLoading, isAuth, theme })
		)
	}, [categories, user, isLoading, isAuth, theme])

	const login = (values) => {
		setUser({
			name: values.name,
			lastName: values.lastName,
			email: values.email,
		})
		setIsAuth(true)
	}

	const logout = () => {
		setUser({})
		setIsAuth(false)
	}

	const getTheme = () => {
		theme === 'dark' ? setTheme('light') : setTheme('dark')
	}

	const themeMode = theme === 'light' ? lightTheme : darkTheme

	return (
		<AuthContext.Provider
			value={{
				user: user,
				isAuthenticated: isAuth,
				login: login,
				logout: logout,
				theme: getTheme,
			}}
		>
			<ThemeProvider theme={themeMode}>
				<GlobalStyles />
				<ProductContext.Provider
					value={{
						categories: categories,
						isLoading: isLoading,
					}}
				>
					<Switch>
						<Route
							path={routes.HOME}
							exact
							render={(routeProps) => <Home {...routeProps} />}
						/>
						<Route
							path={routes.HELMETS}
							exact
							render={(routeProps) => <Helmets {...routeProps} />}
						/>
					</Switch>
					<Switch>
						<Route
							path={routes.LOGIN}
							exact
							render={(routeProps) => <Login {...routeProps} />}
						/>
					</Switch>
				</ProductContext.Provider>
			</ThemeProvider>
		</AuthContext.Provider>
	)
}

export default App
