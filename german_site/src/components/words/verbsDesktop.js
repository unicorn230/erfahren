import React, {Fragment} from 'react'
// import '../../styles/words.css'
export default ({word})=>{

    return (
        <Fragment>
                <div className="table tableDesk tableVerb">
                        <h2 >Präsens</h2>
                        <ul type="none">
                            <li><span>ich:</span>{word['Präsens_ich']}</li>
                            <li><span>du:</span>{word['Präsens_du']}</li>
                            <li><span>er:</span>{word['Präsens_er, sie, es']}</li>
                            <li><span>wir:</span>{word['Infinitive']}</li>
                            <li><span>ihr:</span>{word['Imperativ Plural']}</li>
                            <li><span>sie:</span>{word['Infinitive']}</li>
                        </ul>
                </div>
                <div className="table tableDesk tableVerb">
                        <h2 >Imperativ</h2>
                        <ul type="none">
                            <li><span>ich:</span>-</li>
                            <li><span>du:</span>{word['Imperativ Singular']}</li>
                            <li><span>er:</span>-</li>
                            <li><span>wir:</span>{word['Infinitive']}</li>
                            <li><span>ihr:</span>{word['Imperativ Plural']}t</li>
                            <li><span>sie:</span>{word['Infinitive']}en</li>
                        </ul>
                </div>
               
           <div className="table tableDesk tableVerb">
                        <h2 >Präteritum</h2>
                        <ul type="none">
                            <li><span>ich:</span>{word['Präteritum_ich']}</li>
                            <li><span>du:</span>{word['Präteritum_ich']}st</li>
                            <li><span>er:</span>{word['Präteritum_ich']}</li>
                            <li><span>wir:</span>{word['Präteritum_ich']}en</li>
                            <li><span>ihr:</span>{word['Präteritum_ich']}t</li>
                            <li><span>sie:</span>{word['Präteritum_ich']}en</li>
                        </ul>
                </div>
                <div className="table tableDesk tableVerb">
                        <h2 >Partizip 2</h2>
                        <ul type="none">
                            <li><span>ich:</span>{word['Partizip II']}</li>
                            <li><span>du:</span>{word['Partizip II']}</li>
                            <li><span>er:</span>{word['Partizip II']}</li>
                            <li><span>wir:</span>{word['Partizip II']}</li>
                            <li><span>ihr:</span>{word['Partizip II']}</li>
                            <li><span>sie:</span>{word['Partizip II']}</li>
                        </ul>
                </div>

                <div className="table tableDesk tableVerb">
                        <h2 >Konjunktiv 1</h2>
                        <ul type="none">
                            <li><span>ich:</span>{word['Infinitive'].slice(0, -1)}</li>
                            <li><span>du:</span>{word['Infinitive'].slice(0, -1)}st</li>
                            <li><span>er:</span>{word['Infinitive'].slice(0, -1)}</li>
                            <li><span>wir:</span>{word['Infinitive'].slice(0, -1)}n</li>
                            <li><span>ihr:</span>{word['Infinitive'].slice(0, -1)}t</li>
                            <li><span>sie:</span>{word['Infinitive'].slice(0, -1)}n</li>
                        </ul>
                </div>
                <div className="table tableDesk tableVerb">
                        <h2 >Konjunktiv 2</h2>
                        <ul type="none">
                            <li><span>ich:</span>{word['Konjunktiv II_ich']}</li>
                            <li><span>du:</span>{word['Konjunktiv II_ich']}st</li>
                            <li><span>er:</span>{word['Konjunktiv II_ich']}</li>
                            <li><span>wir:</span>{word['Konjunktiv II_ich']}n</li>
                            <li><span>ihr:</span>{word['Konjunktiv II_ich']}t</li>
                            <li><span>sie:</span>{word['Konjunktiv II_ich']}n</li>
                        </ul>
                </div>
        </Fragment>
     
    )
}