import React, {Component} from 'react';
import CardList from './CardList.js';
import Searchbox from './Searchbox'
import {identityy} from './Identities.js';


class App extends Component  {
	constructor() {
		super()
		this.state = {
			identityy : identityy,
			searchfield : ''
		}
	}
	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value});
	}
	render() {
			const filtered = this.state.identityy.filter(identityy => {
			return identityy.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		return (
			<div className = 'tc'>
				<h1> Autobots </h1>
				<Searchbox searchChange = {this.onSearchChange}/>
				<CardList identityy={filtered}/>
			</div>
		);
	}
}
export default App;