import React from 'react';
import Card from './Card.js';

const CardList =({identity}) => {
	return (  
		<div>
			{
				identity.map((user, i) => {
					return (
						< Card 
						key={i} 
						id={identity[i].id} 
						name={identity[i].name} 
						email={identity[i].email} 
						img={identity[i].img} />
					);
				})
			}
		</div>
	);
}
export default CardList;