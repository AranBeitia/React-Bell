import categories from '../utils/data'

export function getProducts(fail = false) {
	return new Promise((result, rejection) => {
		setTimeout(() => {
			console.log('inside fetch')
			result(categories)
		}, 1000)
	})
}
