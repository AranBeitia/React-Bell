import React from "react";
import { CartItemStyle } from "./ShoppingCartItem.style";
import { ButtonSmall } from "../../Button/Button.style";
import { useProduct } from "../../../../context/Product/reducer";

function ShoppingCartItem({ item }) {
  const { price, quantity, img, title, id } = item;
  const { add, remove } = useProduct();

  return (
    <CartItemStyle>
      <img className="cart-item__image" src={img} alt={title} />
      <div className="cart-item__info">
        <span className="cart-item__title">{title}</span>
        <span>
          price {price}€ X {quantity} = {price * quantity}
        </span>
        <div className="cart-item__cta">
          <ButtonSmall onClick={() => add(id)}>+</ButtonSmall>
          <ButtonSmall onClick={() => remove(id)}>-</ButtonSmall>
          <ButtonSmall onClick={() => remove(id, true)}>x</ButtonSmall>
        </div>
      </div>
    </CartItemStyle>
  );
}

export default ShoppingCartItem;
