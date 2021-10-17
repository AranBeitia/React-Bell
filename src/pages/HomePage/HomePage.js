import React from 'react'

import withHeader from '../../hoc/withHeader'
import TheMenu from '../../components/TheMenu'

function HomePage() {
	return <TheMenu />
}

export default withHeader(HomePage)
