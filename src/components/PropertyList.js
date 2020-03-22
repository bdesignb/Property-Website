import React from 'react';
import Property from './Property';


export default function PropertyList({ property }) {
	return (
		<section className="property">
			<div className="container">
				<div className='row'>
					{property.map((item) => {
						return <Property key={item.id} property={item} />;
					})}
				</div>
			</div>
		</section>

	);
}
