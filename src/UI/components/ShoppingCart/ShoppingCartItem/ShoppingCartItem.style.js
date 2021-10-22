import styled from 'styled-components'

export const CartItemStyle = styled.li`
	display: flex;
	align-items: center;
	margin: 0.5rem;

	.cart-item {
		&__image {
			max-width: 100px;
			width: 100%;
			border-radius: 3px;
		}

		&__info {
			display: flex;
			flex-direction: column;
			justify-content: center;
			padding: 1rem;
		}

		&__title {
			font-size: 1.5rem;
		}

		&__cta {
			display: flex;
		}
	}
`
