import { useSelector, useDispatch } from 'react-redux'
import {
	add,
	add5,
	substract,
	substract5,
	reset,
} from '../../../redux/counter/actions'

const Counter = () => {
	const dispatch = useDispatch()
	const { counter } = useSelector((state) => state.counter)
	console.log(counter)
	return (
		<div>
			<button onClick={() => dispatch(add())}>add</button>
			<button onClick={() => dispatch(add5())}>add 5</button>
			<button onClick={() => dispatch(substract())}>substract</button>
			<button onClick={() => dispatch(substract5(5))}>substract 5</button>
			<button onClick={() => dispatch(reset())}>reset</button>
			<p>Result: {counter}</p>
		</div>
	)
}

export default Counter
