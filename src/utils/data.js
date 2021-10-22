import bullitt1 from '../UI/assets/img/bullitt/bullitt1.jpg'
import bullitt2 from '../UI/assets/img/bullitt/bullitt2.jpg'
import bullitt3 from '../UI/assets/img/bullitt/bullitt3.jpg'
import bullitt4 from '../UI/assets/img/bullitt/bullitt4.jpg'
import bullitt5 from '../UI/assets/img/bullitt/bullitt5.jpg'
import bullitt6 from '../UI/assets/img/bullitt/bullitt6.jpg'
import bullitt7 from '../UI/assets/img/bullitt/bullitt7.jpg'
import bullitt8 from '../UI/assets/img/bullitt/bullitt8.jpg'
import bullitt9 from '../UI/assets/img/bullitt/bullitt9.jpg'

import moto31 from '../UI/assets/img/moto3/moto3-1.jpg'
import moto32 from '../UI/assets/img/moto3/moto3-2.jpg'
import moto33 from '../UI/assets/img/moto3/moto3-3.jpg'
import moto34 from '../UI/assets/img/moto3/moto3-4.jpg'
import moto35 from '../UI/assets/img/moto3/moto3-5.jpg'

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
		title: 'street',
		url: 'street-bike',
		products: [],
	},
	{
		id: 3,
		title: 'Moto III',
		url: 'moto3',
		products: [
			{
				id: 1,
				title: 'moto 3 - I',
				img: moto31,
				price: 350,
			},
			{
				id: 2,
				title: 'moto 3 - II',
				img: moto32,
				price: 350,
			},
			{
				id: 3,
				title: 'moto 3 - III',
				img: moto33,
				price: 350,
			},
			{
				id: 4,
				title: 'moto 3 - IV',
				img: moto34,
				price: 500,
			},
			{
				id: 5,
				title: 'moto 3 - V',
				img: moto35,
				price: 550,
			},
		],
	},
	{
		id: 4,
		title: 'dirt bike',
		url: 'dirt-bike',
		products: [
			{
				id: 2,
				title: 'dirt',
				img: dirt,
				price: 300,
			},
		],
	},
	{
		id: 5,
		title: 'bullitt',
		url: 'bullitt',
		products: [
			{
				id: 1,
				title: 'bullitt I',
				img: bullitt1,
				price: 300,
			},
			{
				id: 2,
				title: 'bullitt II',
				img: bullitt2,
				price: 400,
			},
			{
				id: 3,
				title: 'bullitt III',
				img: bullitt3,
				price: 450,
			},
			{
				id: 4,
				title: 'bullitt IV',
				img: bullitt4,
				price: 400,
			},
			{
				id: 5,
				title: 'bullitt V',
				img: bullitt5,
				price: 500,
			},
			{
				id: 6,
				title: 'bullitt VI',
				img: bullitt6,
				price: 600,
			},
			{
				id: 7,
				title: 'bullitt VII',
				img: bullitt7,
				price: 700,
			},
			{
				id: 8,
				title: 'bullitt VIII',
				img: bullitt8,
				price: 800,
			},
			{
				id: 9,
				title: 'bullitt XI',
				img: bullitt9,
				price: 900,
			},
		],
	},
]

export default categories
