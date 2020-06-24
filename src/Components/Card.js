import React from 'react';

const Card = ({name, email, id}) =>{
	return (
		<div className = 'tc bg-blue dib br3 pa3 mh2 mv3 grow bw2 shadow-5'>
			<img alt= 'profile' src={`https://robohash.org/${id}?set=set5`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}
export default Card;