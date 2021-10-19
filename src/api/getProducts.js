import data from '../utils/data'

export function getProducts(fail = false) {
	return new Promise((result, rejection) => {
		setTimeout(() => {
			result(data)
		}, 1000)
	})
}
