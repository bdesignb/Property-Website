import React from 'react';

export default function Banner({ children, title, titlespan, subtitle }) {
	return (
	<>
			<div className="col-md-12 text-center">
				<h2>
					{title} <span>{titlespan}</span>
				</h2>
				<h4>{subtitle}</h4>
			</div>			
			{children}
			</>
		
	);
}
