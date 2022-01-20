import reduxImg from '../../assets/img/street/street1.jpg'
import reduxGif from '../../assets/img/logo.svg'
import Counter from './Counter'
const Redux = () => {
	return (
		<div style={{ textAlign: 'center' }}>
			<h1>Redux</h1>
			<hr />
			<h2>Teoría y Conceptos</h2>
			<ul>
				<li>
					<b>
						<i>Store</i>
					</b>
					, contiene el <i>state</i>, (uno por aplicación).
				</li>
				<li>
					<b>
						<i>Dispatch</i>
					</b>
					, ejecuta una acción que actualizará el <i>state</i>.
				</li>
				<li>
					<b>
						<i>Action</i>
					</b>
					, objeto <i>JS</i> con 2 propiedades: <i>type</i> y <i>payload</i>{' '}
					(datos).
				</li>
				<li>
					<b>
						<i>Subscribe</i>
					</b>
					, es un manejador de eventos para el <i>state</i>.
				</li>
				<li>
					<b>
						<i>Reducers</i>
					</b>
					, son funciones que gestionan los <i>actions</i>.
				</li>
			</ul>
			<img src={reduxImg} alt="Diagrama Redux" width="200" />
			<img src={reduxGif} alt="Diagrama Redux Animado" width="100" />
			<Counter />
		</div>
	)
}

export default Redux
