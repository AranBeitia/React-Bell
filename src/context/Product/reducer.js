import React, { useEffect, useReducer, useContext, createContext } from 'react'
import { readLocalStorage, writeLocalStorage } from '../../utils/localstorage'
import { getProducts } from '../../api'
import { actionTypes } from './types'

const ProductContext = createContext()

export const initialState = {
	categories: [],
	cartItems: [],
	isLoading: false,
	isShopping: false,
}

export const reducer = (state, action) => {
	switch (action.type) {
		case actionTypes.FETCH_REQUEST: {
			return {
				...state,
				isLoading: true,
			}
		}
		case actionTypes.FETCH_SUCCESS: {
			return {
				...state,
				isLoading: false,
				categories: [...action.payload],
			}
		}
		case actionTypes.FETCH_ERROR: {
			return {
				...state,
				isLoading: false,
			}
		}
		case actionTypes.CATEGORIES: {
			return {
				...state,
				categories: [...action.payload],
			}
		}
		case actionTypes.ADD_TO_CART: {
			const currentCategory = state.categories.find(
				(item) => item.url === action.payload.category
			)
			const currentProduct = currentCategory.products.find(
				(item) => item.id === action.payload.productId
			)

			const itemInCart = state.cartItems.find(
				(item) => item.id === currentProduct.id
			)

			return itemInCart
				? {
						...state,
						isShopping: true,
						cartItems: state.cartItems.map((item) =>
							item.id === currentProduct.id
								? { ...item, quantity: item.quantity + 1 }
								: item
						),
				  }
				: {
						...state,
						isShopping: true,
						cartItems: [...state.cartItems, { ...currentProduct, quantity: 1 }],
				  }
		}
		case actionTypes.ADD_ONE_FROM_CART: {
			const addItem = state.cartItems.find((item) => item.id === action.payload)

			return {
				...state,
				cartItems: state.cartItems.map((item) =>
					item.id === addItem.id
						? { ...item, quantity: item.quantity + 1 }
						: item
				),
			}
		}
		case actionTypes.REMOVE_ONE_FROM_CART: {
			const deleteItem = state.cartItems.find(
				(item) => item.id === action.payload
			)

			return deleteItem.quantity > 1
				? {
						...state,
						cartItems: state.cartItems.map((item) =>
							item.id === deleteItem.id
								? { ...item, quantity: item.quantity - 1 }
								: item
						),
				  }
				: {
						...state,
						cartItems: state.cartItems.filter(
							(item) => item.id !== deleteItem.id
						),
				  }
		}
		case actionTypes.REMOVE_ALL_FROM_CART: {
			return {
				...state,
				cartItems: state.cartItems.filter((item) => item.id !== action.payload),
			}
		}
		case actionTypes.CLEAR: {
			return {
				...state,
				cartItems: state.cartItems,
				isShopping: false,
			}
		}
		default:
			return state
	}
}

function ProductProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState)
	const { categories, cartItems, isLoading } = state

	useEffect(() => {
		const lastState = readLocalStorage('products')
		window.scrollTo(0, 0)

		if (!lastState) {
			dispatch({ type: actionTypes.FETCH_REQUEST })

			getProducts()
				.then((data) => {
					dispatch({
						type: actionTypes.FETCH_SUCCESS,
						payload: data,
					})
				})
				.catch(() => {
					dispatch({ type: actionTypes.FETCH_ERROR })
				})
			return
		}

		dispatch({ type: actionTypes.CATEGORIES, payload: lastState.categories })
		dispatch({ type: actionTypes.CART_ITEMS, payload: lastState.cartItems })
	}, [dispatch])

	useEffect(() => {
		writeLocalStorage(
			'helmets',
			JSON.stringify({ categories, cartItems, isLoading })
		)
	}, [categories, cartItems, isLoading])

	const value = {
		...state,
		addToCart: (productId, category) => {
			dispatch({
				type: actionTypes.ADD_TO_CART,
				payload: { productId, category },
			})
		},
		add: (productId) => {
			dispatch({ type: actionTypes.ADD_ONE_FROM_CART, payload: productId })
		},
		remove: (productId, all = false) => {
			all
				? dispatch({
						type: actionTypes.REMOVE_ALL_FROM_CART,
						payload: productId,
				  })
				: dispatch({
						type: actionTypes.REMOVE_ONE_FROM_CART,
						payload: productId,
				  })
		},
		clear: () => {
			dispatch({ type: actionTypes.CLEAR })
		},
	}

	return (
		<ProductContext.Provider value={value}>{children}</ProductContext.Provider>
	)
}

function useProduct() {
	const context = useContext(ProductContext)
	if (!context) return null
	return context
}

export { ProductProvider, useProduct }
