import React, { useContext } from 'react'
import ProductContext from '../../../context/ProductContext'
import withHeader from '../../../hoc/withHeader'
import './HelmetPage.scss'

function HelmetPage(props) {
	const category = props.match.params.category
	const { categories, products } = useContext(ProductContext)
	console.log(products)
	return (
		<article>
			{categories.map((item) => {
				if (item.url === category) {
					return (
						<>
							<header className={`helmet__hero bg-img-${item.id}`}>
								<p>{item.title}</p>
							</header>
							<main>gallery</main>
						</>
					)
				}
				return
			})}
		</article>
	)
}

export default withHeader(HelmetPage)
