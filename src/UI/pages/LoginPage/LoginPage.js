import React, { useContext, useState } from 'react'
import { Redirect } from 'react-router-dom'
import * as routes from '../../../constants/routes'
import withHeader from '../../../hoc/withHeader'
import AuthContext from '../../../context/AuthContext'
import LoginStyle from './LoginPage.style'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

import Card from 'react-bootstrap/Card'
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
			<Card>
				<h1>login page</h1>
				<form
					action=""
					className="form"
					onSubmit={(e) => {
						e.preventDefault()
						login(formValues)
					}}
				>
					<InputGroup className="mb-3">
						<FormControl
							placeholder="name"
							aria-label="name"
							name="name"
							onChange={handleChange}
						/>
					</InputGroup>
					<InputGroup className="mb-3">
						<FormControl
							placeholder="last name"
							aria-label="lastName"
							name="lastName"
							onChange={handleChange}
						/>
					</InputGroup>
					<InputGroup className="mb-3">
						<FormControl
							placeholder="email"
							aria-label="email"
							name="email"
							onChange={handleChange}
						/>
					</InputGroup>
					<button type="submit">Submit</button>
				</form>
			</Card>
		</LoginStyle>
	)
}
export default withHeader(LoginPage)
