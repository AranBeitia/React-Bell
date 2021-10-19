import bullitCarbon from '../UI/assets/img/helmet/bullit-carbon.jpg'
import dirt from '../UI/assets/img/helmet/dirt.jpg'

export const categories = [
	{
		id: 1,
		title: 'Snow Movile',
		url: 'snow-movile',
	},
	{
		id: 2,
		title: 'Side X Side',
		url: 'side-x-side',
	},
	{
		id: 3,
		title: 'Moto III',
		url: 'moto3',
	},
	{
		id: 4,
		title: 'Dirt bike',
		url: 'dirt-bike',
	},
	{
		id: 5,
		title: 'street bike',
		url: 'street-bike',
	},
]

export const products = [
	{
		id: 1,
		title: 'bullit carbon',
		category: 'Moto III',
		img: bullitCarbon,
	},
	{
		id: 2,
		title: 'dirt',
		category: 'Dirt bike',
		img: dirt,
	},
]

export default { categories: categories, products: products }
