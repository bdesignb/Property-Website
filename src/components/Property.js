import React from 'react';
import { Link } from 'react-router-dom';

export default function Property({ property }) {
const { id, name, tag, img, category, price, city, bed, sqft, bath } = property;

    return (
        <>
            <div className="col-xl-4 col-md-6 col-lg-4">
                <div className="property-single">
                    <div className="property-thumb">
                        {tag === 'for rent' ? (
                            <div className="property-tag">{tag}</div>
                        ) : (
                                <div className="property-tag red">{tag}</div>
                            )}
                        <img src={img} alt="Property" />                      
                    </div>
                    <div className="property-content">
                        <div className="property-content-header">
                            <h3>
                                <a href="#">{name}</a>
                            </h3>
                            <div className="property-location">
                                <i class="fas fa-map-marker-alt"></i>
                                <span> {city}</span>
                            </div>                           
                                <span className="property-amount">${price}</span>                       
                        </div>
                    </div>
                    <div className="property-footer">
                        <ul>
                            <li>
                                <div className="property-footer-info">
                                    <i className="fas fa-home" />
                                    <span>{sqft} Sqft</span>
                                </div>
                            </li>
                            <li>
                                <div className="property-footer-info">
                                    <i className="fas fa-bed" />
                                    <span>{bed} bed</span>
                                </div>
                            </li>
                            <li>
                                <div className="property-footer-info">
                                    <i className="fas fa-bath" />
                                    <span>{bath} bath</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

