import { DECREMENT, DECREMENT_5, INCREMENT, INCREMENT_5, RESET } from './types'

export const add = () => {
	return {
		type: INCREMENT,
	}
}

export const substract = () => {
	return {
		type: DECREMENT,
	}
}
export const add5 = (value) => {
	return {
		type: INCREMENT_5,
		payload: value,
	}
}

export const substract5 = (value) => {
	return {
		type: DECREMENT_5,
		payload: value,
	}
}

export const reset = () => {
	return {
		type: RESET,
	}
}
