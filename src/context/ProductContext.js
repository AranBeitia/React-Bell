import { createContext } from 'react'

const ProductContext = createContext({
	categories: [],
	cartItems: [],
	isLoading: false,
})

export default ProductContext
