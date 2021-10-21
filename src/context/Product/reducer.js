import React, { useEffect, useReducer, useContext, createContext } from 'react'
import { readLocalStorage, writeLocalStorage } from '../../utils/localstorage'
import { getProducts } from '../../api'
import { actionTypes } from './types'

const ProductContext = createContext()

export const initialState = {
	categories: [],
	cartItems: [],
	isLoading: false,
	isBuying: false,
	categoryPath: '',
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
		case actionTypes.CART_ITEMS: {
			return {
				...state,
				// cartItems: [...action.payload],
				isBuying: true,
			}
		}
		case actionTypes.REMOVE_ITEM: {
			return {
				...state,
				isBuying: false,
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
		const lastState = readLocalStorage('helmets')

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
		addToCart: (productId) => {
			dispatch({ type: actionTypes.CART_ITEMS })
			const updateCartItem = cartItems.map((item) => item)

			console.log(updateCartItem)

			// const productis = categoris.map(i =>)
			// const newItem = productis.find((i) => i.id === productId)
			// console.log(productis)
		},
		removeCart: () => {
			dispatch({ type: actionTypes.REMOVE_ITEM })
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
