import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero({ children, hero }) {
	return (
		<header className={hero}>
			<div className='overlay'>
				<div className="hero-content">
					<div className="container">
						<div className="row">{children}</div>
					</div>
				</div>
			</div>
		</header>
	);
}

Hero.defaultProps = {
	hero: 'defaultHero'
}

