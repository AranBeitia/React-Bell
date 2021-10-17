import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import withHeader from '../../hoc/withHeader'
import AuthContext from '../../context/AuthContext'

function ProfilePage() {
	const { logout, isAuthenticated } = useContext(AuthContext)

	const handleLogout = () => {
		logout()
	}

	if (!isAuthenticated) {
		return <Redirect to="/" />
	}

	return (
		<section>
			<h1>profile page</h1>
			<button onClick={handleLogout}>Logout</button>
		</section>
	)
}

export default withHeader(ProfilePage)
