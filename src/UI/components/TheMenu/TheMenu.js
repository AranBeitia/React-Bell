import React from 'react'
import { useProduct } from '../../../context/Product/reducer'
import Spinner from 'react-bootstrap/Spinner'

import './TheMenu.scss'

import Panel from './Panel'

function TheMenu() {
	const { categories, isLoading } = useProduct()
	return (
		<>
			{isLoading ? (
				<div className="spinner">
					<Spinner animation="grow" />
				</div>
			) : (
				<nav>
					<ul className="panels">
						{categories.map((item) => (
							<Panel
								key={item.id}
								title={item.title}
								id={item.id}
								path={item.url}
							/>
						))}
					</ul>
				</nav>
			)}
		</>
	)
}
export default TheMenu
