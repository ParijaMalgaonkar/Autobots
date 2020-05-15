import React from 'react';

const Searchbox =({searchfield, searchChange}) => {
	return (
		<div className = 'pa2'>
			<input 
				className ='pa3 bw2 b--blue bg-lightest-blue'
				type='search' 
				placeholder='Search'
				onChange = {searchChange}
			/>
		</div>
	);
}

export default Searchbox;