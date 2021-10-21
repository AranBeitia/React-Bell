import React from 'react'
import { Redirect } from 'react-router-dom'
import * as routes from '../../../constants/routes'
import withHeader from '../../../hoc/withHeader'
import LoginStyle from './LoginPage.style'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import { useAuth } from '../../../context/Auth/reducer'
import { useFormik } from 'formik'
import Card from 'react-bootstrap/Card'

function LoginPage() {
	const { login, isAuth } = useAuth()
	const formik = useFormik({
		initialValues: {
			name: '',
			lastName: '',
			email: '',
		},
		validate: (values) => {
			let errors = {}

			if (!values.name) {
				errors.name = 'Required'
			}
			if (!values.lastName) {
				errors.lastName = 'Required'
			}
			if (!values.email) {
				errors.email = 'Required'
			}
			return errors
		},
	})
	const { values, handleChange, handleBlur, touched, errors } = formik
	console.log(values, errors, touched)

	if (isAuth) {
		return <Redirect to={routes.HOME} />
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
						login(values)
					}}
				>
					<InputGroup className="mb-3">
						<FormControl
							placeholder="name"
							aria-label="name"
							name="name"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.name}
						/>
						{touched.name && errors.name ? <div>{errors.name}</div> : null}
					</InputGroup>
					<InputGroup className="mb-3">
						<FormControl
							placeholder="lastname"
							aria-label="lastName"
							name="lastName"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.lastName}
						/>
						{touched.lastName && errors.lastName ? (
							<div>{errors.lastName}</div>
						) : null}
					</InputGroup>
					<InputGroup className="mb-3">
						<FormControl
							placeholder="email"
							aria-label="email"
							name="email"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.email}
						/>
					</InputGroup>
					{touched.email && errors.email ? <div>{errors.email}</div> : null}
					<button type="submit">Submit</button>
				</form>
			</Card>
		</LoginStyle>
	)
}
export default withHeader(LoginPage)
