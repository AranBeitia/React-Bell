import React from 'react'

import withHeader from '../../hoc/withHeader'
import TheMenu from '../../components/TheMenu'

function HomePage({ isLoading, categories }) {
	return (
		<TheMenu categories={categories} isLoading={isLoading} />
	)
}

export default withHeader(HomePage)
