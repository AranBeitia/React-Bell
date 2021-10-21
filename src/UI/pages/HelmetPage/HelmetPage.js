import React from 'react'
import { useParams } from 'react-router-dom'
import { useProduct } from '../../../context/Product/reducer'
import { useShopping } from '../../../context/Shopping/reducer'
import withHeader from '../../../hoc/withHeader'
import './HelmetPage.scss'
import Card from 'react-bootstrap/Card'
import { Button } from '../../components/Button/Button.style'
// import CartItem from '../../components/CartItem'

function HelmetPage() {
	const { categories, cartItems, isBuying, addToCart } = useProduct()

	const { category } = useParams()
	const catSelected = categories.find((item) => item.url === category)

	// const { prooducts, cart, addTooCart } = useShopping()

	// const deleteFromCart = () => {}

	const clearCart = () => {}
	return (
		<article>
			<header className={`helmet__hero bg-img-${catSelected.id}`}>
				<p className="container">{catSelected.title}</p>
			</header>

			<main className="container gallery">
				{catSelected.products.map((item) => (
					<Card key={item.id} bg="dark" style={{ width: '18rem' }}>
						<p>{item.title}</p>
						<img src={item.img} alt={item.title} />
						<Button onClick={() => addToCart(item.id, category)}>
							Add to cart
						</Button>
					</Card>
				))}
			</main>

			<aside>
				<div className="shopping-cart">
					<p>Carrito</p>
					<ul>
						{cartItems.map((item, index) => (
							<div key={index}>
								<p>{item.name}</p>
								<p>{item.price}</p>
							</div>
						))}
						<button onClick={clearCart}>clear</button>
						{isBuying && (
							<>
								<p>buying...</p>
							</>
						)}
					</ul>
				</div>
			</aside>
		</article>
	)
}

export default withHeader(HelmetPage)
