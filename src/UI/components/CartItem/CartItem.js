import React from 'react'
import { useShopping } from '../../../context/Shopping/reducer'
const CartItem = () => {
	const { prooducts, addToCart } = useShopping()
	return (
		<div>
			{/* <h4>product: {prooduct.name}</h4>
			<p>price: {prooduct.price}</p>
			<button onClick={() => addToCart(prooduct.id)}>Add</button> */}
		</div>
	)
}

export default CartItem
