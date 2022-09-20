import React from 'react';
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
            {
                countrys.map(country => {
                    const name = country.name.common
                    return (
                        <Country name={name}></Country>
                    )
                })
            }
        </div>
    )
};

export default LodadCountry;