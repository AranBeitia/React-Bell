import React, { useContext } from 'react'
import ProductContext from '../../../context/ProductContext'
import withHeader from '../../../hoc/withHeader'

function HelmetPage(props) {
	const category = props.match.params.category
	const { categories } = useContext(ProductContext)

	return (
		<article>
			<h1>Helmet page:</h1>
			{categories.map((item) => {
				if (item.url === category) {
					return (
						<p key={item.id}>
							<span>{item.title} - </span>
							<span>{item.url} - </span>
							<span>{item.id}</span>
						</p>
					)
				}
				return
			})}
		</article>
	)
}

export default withHeader(HelmetPage)
