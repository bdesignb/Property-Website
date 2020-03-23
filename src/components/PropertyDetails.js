import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

export default class PropertyDetails extends Component {

  render() {

    let filterProperty = this.props.property.filter((property) => property.category === 'new')

    var property = filterProperty.map((property) => {
      return (
        <Carousel.Item>
          <div class="property-info">
            <div class="property-info-inner">
              <span class="property-tag">
                {property.category}
              </span>
              <div class="property-info-header">
                <h3>{property.name}</h3>
                <span> {property.city}</span>
              </div>
              <div class="property-info-content">
                <p>{property.info}</p>
                <div class="price-details d-flex justify-content-between align-items-center">
                  <span>
                    {property.tag === 'for sale' ? (
                      <span className="amount">${property.price} / For sale</span>
                    ) : (
                        <span className="amount">${property.price} / For rent</span>
                      )}
                  </span>
                  <Link to={process.env.PUBLIC_URL + '/Property'}><i className='fas fa-arrow-right'></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      )
    });

    return (
      <>
        <div class="property-details">
          <div class="container">
            {/* <div class="row">
              <div class="col-xl-12"> */}
            <div class="single_details">
              <div class="row">
                <div class="col-xl-6 col-md-6">
                  <Carousel controls={false}>
                    {property}
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
          {/* </div>
          </div> */}
        </div>
      </>
    );
  }
}

