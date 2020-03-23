import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Property from './Property';
import Title from './Title';
import propertyData from '../propertyData';

export default class PropertyHome extends Component {
	state = {
		property: [],
		popularProperty: []
	};
	componentDidMount() {
		let property = propertyData;
		let popularProperty = property.filter((propertyItem) => propertyItem.category === 'featured properties');
		this.setState({
			property: property,
			popularProperty: popularProperty
		});
	}
	render() {
		return (
			<section className="property">
				<div className="container">
					<Title
						title="featured property"
						subtitle='Explore featured propertis in San Francisco selected from our real estate agents' />
					<div className="row">
						{/* {popularProperty} */}
						{this.state.popularProperty.map((property) => {
							return <Property key={property.id} property={property} />;
						})}
					</div>
					<div className="row">
						<div className="col-12 d-flex flex-row justify-content-center">
							<a href={process.env.PUBLIC_URL + '/Property'} className="btn-line">
								view more
                        </a>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
