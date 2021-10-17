import React, { useState, useEffect } from 'react'
import { getProducts } from '../api'
import { readLocalStorage, writeLocalStorage } from '../utils/localstorage'
import { Switch, Route } from 'react-router-dom'
import * as routes from '../constants/routes'
import ProductContext from '../context/ProductContext'
import AuthContext from '../context/AuthContext'

import Home from '../pages/HomePage'
import Helmets from '../pages/HelmetPage'
import Login from '../pages/LoginPage'

function App() {
	const [categories, setCategories] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [user, setUser] = useState({})
	const [isAuth, setIsAuth] = useState(false)

	useEffect(() => {
		const lastState = readLocalStorage('helmets')
		setIsLoading(true)

		if (!lastState) {
			getProducts()
				.then((data) => {
					setCategories(data)
					setIsLoading(false)
				})
				.catch(() => {
					setIsLoading(false)
				})
			return
		}

		setCategories(lastState.categories)
	}, [])

	useEffect(() => {
		writeLocalStorage('helmets', JSON.stringify({ categories }))
	}, [categories])

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

	return (
		<AuthContext.Provider
			value={{
				user: user,
				isAuthenticated: isAuth,
				login: login,
				logout: logout,
			}}
		>
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
		</AuthContext.Provider>
	)
}

export default App
