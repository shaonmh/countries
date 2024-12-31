import React from 'react';
import './Country.css';

const Country = ({country}) => {
    console.log(country)
    const {name, flags} = country;
    return (
        <div className='country'>
            <h2>Name: {name.common}</h2>
            <img src={flags.png} alt={flags.png} />
        </div>
    );
};

export default Country;