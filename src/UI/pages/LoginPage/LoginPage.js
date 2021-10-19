import React, { useContext, useState } from 'react'
import { Redirect } from 'react-router-dom'
import * as routes from '../../../constants/routes'
import withHeader from '../../../hoc/withHeader'
import AuthContext from '../../../context/AuthContext'
import LoginStyle from './LoginPage.style'

function LoginPage() {
	const { login, isAuthenticated } = useContext(AuthContext)
	const [formValues, setFormValues] = useState({
		name: '',
		lastName: '',
		email: '',
	})

	if (isAuthenticated) {
		return <Redirect to={routes.HOME} />
	}
	const handleChange = (e) => {
		setFormValues((prevState) => {
			return {
				...prevState,
				[e.target.name]: e.target.value,
			}
		})
	}

	return (
		<LoginStyle>
			<h1>login page</h1>
			<form
				action=""
				onSubmit={(e) => {
					e.preventDefault()
					login(formValues)
				}}
			>
				<input type="text" name="name" onChange={handleChange} />
				<input type="text" name="lastName" onChange={handleChange} />
				<input type="text" name="email" onChange={handleChange} />
				<button type="submit">Submit</button>
			</form>
		</LoginStyle>
	)
}
export default withHeader(LoginPage)
