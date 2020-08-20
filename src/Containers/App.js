import React, {Component} from 'react';
import {connect} from 'react-redux';
import CardList from '../Components/CardList.js';
import Searchbox from '../Components/Searchbox'
import Scroll from '../Components/Scroll'; 
import ErrorBoundary from '../Components/ErrorBoundary';
import './App.css';
import {setSearchField, requestAutobots} from '../actions.js';

const mapStateToProps = state => {
	return {
		searchField: state.searchAutobots.searchField,
		identity: state.requestAutobots.identity,
		isPending: state.requestAutobots.isPending,
		error: state.requestAutobots.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestAutobots: () => dispatch(requestAutobots())
	}
}

class App extends Component  {

	componentDidMount() {
		this.props.onRequestAutobots()
	}

	render() {
			const {searchField, onSearchChange, identity, isPending} = this.props;
			const filterIdentity = identity.filter(identity => {
			return identity.name.toLowerCase().includes(searchField.toLowerCase());
		})
		return (
			<div className = 'tc'>
				<h1 className='f1'> Autobots </h1>
				<Searchbox searchChange = {onSearchChange}/>
				<Scroll>
					<ErrorBoundary>
						 <CardList identity={filterIdentity}/>
					</ErrorBoundary>
					
				</Scroll>
			</div>
		);
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(App);


