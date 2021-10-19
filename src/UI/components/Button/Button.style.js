import styled from 'styled-components'

export const Button = styled.button`
	display: block;
	max-width: 150px;
	width: 100%;
	font-family: 'Amatic SC';
	font-size: 1.7rem;
	font-weight: 700;
	background-color: ${({ theme }) => theme.text};
	color: ${({ theme }) => theme.bodyBg};
	border-radius: 6px;
	border: 0;
	cursor: pointer;

	a {
		color: ${({ theme }) => theme.bodyBg};
		text-decoration: none;
	}
`

export const ButtonIcon = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 30px;
	height: 30px;
	border-radius: 50%;
	border: 0;
	padding: 5px;
	margin: 2px;
	transition: filter 300ms;
	background-color: #e0cac1;
	cursor: pointer;
	transition: filter 300ms;

	&:hover {
		filter: brightness(1.2);
	}
`
