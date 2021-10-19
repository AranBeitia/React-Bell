import { createContext } from 'react'

const ProductContext = createContext({
	categories: [],
	products: [],
	isLoading: false,
})

export default ProductContext
