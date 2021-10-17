import React, { useContext, useState } from 'react'
import { Redirect } from 'react-router-dom'
import withHeader from '../../hoc/withHeader'
import AuthContext from '../../context/AuthContext'

function LoginPage() {
	const { login, isAuthenticated } = useContext(AuthContext)
	const [formValues, setFormValues] = useState({
		name: '',
		lastName: '',
		email: '',
	})

	if (isAuthenticated) {
		return <Redirect to="/" />
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
		<section>
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
		</section>
	)
}
export default withHeader(LoginPage)
