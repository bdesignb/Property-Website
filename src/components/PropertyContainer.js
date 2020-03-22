import React, { Component } from 'react';
import PropertyFilter from './PropertyFilter';
import PropertyList from './PropertyList';
import propertyData from '../propertyData'

export default class PropertyContainer extends Component {
    state = {
        property: [],
        listProperty: [],
        category: 'category all',
        tag: 'type all'    
    };

    componentDidMount() {
        let property = propertyData;        
        this.setState({
            property: property,
            listProperty: property            
        });
    }
    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = event.target.name;
        this.setState(
            {
                [name]: value
            },
            this.listProperty
        );
    };
    listProperty = () => {
        let { property, category, tag } = this.state;
        let tempProperty = [...property];

        if (category !== 'category all') {
            tempProperty = tempProperty.filter((property) => property.category === category);
        }

        if (tag !== 'type all') {
            tempProperty = tempProperty.filter((property) => property.tag === tag);
        }

        this.setState({
            listProperty: tempProperty
        });
    };

    render() {
        return (
            <>
                <PropertyFilter property={this.state.property} handleChange={this.handleChange} />
                <PropertyList property={this.state.listProperty} />
            </>
        );
    }
}


