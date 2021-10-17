import { createContext } from 'react'

const AuthContext = createContext({
	user: {},
	isAuthenticated: false,
	login: () => {},
	logout: () => {},
})

export default AuthContext
