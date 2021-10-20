import React from 'react'
import { useProduct } from '../../../context/Product/reducer'
import withHeader from '../../../hoc/withHeader'
import './HelmetPage.scss'
import Card from 'react-bootstrap/Card'
import { Button } from '../../components/Button/Button.style'

function HelmetPage(props) {
	const { categories, cartItems, handleAddToCart } = useProduct()
	const category = props.match.params.category
	const catSelected = categories.find((item) => item.url === category)

	// const handleAddToCart = (productId) => {
	// 	console.log(productId)
	// }
	// const handleAddToCart = (productId) => {
	// 	const foundProduct = catSelected.products.find(
	// 		(product) => product.id === productId
	// 	)

	// 	// setCartItems(foundProduct)
	// }

	return (
		<article>
			<header className={`helmet__hero bg-img-${catSelected.id}`}>
				<p className="container">{catSelected.title}</p>
			</header>
			<main className="container">
				<h1>gallery</h1>
				{catSelected.products.map((i) => (
					<Card key={i.id} bg="dark">
						<p>{i.title}</p>
						<img src={i.img} alt={i.title} />
						<Button onClick={() => handleAddToCart(i.id)}>Add to cart</Button>
					</Card>
				))}
			</main>
			<aside>
				<div className="shopping-cart">
					<ul>
						{/* {cartItems.map((item) => (
							<li key={item.id}>
								<p>{item.title}</p>
								<img src={item.img} alt={item.title} />
							</li>
						))} */}
					</ul>
				</div>
			</aside>
		</article>
	)
}

export default withHeader(HelmetPage)
