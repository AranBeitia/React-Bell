import styled from 'styled-components'

export const Button = styled.button`
	display: block;
	max-width: 150px;
	width: 100%;
	padding: 0.5rem;
	font-size: 1rem;
	font-weight: 700;
	background-color: ${({ theme }) => theme.text};
	color: ${({ theme }) => theme.bodyBg};
	border-radius: 6px;
	border: 0;
	transition: all 300ms;
	cursor: pointer;

	&:hover {
		background-color: transparent;
		color: ${({ theme }) => theme.text};
		border: 2px solid ${({ theme }) => theme.text};
	}

	a {
		color: ${({ theme }) => theme.bodyBg};
		text-decoration: none;

		&:hover {
			color: ${({ theme }) => theme.text};
		}
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
	transition: filter 300ms;
	background-color: #e0cac1;
	cursor: pointer;

	&:hover {
		filter: brightness(1.2);
	}
`

export const ButtonSmall = styled(Button)`
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 20px;
	max-height: 20px;
	margin: 0.2rem;
`
