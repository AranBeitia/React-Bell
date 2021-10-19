import styled, { css } from 'styled-components'
import bg1 from '../../../assets/img/bell-bg01.jpg'
import bg2 from '../../../assets/img/bell-bg02.jpg'
import bg3 from '../../../assets/img/bell-bg03.jpg'
import bg4 from '../../../assets/img/bell-bg04.jpg'
import bg5 from '../../../assets/img/bell-bg05.jpg'

function createBg() {
	const collectionBg = [bg1, bg2, bg3, bg4, bg5]
	let background = ''

	collectionBg.forEach((image, index) => {
		background = `.bg-${index + 1} { background-image: url(${image}) }`
	})
	return css`
		${background}
	`
}

export const PanelStyled = styled.li`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex: 1;
	/* background-size: cover; */

	/* ${createBg()} */
`

export default PanelStyled
