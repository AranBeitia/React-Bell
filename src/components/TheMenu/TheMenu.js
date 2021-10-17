import React, { useContext } from 'react'
import ProductContext from '../../context/ProductContext'
import './TheMenu.scss'

import Panel from './Panel'

function TheMenu() {
	const { isLoading, categories } = useContext(ProductContext)
	return (
		<nav>
			{isLoading && <p>Loading...</p>}
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
	)
}
export default TheMenu
