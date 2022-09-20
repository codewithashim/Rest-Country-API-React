import React from 'react'
import './Country.css'

function Country(props) {
    const { name, population, timezones, flags, region } = props.country;

    return (
        <div className="countryList">
            <div className='flagsImg'>
                <img src={flags.png} alt="" />
            </div>
            <div className="texContain">
                <h3>Name : {name.common}</h3>
                <p>Population : {population}</p>
                <p>Region : {region}</p>
                <small className='timeZone'>TimeZone : {timezones}</small>
            </div>
        </div>
    )
}

export default Country
