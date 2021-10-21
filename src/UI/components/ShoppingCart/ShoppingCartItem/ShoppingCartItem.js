import React from 'react'
import { CartItemStyle } from './ShoppingCartItem.style'
import { ButtonSmall } from '../../Button/Button.style'

function ShoppingCartItem({ item }) {
	return (
		<CartItemStyle>
			<img className="cart-item__image" src={item.img} alt={item.title} />
			<div className="cart-item__info">
				<span className="cart-item__title">{item.title}</span>
				<span>price {item.price}€</span>
				<div className="cart-item__cta">
					<ButtonSmall>+</ButtonSmall>
					<ButtonSmall>-</ButtonSmall>
					<ButtonSmall>x</ButtonSmall>
				</div>
			</div>
		</CartItemStyle>
	)
}

export default ShoppingCartItem
