import React from 'react'
import TheHeader from '../../components/TheHeader'
import TheMenu from '../../components/TheMenu'

function HomePage({ isLoading, categories }) {
	return (
		<article>
			<TheHeader />
			<TheMenu categories={categories} isLoading={isLoading} />
		</article>
	)
}

export default HomePage
