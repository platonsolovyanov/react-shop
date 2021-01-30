import React from 'react';
import axios from "axios";
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';


import { setPizzas as setPizzasAction } from './store/actions/pizzasAction';

import { Header } from "./container/index";
import { Home, Cart } from "./pages";



function App() {
	const dispatch = useDispatch();


	React.useEffect(() => {
		axios.get('http://localhost:3000/db.json')
			.then(({ data }) => {
				dispatch(setPizzasAction(data.pizzas))
			})
	}, [])

	return (
		<div className='wrapper'>
			<Header />
			<Route path="/" component={Home} exact />
			<Route path="/cart" component={Cart} exact />

		</div>
	)
}

// class App extends React.Component {
// 	componentDidMount() {
// 		axios.get('http://localhost:3000/db.json')
// 			.then(({ data }) => {
// 				this.props.setPizzas(data.pizzas)
// 			})
// 	}

// 	render() {
// 		console.log(this.props)
// 		return (
// 			<div className='wrapper'>
// 				<Header />
// 				<Route path="/" render={() => <Home items={this.props.items} />} exact />
// 				<Route path="/cart" component={Cart} exact />

// 			</div>
// 		);
// 	}
// }

// const mapStateToProps = (state) => {
// 	return {
// 		items: state.pizzas.items,
// 		filters: state.filter

// 	}
// }

// const mapDispachToProps = dispatch => {
// 	return {
// 		setPizzas: (items) => dispatch(setPizzasAction(items))
// 	}
// }

// export default connect(mapStateToProps, mapDispachToProps)(App);

export default App
