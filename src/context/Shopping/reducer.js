import React, { createContext, useContext, useReducer } from 'react'
import { actionTypes } from './types'

const ShoppingContext = createContext()

export const initialState = {
	prooducts: [
		{ id: 1, name: 'product 1', price: 100 },
		{ id: 2, name: 'product 2', price: 200 },
		{ id: 3, name: 'product 3', price: 300 },
		{ id: 4, name: 'product 4', price: 400 },
		{ id: 5, name: 'product 5', price: 500 },
		{ id: 6, name: 'product 6', price: 600 },
	],
	cart: [],
}

export const reducer = (state, action) => {
	switch (action.type) {
		case actionTypes.ADD_TO_CART: {
			let newItem = state.prooducts.find(
				(product) => product.id === action.payload
			)
			return {
				...state,
				cart: [...state.cart, newItem],
			}
		}
		case actionTypes.REMOVE_ONE_FROM_CART: {
			return {
				...state,
			}
		}
		case actionTypes.REMOVE_ALL_FROM_CART: {
			return {
				...state,
			}
		}
		case actionTypes.CLEAR_CART: {
			return {
				...state,
			}
		}
		default:
			return state
	}
}

function ShoppingProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState)
	const { prooducts, cart } = state

	const value = {
		...state,
		addTooCart: (cartId) => {
			dispatch({ type: actionTypes.ADD_TO_CART, payload: cartId })
		},
	}
	return (
		<ShoppingContext.Provider value={value}>
			{children}
		</ShoppingContext.Provider>
	)
}

function useShopping() {
	const context = useContext(ShoppingContext)
	if (!context) return null
	return context
}

export { ShoppingProvider, useShopping }
