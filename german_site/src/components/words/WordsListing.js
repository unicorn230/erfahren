import React, { Fragment, useState, useEffect } from 'react'

// import '../../styles/words.css'
import Noun from './Nouns'
import Verb from './Verbs'
import text from '../../texts'

export default function WordsListing(props){
    const[wordState, setWordState]= useState(true)
    useEffect(()=>{
         props.word.verb === false ? setWordState(false): setWordState(true)
    },[props])
    return(
        <Fragment>

                <div className="wordSwitcher">
                    <h2 onClick={()=> setWordState(true)} style={wordState? {textDecoration: 'underline'}: {}} >{text.wordListingText.verb[props.lang]}</h2><h2 style={!wordState? {textDecoration: 'underline'}: {}}  onClick={()=> setWordState(false)}>{text.wordListingText.noun[props.lang]}</h2>
                </div>
                {
                    wordState? 
                    <div className="verb">
                       { props.word.verb === false ? <h1 className='yourWord'>Not Found</h1>:  <Verb  word={props.word.verb}/>    }  
                    </div>
                    :
                    <div className="noun">
                        { props.word.noun === false ? <h1 className='yourWord'>Not Found</h1>:  <Noun word={props.word.noun}/>    }   
                    </div>
                }   
        </Fragment>
    )
}