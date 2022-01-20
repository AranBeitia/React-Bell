import { combineReducers } from 'redux'
import counterReducer from './counter/reducer'
// import dataReducer from './result/reducer'

const reducers = combineReducers({
	counter: counterReducer,
	// result: dataReducer,
})

export default reducers
