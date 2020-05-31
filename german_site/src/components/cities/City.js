import React, {Fragment} from 'react'
// import '../../styles/words.css'
import text from '../../texts'

export default function City({city, lang}){
    return(
        <Fragment>
        <div className='heading'><h1>{city.city}</h1></div>
        <div className="couple">
        <div className="tableCities">
            <ul type="none">
                    <li> <span>{text.cityText['admin'][lang]}: </span>{city.admin}</li>
                    <li><span>{text.cityText['prop_population'][lang]}: </span>{city.population_proper}</li>
                    <li><span>{text.cityText['population'][lang]}: </span> {city.population}</li>
                    <li><span>{text.cityText['lat'][lang]}: </span> {city.lat}</li>
                    <li><span>{text.cityText['lng'][lang]}: </span> {city.lng}</li>

                </ul>
        </div>
        </div>
        </Fragment>
    )
}