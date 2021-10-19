import React, { useContext } from 'react'
import ProductContext from '../../../context/ProductContext'
import withHeader from '../../../hoc/withHeader'
import './HelmetPage.scss'

function HelmetPage(props) {
	const category = props.match.params.category
	const { categories } = useContext(ProductContext)
	return (
		<article>
			{categories.map((item) => {
				if (item.url === category) {
					return (
						<div key={item.id}>
							<header className={`helmet__hero bg-img-${item.id}`}>
								<p>{item.title}</p>
							</header>
							<main>
								<h1>gallery</h1>
							</main>
						</div>
					)
				}
				return
			})}
		</article>
	)
}

export default withHeader(HelmetPage)
