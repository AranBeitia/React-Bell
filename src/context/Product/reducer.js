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
			return {
				...state,
				isShopping: true,
				cartItems: [...state.cartItems, currentProduct],
			}
		}
		case actionTypes.CLEAR: {
			return {
				...state,
				cartItems: [],
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

		if (!lastState && categories.length === 0) {
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
	}, [])

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
		removeCart: () => {
			dispatch({ type: actionTypes.REMOVE_ITEM })
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
