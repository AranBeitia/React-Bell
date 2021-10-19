import React, { useContext } from 'react'
import ProductContext from '../../../context/ProductContext'
import withHeader from '../../../hoc/withHeader'
import './HelmetPage.scss'

function HelmetPage(props) {
	const { categories } = useContext(ProductContext)
	const category = props.match.params.category
	const catSelected = categories.find((item) => item.url === category)

	return (
		<article>
			<header className={`helmet__hero bg-img-${catSelected.id}`}>
				<p className="container">{catSelected.title}</p>
			</header>
			<main className="container">
				<h1>gallery</h1>
			</main>
		</article>
	)
}

export default withHeader(HelmetPage)
