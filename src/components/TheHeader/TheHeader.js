import React from 'react'
import logo from '../assets/logo.svg'

class TheHeader extends React.Component {
	render() {
		return (
			<article>
				<h1>Header</h1>
				<img src={logo} className="App-logo" alt="logo" />
			</article>
		)
	}
}

export default TheHeader
