import React, {Component} from 'react';
import CardList from '../Components/CardList.js';
import Searchbox from '../Components/Searchbox'
import Scroll from '../Components/Scroll'
import './App.css';


class App extends Component  {
	constructor() {
		super()
		this.state = {
			identity : [],
			searchfield : ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(users=> this.setState({identity: users}));
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value});
	}

	render() {
			const filterIdentity = this.state.identity.filter(identity => {
			return identity.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		return (
			<div className = 'tc'>
				<h1 className='f1'> Autobots </h1>
				<Searchbox searchChange = {this.onSearchChange}/>
				<Scroll>
					<CardList identity={filterIdentity}/>
				</Scroll>
			</div>
		);
	}
}
export default App;


