import React, { Component } from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import PropertyHome from '../components/PropertyHome';
import { Link } from 'react-router-dom';
import PropertyDetails from '../components/PropertyDetails';
import propertyData from '../propertyData'

export default class Home extends Component {
    state = {
        property: [...propertyData]
    }

    render() {
        return (
            <>
                <Hero>
              
                    <Banner title='find your best' titlespan='property' subtitle='for sell, for rent, all in one place'>
                        <div className="col-md-12 text-center">
                            <Link to='/Property' className="hero-btn">
                                find
                            </Link>
                        </div>
                    </Banner>
                 
                </Hero>
                <PropertyHome />
                <PropertyDetails property={this.state.property} />
            </>
        );
    }
}