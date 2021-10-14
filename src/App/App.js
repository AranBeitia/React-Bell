import React, { useState, useEffect } from 'react'
import { getProducts } from '../api'
import { readLocalStorage, writeLocalStorage } from '../utils/localstorage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import * as routes from '../constants/routes'

import Home from '../pages/HomePage'
import Helmets from '../pages/HelmetPage'

function App() {
	const [categories, setCategories] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		const lastState = readLocalStorage('helmets')
		setIsLoading(true)

		if (!lastState) {
			getProducts().then((data) => {
				setCategories(data)
				setIsLoading(false)
			})
			// .catch(() => {
			// 	setIsLoading(false)
			// })
			return
		}

		setCategories(lastState.categories)
	}, [])

	useEffect(() => {
		writeLocalStorage('helmets', JSON.stringify({ categories }))
	}, [categories])

	return (
		<Router>
			<Switch>
				<Route
					path={routes.HOME}
					exact
					render={(routeProps) => (
						<Home
							{...routeProps}
							isLoading={isLoading}
							categories={categories}
						/>
					)}
				/>
				<Route
					path={routes.HELMETS}
					exact
					render={(routeProps) => <Helmets {...routeProps} />}
				/>
			</Switch>
		</Router>
	)
}

export default App
