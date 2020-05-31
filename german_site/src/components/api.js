import React from 'react'
// import '../styles/api.css'
import Highlight from 'react-highlight.js' 
import text from '../texts'

import sample from '../codeSamples'

export default ({lang})=>{
    return(
        <div className="main">
            <div className="middleTextAPI">
                <h1>API</h1>

            <div className="wordsApi">
                {/* <hr/> */}
                <h1>{text.apiText.wordsApi[lang]}</h1>
                <p>{text.apiText.explainW1[lang]}<span className='ApiLink'>https://verbs-server.herokuapp.com/words/{text.apiText.word[lang]}</span></p>
                <br/>
                <p>{text.apiText.example[lang]}: <span className='ApiLink'>https://verbs-server.herokuapp.com/words/kommen</span></p>
                <p>{text.apiText.explainW2[lang]}</p>
                <br/>
                <div className="example">
                    <Highlight language={'json'}>
                        {
                            sample.s1        
                        }
                    </Highlight>
                </div>
                <br/>
                <p>{text.apiText.explainW3[lang]}</p>
                <p>{text.apiText.example[lang]}: <span className='ApiLink'>https://verbs-server.herokuapp.com/words/gurke</span></p>
                <br/>

                <div className="example">
                    <Highlight language={'json'}>
                        {
                            sample.s2        
                        }
                    </Highlight>
                </div>
            <br/>
                <hr/>
            </div>
            <div className="citiesApi">
                <h1>{text.apiText.citiesApi[lang]}</h1>
                <p>{text.apiText.explainC1[lang]}<span className='ApiLink'>https://verbs-server.herokuapp.com/cities/{text.apiText.city[lang]}</span> </p>
                <br/>
                <p>{text.apiText.example[lang]}: <span className='ApiLink'>https://verbs-server.herokuapp.com/cities/berlin</span></p>
                <p>{text.apiText.explainC2[lang]}</p>
                <br/>
                
                <div className="example">
                    <Highlight language={'json'}>
                        {
                            sample.s3  
                        }
                    </Highlight>
                </div>
                <br/>
                <br/>
                <br/>


            </div>
            </div> 
        </div>
    )
}