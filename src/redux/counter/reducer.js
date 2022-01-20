import initialState from './state'
import { DECREMENT, INCREMENT, INCREMENT_5, DECREMENT_5, RESET } from './types'
const counterReducer = (state = initialState, action) => {
	switch (action.type) {
		case INCREMENT:
			return {
				counter: state.counter + 1,
			}
		case DECREMENT:
			return {
				counter: state.counter - 1,
			}
		case INCREMENT_5:
			return {
				counter: state.counter + 5,
			}
		case DECREMENT_5:
			return {
				counter: state.counter - action.payload,
			}
		case RESET:
			return {
				counter: 0,
			}
		default: {
			return state
		}
	}
}

export default counterReducer
