import React, { useEffect, useReducer } from 'react'
import AuthContext from '../../context/AuthContext'
import { ProductProvider } from '../../context/Product/reducer'
import { darkTheme, lightTheme } from '../components/Theme/Theme'
import { GlobalStyles } from '../components/Theme/Global.styles'
import { ThemeProvider } from 'styled-components'
import { getProducts } from '../../api'
import { readLocalStorage, writeLocalStorage } from '../../utils/localstorage'
import { Switch, Route } from 'react-router-dom'
import * as routes from '../../constants/routes'

import Home from '../pages/HomePage'
import Helmets from '../pages/HelmetPage'
import Login from '../pages/LoginPage'

export const initialState = {
	categories: [],
	cartItems: [],
	isAuth: false,
	user: {},
	isLoading: false,
	theme: 'dark',
}

const actionTypes = {
	FETCH_SUCCESS: 'FETCH_SUCCESS',
	FETCH_ERROR: 'FETCH_ERROR',
	CATEGORIES: 'CATEGORIES',
	CART_ITEMS: 'CART_ITEMS',
	USER: 'USER',
	AUTH: 'AUTH',
	THEME: 'THEME',
}

export const reducer = (state, action) => {
	switch (action.type) {
		case actionTypes.FETCH_SUCCESS: {
			return {
				...state,
				isLoading: true,
				categories: [...action.payload],
			}
		}
		case actionTypes.FETCH_ERROR: {
			return {
				...state,
				isLoading: false,
			}
		}
		case actionTypes.CATEGORIES: {
			return {
				...state,
				categories: [...action.payload],
			}
		}
		case actionTypes.CART_ITEMS: {
			return {
				...state,
				cartItems: [...action.payload],
			}
		}
		case actionTypes.USER: {
			return {
				...state,
				user: { ...action.payload },
			}
		}
		case actionTypes.AUTH: {
			return {
				...state,
				isAuth: action.payload,
			}
		}

		case actionTypes.THEME: {
			return {
				...state,
				theme: action.payload,
			}
		}
		default:
			return state
	}
}

function App() {
	const [state, dispatch] = useReducer(reducer, initialState)
	const { categories, cartItems, isLoading, user, isAuth, theme } = state

	useEffect(() => {
		const lastState = readLocalStorage('helmets')
		if (!lastState) {
			getProducts()
				.then((data) => {
					dispatch({ type: actionTypes.FETCH_SUCCESS, payload: data })
				})
				.catch(() => {
					dispatch({ type: actionTypes.FETCH_ERROR })
				})
			return
		}

		dispatch({ type: actionTypes.CATEGORIES, payload: lastState.categories })
		dispatch({ type: actionTypes.CART_ITEMS, payload: lastState.cartItems })
		dispatch({ type: actionTypes.USER, payload: lastState.user })
		dispatch({ type: actionTypes.AUTH, payload: lastState.isAuth })
	}, [])

	useEffect(() => {
		writeLocalStorage(
			'helmets',
			JSON.stringify({ categories, cartItems, user, isLoading, isAuth, theme })
		)
	}, [categories, cartItems, user, isLoading, isAuth, theme])

	const login = (values) => {
		dispatch({
			type: actionTypes.USER,
			payload: {
				name: values.name,
				lastName: values.lastName,
				email: values.email,
			},
		})
		dispatch({ type: actionTypes.AUTH, payload: true })
	}

	const logout = () => {
		dispatch({
			type: actionTypes.USER,
			payload: {},
		})
		dispatch({ type: actionTypes.AUTH, payload: false })
	}

	const getTheme = () => {
		theme === 'dark'
			? dispatch({ type: actionTypes.THEME, payload: 'light' })
			: dispatch({ type: actionTypes.THEME, payload: 'dark' })
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
				<ProductProvider>
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
							path={routes.LOGIN}
							exact
							render={(routeProps) => <Login {...routeProps} />}
						/>
					</Switch>
				</ProductProvider>
			</ThemeProvider>
		</AuthContext.Provider>
	)
}

export default App
