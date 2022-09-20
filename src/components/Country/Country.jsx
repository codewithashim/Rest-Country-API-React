import React from 'react'
import './Country.css'

function Country(props) {
    const name = props.name;
    const languages = props.languages;
    const maps = props.maps;
    const population = props.population;
    const timezones = props.timezones;
    const flags = props.flags;
    const region = props.region

    return (
        <section className='countryContainer'>
            <div className="countryList">
                <div className='flagsImg'>
                    <img src={flags} alt="" />
                </div>
                <div className="maps">
                    <img src={maps} alt="" />
                </div>

                <h3>Name : {name}</h3>
                <h4>Population : {population}</h4>
                <h4>Languages : {languages}</h4>
                <h4>Region : {region}</h4>
                <h4>TimeZone : {timezones}</h4>
            </div>
        </section>
    )
}

export default Country
