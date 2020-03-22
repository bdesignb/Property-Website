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
					subtitle='Explore featured propertis in San Francisco selected from our real estate agents'/>
					<div className="row">
						{/* {popularProperty} */}
						{this.state.popularProperty.map((property) => {
							return <Property key={property.id} property={property} />;
						})}
					</div>
					<div className="row mt-5 justify-content-md-center">
						<div class="col-sm-6 col-md-4 col-lg-3 mb-4">
						<a href='property' className="btn-line">
                            view more
                        </a>
							
						</div>
					</div>
				</div>
			</section>
		);
	}
}
