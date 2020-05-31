import React, {useState, useEffect, useContext} from 'react'
import loader from '../../assets/oval.svg'
// import '../../styles/words.css'
import City from './City'
import text from '../../texts'
import axios from 'axios'

import {Context} from '../../context'

export default function Cities(props){
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    const [typedText, setTypedText]= useState('')

    const {addCity, city, addUsedDataCity, usedDataCity} = useContext(Context)

    const handleForm = (e)=>
    {
        setError(false)
        e.preventDefault()
        
        addCity(e.target.city.value)
        e.target.city.value =''
    }


    useEffect(()=>{
        async function getCities()
        {
            try{
                let res = await axios(
                    `http://localhost:3001/cities/${city}`);
                    // `https://verbs-server.herokuapp.com/cities/${city}`);

                let cities = await res.data
                
                addUsedDataCity(cities, city)

                setLoading(false)

                setError(false)

                }catch(err){

                    setError(err)
                    setLoading(false)

                }

            }
            if ( !Object.keys(usedDataCity).includes(city) )
            {
                if (city !== undefined){
                setLoading(true)
                getCities()
                }
            }else
            {
                setLoading(false)
            }

    }, [city, usedDataCity, addUsedDataCity])
    
    return (
        <div className="main">
        <div className="formWrapper">
            <div className="typedWord" >
                <h1 className='typedWordText'>{typedText || city}</h1>
            </div>
            <div className="wordPlatform"  >
                <form  onSubmit={(e)=> handleForm(e)} >
                    <input type="text" name='city' onChange={(e)=> setTypedText(e.currentTarget.value) }  placeholder={text.citiesText.placeholder[props.lang]} autoComplete='off'/>
                </form>
                <div className="info" id='info'>
                {city !== undefined ? 
                    loading? 
                        <img src={loader} alt='loader'/> 
                        : 
                        !error ?
                            usedDataCity[city] !== undefined? <City lang={props.lang} city={usedDataCity[city]}/>: false
                            : 
                            <h1 className='yourWord'>Not Found</h1> 
                    :
                    <h1 className='yourWord'>{text.citiesText.text[props.lang]}</h1>}
                </div>
            </div>
        </div>
    </div>
    )
}