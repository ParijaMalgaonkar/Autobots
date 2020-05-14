import React from 'react';
import CardList from './CardList.js';
import Searchbox from './Searchbox'
import {identityy} from './Identities.js';

const App = () => {
	return (
		<div className = 'tc'>
			<h1> Autobots </h1>
			<Searchbox />
			<CardList identityy={identityy}/>
		</div>
	);
}
export default App;