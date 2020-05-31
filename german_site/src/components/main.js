import React from 'react'
import text from '../texts'

export default function Main(props){
    return(
      <div className="main">
          <div className="middleText">
            <h1>Deutschland erfahren!</h1>
              <p>{text.mainText[props.lang]}</p>
          </div>
      </div>
    )
  }
  