import React from 'react';
import './LoadCountry.css';
import { useEffect, useState } from 'react';
import Country from './../Country/Country';

const LodadCountry = () => {
    const [countrys, setCountry] = useState([])
    useEffect(() => {
        const url = `https://restcountries.com/v3.1/all`
        fetch(url)
            .then(res => res.json())
            .then(data => setCountry(data))
    }, [])

    return (
        <div>
            <h3>Availabel Country : <span>{countrys.length}</span> </h3>
            <div className='countryContainer'>
                {
                    countrys.map(country => {
                        return (
                            <Country country={country} key={country.cca3}></Country>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default LodadCountry;