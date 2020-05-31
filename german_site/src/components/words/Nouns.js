import React, { Fragment } from 'react'


export default ({word}) =>{
    const renderColumn = (data, g)=>
    {
        let returned =[]
        let keys = Object.keys(data)
        keys.pop()

        for(let i of keys)
        {
            returned.push(<li key={i}><span>{i}:</span>{data[i][g] || '-'}</li>)
        }

        return <ul type='none'>{returned}</ul>
    }

    return(
    
        <Fragment>
        <div className='heading'><h1>{`${word['G'] === 'N' ? 'das': word['G'] === 'F'? 'die' : 'der'} ${word['NOM']['SIN']}`}</h1></div>
            <div className="couple">
            <div className="table">
                <h2 style={{color: 'silver', fontFamily: 'Suez One'}}>Single:</h2>
                    {
                        renderColumn(word, 'SIN')
                    }           
            </div>
            <div className="table">
                <h2 style={{color: 'silver', fontFamily: 'Suez One'}} >Plural:</h2>
                {
                        renderColumn(word, 'PLU')
                    }
            </div>
            </div>
        </Fragment>
    )
}