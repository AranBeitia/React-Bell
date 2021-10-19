import styled from 'styled-components'

const ButtonIcon = styled.button`
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

export default ButtonIcon
