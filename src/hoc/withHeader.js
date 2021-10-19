import React from 'react'

import TheHeader from '../UI/components/TheHeader'
// import Hero from '../components/Hero'

function withHeader(WrappedComponent) {
	// const getHero = () => {
	// 	if (!Hero) {
	// 		return null
	// 	}
	// 	return <Hero />
	// }

	function WrapperComponent({ ...props }) {
		return (
			<>
				<TheHeader />
				{/* {getHero} */}
				<WrappedComponent {...props} />
			</>
		)
	}
	return WrapperComponent
}

export default withHeader
