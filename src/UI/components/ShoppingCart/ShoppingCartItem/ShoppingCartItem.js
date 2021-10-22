import React from 'react'
import { CartItemStyle } from './ShoppingCartItem.style'
import { ButtonSmall } from '../../Button/Button.style'
import { useProduct } from '../../../../context/Product/reducer'

function ShoppingCartItem({ item }) {
	const { add, remove } = useProduct()
	return (
		<CartItemStyle>
			<img className="cart-item__image" src={item.img} alt={item.title} />
			<div className="cart-item__info">
				<span className="cart-item__title">{item.title}</span>
				<span>
					price {item.price}€ X {item.quantity} = {item.price * item.quantity}
				</span>
				<div className="cart-item__cta">
					<ButtonSmall onClick={() => add()}>+</ButtonSmall>
					<ButtonSmall onClick={() => remove(item.id)}>-</ButtonSmall>
					<ButtonSmall onClick={() => remove(item.id, true)}>x</ButtonSmall>
				</div>
			</div>
		</CartItemStyle>
	)
}

export default ShoppingCartItem
