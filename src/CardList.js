import React from 'react';
import Card from './Card.js';

const CardList =({identityy}) => {
	return (  
		<div>
			{
				identityy.map((user, i) => {
					return (
						< Card 
						key={i} 
						id={identityy[i].id} 
						name={identityy[i].name} 
						email={identityy[i].email} 
						img={identityy[i].img} />
					);
				})
			}
		</div>
	);
}
export default CardList;