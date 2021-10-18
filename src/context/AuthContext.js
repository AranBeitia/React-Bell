import { createContext } from 'react'

const AuthContext = createContext({
	user: {},
	isAuthenticated: false,
	login: () => {},
	logout: () => {},
	theme: () => {},
})

export default AuthContext
