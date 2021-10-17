import { createContext } from 'react'

const ProductContext = createContext({
	categories: [],
	isLoading: false,
})

export default ProductContext
