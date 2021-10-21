import React from 'react'
import { useParams } from 'react-router-dom'
import { useProduct } from '../../../context/Product/reducer'
import withHeader from '../../../hoc/withHeader'
import './HelmetPage.scss'
import Card from 'react-bootstrap/Card'
import { Button } from '../../components/Button/Button.style'

function HelmetPage(props) {
	const { categories, isBuying, addToCart, removeCart } = useProduct()

	const { category } = useParams()
	const catSelected = categories.find((item) => item.url === category)

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
						<Button onClick={() => addToCart(item.id)}>Add to cart</Button>
					</Card>
				))}
			</main>

			<aside>
				<div className="shopping-cart">
					<p>buy</p>
					<ul>
						{isBuying && (
							<>
								<p>buying...</p>
								<button onClick={removeCart}>remove</button>
							</>
						)}
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
