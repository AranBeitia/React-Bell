import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
body {
		background-color: ${({ theme }) => theme.bodyBg};
		color: ${({ theme }) => theme.text};
		transition: background-color 0.5s linear;
	}
`
