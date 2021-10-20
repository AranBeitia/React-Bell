import bullitCarbon from '../UI/assets/img/helmet/bullit-carbon.jpg'
import dirt from '../UI/assets/img/helmet/dirt.jpg'

const categories = [
	{
		id: 1,
		title: 'Snow Movile',
		url: 'snow-movile',
		products: [],
	},
	{
		id: 2,
		title: 'Side X Side',
		url: 'side-x-side',
		products: [],
	},
	{
		id: 3,
		title: 'Moto III',
		url: 'moto3',
		products: [
			{
				id: 1,
				title: 'bullit carbon',
				img: bullitCarbon,
			},
			{
				id: 2,
				title: 'dirt',
				img: dirt,
			},
		],
	},
	{
		id: 4,
		title: 'Dirt bike',
		url: 'dirt-bike',
		products: [
			{
				id: 2,
				title: 'dirt',
				img: dirt,
			},
		],
	},
	{
		id: 5,
		title: 'street bike',
		url: 'street-bike',
		products: [],
	},
]

export default categories
