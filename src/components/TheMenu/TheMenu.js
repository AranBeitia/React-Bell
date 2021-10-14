import React from 'react'

import './TheMenu.scss'

import Panel from './Panel'

function TheMenu({ isLoading, categories }) {
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
