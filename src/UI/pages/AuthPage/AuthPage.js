import React from 'react'
import { Redirect } from 'react-router-dom'
import * as routes from '../../../constants/routes'
import withHeader from '../../../hoc/withHeader'
import AuthStyle from './AuthPage.style'
import Login from '../../components/Login'

import { useAuth } from '../../../context/Auth/reducer'

function AuthPage() {
	const { isAuth } = useAuth()

	if (isAuth) {
		return <Redirect to={routes.HOME} />
	}

	return (
		<AuthStyle>
			<Login />
		</AuthStyle>
	)
}
export default withHeader(AuthPage)
