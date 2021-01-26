import React from 'react';
import { Header } from "./container/index";
import { Home, Cart } from "./pages";
import { Route } from 'react-router-dom';
import axios from "axios";
// import store from './store/store';
import { setPizzas as setPizzasAction } from './store/actions/pizzasAction';
import { connect } from 'react-redux';

// function App() {

// 	// const [pizzas, setPizzas] = React.useState([]);

// 	React.useEffect(() => {
// 		axios.get('http://localhost:3000/db.json')
// 			.then(({ data }) => {
// 				setPizzas(data.pizzas)
// 			})
// 	}, [])

// 	return
// }

class App extends React.Component {
	componentDidMount() {
		axios.get('http://localhost:3000/db.json')
			.then(({ data }) => {
				this.props.setPizzas(data.pizzas)
			})
	}

	render() {
		console.log(this.props)
		return (
			<div className='wrapper'>
				<Header />
				<Route path="/" render={() => <Home items={this.props.items} />} exact />
				<Route path="/cart" component={Cart} exact />

			</div>
		);
	}
}

const mapStateToProps = (state) => {
	// console.log(state)
	return {
		items: state.pizzas.items,
		filters: state.filter

	}
}

const mapDispachToProps = dispatch => {
	return {
		setPizzas: (items) => dispatch(setPizzasAction(items))
	}
}

export default connect(mapStateToProps, mapDispachToProps)(App);
