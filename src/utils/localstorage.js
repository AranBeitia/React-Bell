export function readLocalStorage(key) {
	const json = localStorage.getItem(key)
	const data = JSON.parse(json)
	return data
}

export function writeLocalStorage(key, value) {
	localStorage.setItem(key, value)
}
