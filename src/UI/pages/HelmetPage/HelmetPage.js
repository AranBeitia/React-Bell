import React from 'react'
import { useParams } from 'react-router-dom'
import { useProduct } from '../../../context/Product/reducer'

import withHeader from '../../../hoc/withHeader'
import './HelmetPage.scss'
import Card from 'react-bootstrap/Card'

import ShoppingCart from '../../components/ShoppingCart'
import { Button } from '../../components/Button/Button.style'

function HelmetPage() {
	const { categories, addToCart, isShopping } = useProduct()
	const { category } = useParams()
	let categorySelected = {}

	if (categories.length > 0) {
		categorySelected = categories.find((item) => item.url === category)
	}

	return (
		<article>
			<header className={`helmet__hero bg-img-${categorySelected.id}`}>
				<h1 className="container helmet__title">{categorySelected.title}</h1>
			</header>

			<main className="container gallery">
				{categorySelected.products &&
					categorySelected.products.map((item) => (
						<Card key={item.id} bg="dark">
							<Card.Img variant="top" src={item.img} alt={item.title} />
							<Card.Body>
								<Card.Title>{item.title}</Card.Title>
								<Button onClick={() => addToCart(item.id, category)}>
									Add to cart
								</Button>
							</Card.Body>
						</Card>
					))}
			</main>
			{isShopping && <ShoppingCart />}
		</article>
	)
}

export default withHeader(HelmetPage)
