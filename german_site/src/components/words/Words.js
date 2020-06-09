import React, {useState, useEffect, useContext} from 'react'
// import '../../styles/words.css'
import WordsListing from './WordsListing'
import loader from '../../assets/oval.svg'
import text from '../../texts'
import axios from 'axios'
import {Context} from '../../context'
import Verbs from './Verbs'
import VerbsD from './verbsDesktop'

export default function Words(props){
    const [loading, setLoading]= useState(true)
    const [typedText, setTypedText]= useState('')
    const [error, setError]= useState(false)

    const {addWord, word, addUsedDataWord, usedDataWord} = useContext(Context)

    const handleForm = (e)=>
    {
        e.preventDefault()
        addWord(e.target.word.value)
        setError(false)

        e.target.word.value =''
    }


    useEffect(() =>{
        async function getwords()
        {
        try{
        let res = await axios(
            `http://localhost:3001/words/${word}`);
         // `https://verbs-server.herokuapp.com/words/${word} `);
            

        let words = await res.data

        addUsedDataWord(words, word)

        setLoading(false)
        
        setError(false)

        }catch(err){
            
            setError(err)
            setLoading(false)

        }
        }
        if ( !Object.keys(usedDataWord).includes(word) )
        {
            if (word !== undefined){
            setLoading(true)
            getwords()
            
            }
        }else{
            setLoading(false)
        }

      },[word, usedDataWord, addUsedDataWord]);

    return(
        <div className="main">
            <div className="formWrapper">
                <div className="typedWord" >
                    <h1 className='typedWordText'>{typedText || word}</h1>
                </div>
                <div className="wordPlatform"  >
                    <form  onSubmit={(e)=> handleForm(e)} >
                        <input type="text" name='word' onChange={(e)=> setTypedText(e.currentTarget.value) }  placeholder={text.wordsText.placeholder[props.lang]} autoComplete='off'/>
                    </form>
                    <div className="info" id='info'>
                        {word !== undefined ? 
                            loading? 
                                <img src={loader} alt='loader'/> 
                                : 
                                !error && usedDataWord[word] !== undefined ?
                                    <WordsListing lang={props.lang} word={usedDataWord[word]}/>
                                    : 
                                    <h1 className='yourWord'>Not Found</h1> 
                            :
                            <h1 className='yourWord'>{text.wordsText.text[props.lang]}</h1>}
                    </div>
                </div>
            </div>

        </div>
    )
}


// 