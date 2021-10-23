import styled from 'styled-components'
import imageBg from '../../assets/img/login-bg.jpg'

export const AuthStyle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-image: linear-gradient(
			23deg,
			rgba(230, 12, 12, 1) 0%,
			rgba(255, 255, 255, 0) 100%
		),
		url(${imageBg});
	background-size: cover;
	height: calc(100vh - 70px);
`

export default AuthStyle
