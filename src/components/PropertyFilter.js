import React from 'react';
import { Link } from 'react-router-dom';

const getUnique = (items, value) => {
	return [...new Set(items.map((item) => item[value]))];
};

export default function PropertyFilter({ property, handleChange }) {
	let category = getUnique(property, 'category');
	category = ['category all', ...category];
	category = category.map((item, index) => {
		return (
			<option value={item} key={index}>
				{item}
			</option>
		);
	});

	let tag = getUnique(property, 'tag');
	tag = ['type all', ...tag];
	tag = tag.map((item, index) => {
		return (
			<option value={item} key={index}>
				{item}
			</option>
		);
	});

	return (
		<div className="py-5">
			<div className="container ">
				<form className="row justify-content-center">			
					<div className="col-sm-6 col-md-4 col-lg-2 mb-3 d-flex flex-row justify-content-center">
						<select
							name="category"
							id="category"
							value={property.category}
							onChange={handleChange}
							className="property-form-control">
							{category}
						</select>
					</div>
					<div className="col-sm-6 col-md-4 col-lg-2 mb-3 d-flex flex-row justify-content-center">
						<select
							name="tag"
							id="tag"
							value={property.tag}
							onChange={handleChange}
							className="property-form-control">
							{tag}
						</select>
					</div>				
				</form>
			</div>
		</div>
	);
}
