import React from 'react'
import { useProduct } from '../../../context/Product/reducer'
import { ShoppingCartStyled } from './ShoppingCart.style'
import ShoppingCartItem from '../ShoppingCart/ShoppingCartItem'
import { Button } from '../Button/Button.style'

function ShoppingCart() {
	const { cartItems, clear } = useProduct()
	return (
		<ShoppingCartStyled>
			<p>Shopping cart</p>
			<ul>
				{cartItems.map((item, index) => (
					<ShoppingCartItem key={index} item={item} />
				))}
				{cartItems.length > 0 && (
					<div className="wrapper-btn">
						<Button onClick={() => {}}>purchase</Button>
						<Button onClick={clear}>clear</Button>
					</div>
				)}
			</ul>
		</ShoppingCartStyled>
	)
}

export default ShoppingCart
