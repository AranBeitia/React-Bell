import React, { useEffect, useReducer, createContext, useContext } from 'react'
import { actionTypes } from './types'
import { readLocalStorage, writeLocalStorage } from '../../utils/localstorage'
import { darkTheme, lightTheme } from '../../UI/components/Theme/Theme'

const AuthContext = createContext()

export const initialState = {
	isAuth: false,
	user: {
		name: '',
		lastname: '',
		email: '',
	},
	theme: 'dark',
}

const reducer = (state, action) => {
	switch (action.type) {
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
		case actionTypes.LOGIN: {
			return {
				...state,
				isAuth: true,
			}
		}
		case actionTypes.LOGOUT: {
			return {
				...state,
				user: {},
				isAuth: false,
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

function AuthProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState)
	const { user, isAuth, theme } = state

	useEffect(() => {
		const lastState = readLocalStorage('user')
		if (lastState) {
			dispatch({ type: actionTypes.USER, payload: lastState.user })
			dispatch({ type: actionTypes.AUTH, payload: lastState.isAuth })
		}
	}, [])

	useEffect(() => {
		writeLocalStorage('user', JSON.stringify({ user, isAuth, theme }))
	}, [user, isAuth, theme])

	const value = {
		...state,
		login: (values) => {
			dispatch({
				type: actionTypes.USER,
				payload: {
					name: values.name,
					lastName: values.lastName,
					email: values.email,
				},
			})
			dispatch({ type: actionTypes.AUTH, payload: true })
		},
		logout: () => {
			dispatch({ type: actionTypes.LOGOUT })
		},
		getTheme: () => {
			theme === 'dark'
				? dispatch({ type: actionTypes.THEME, payload: 'light' })
				: dispatch({ type: actionTypes.THEME, payload: 'dark' })
		},
		themeMode: theme === 'light' ? lightTheme : darkTheme,
	}
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

function useAuth() {
	const context = useContext(AuthContext)
	if (!context) return null
	return context
}

export { AuthProvider, useAuth }
