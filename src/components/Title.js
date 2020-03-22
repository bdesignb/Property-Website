import React from 'react';


export default function Title({ title, subtitle }) {
    return (
        <div className='property-title'>
            <h2>{title}</h2>
            <p>{subtitle}</p>
            <div />
        </div>
    )
}
