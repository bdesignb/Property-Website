import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import PropertyContainer from '../components/PropertyContainer';
import PropertyFilter from '../components/PropertyFilter';

const Property = () => {
    return (
        <>
            <Hero hero='hero'>
                <Banner title='search' titlespan='property' subtitle='find your best property'>
                    <div className="col-md-12 text-center">
                        <Link to={process.env.PUBLIC_URL + '/'} className="hero-btn">
                            return home
                            </Link>
                    </div>
                </Banner>
            </Hero>
            <PropertyContainer />
        </>
    )
};

export default Property;