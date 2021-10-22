import styled from 'styled-components'

export const ShoppingCartStyled = styled.aside`
	position: absolute;
	top: 70px;
	right: 0;
	max-width: 300px;
	width: 100%;
	background-color: ${({ theme }) => theme.bodyBg};
	border: 1px solid #161718;
	border-radius: 4px;
	padding: 1rem;
	overflow: hidden;

	.wrapper-btn {
		display: flex;

		& > * {
			margin: 0 1rem;
		}
	}
`
