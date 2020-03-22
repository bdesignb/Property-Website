import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default class PropertyDetails extends Component {

  render() {

    console.log(this.props)

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
                                <span className="amount">From ${property.price}k</span>
                            ) : (
                                    <span className="amount">${property.price}/month</span>
                                )}
                                </span>
                  <a href="property">search <i className='fas fa-arrow-right'></i></a>
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

            <div class="row">
              <div class="col-xl-12">            

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
      
            </div>

          </div>
        </div>






      </>
    );
  }
}
