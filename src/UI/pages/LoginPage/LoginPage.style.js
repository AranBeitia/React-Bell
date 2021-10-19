import styled from 'styled-components'
import imageBg from '../../assets/img/login-bg.jpg'

export const LoginStyle = styled.article`
	display: flex;
	justify-content: center;
	align-items: center;
	background-image: linear-gradient(
			23deg,
			rgba(230, 12, 12, 1) 0%,
			rgba(255, 255, 255, 0) 100%
		),
		url(${imageBg});
	height: calc(100vh - 70px);

	.card {
		padding: 5rem;
		background-color: #000000;
	}

	.form {
		/* max-width: 200rem;
		width: 100%; */
	}
`

export default LoginStyle
