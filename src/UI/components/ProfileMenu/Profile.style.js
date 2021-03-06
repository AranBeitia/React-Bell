import styled from 'styled-components'

const ProfileStyle = styled.nav`
	position: relative;

	.profile {
		&__nav {
			position: absolute;
			top: 35px;
			width: 300px;
			transform: translateX(-100%);
			background-color: ${({ theme }) => theme.bodyBg};
			border: 1px solid #161718;
			border-radius: 4px;
			padding: 1rem;
			overflow: hidden;
		}

		&__item {
			height: 50px;
			display: flex;
			align-items: center;
			border-radius: 4px;
			transition: background 500ms;
			padding: 0.5rem;
			cursor: pointer;

			&:hover {
				background-color: #7a858c;
			}
		}
		&__text {
			margin-left: 0.5rem;
		}
	}
`

export default ProfileStyle
