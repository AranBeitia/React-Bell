import React from 'react'
import { useProduct } from '../../../context/Product/reducer'
import './TheMenu.scss'

import Panel from './Panel'

function TheMenu() {
	const { categories } = useProduct()
	return (
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
	)
}
export default TheMenu
