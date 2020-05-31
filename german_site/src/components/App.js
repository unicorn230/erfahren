import React, {useState} from 'react';
// import '../styles/App.css';
import {
  HashRouter  as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from './Header'
import {Context} from '../context'

import FourOFour from './404.js'
import Pages from "./pages"

function App() {
  const [usedDataWord, setUsedDataWord]= useState({})
  const [usedDataCity, setUsedDataCity]= useState({})

  const [word, setWord] = useState()
  const [city, setCity] = useState()


  const addWord = (w)=>{
    setWord(w.trim().toLowerCase())
  }

  const addCity = (c)=>{
    setCity(c.trim().toLowerCase())
  }

  const addUsedDataWord =(data, word)=>{
    let obj ={}
    obj[word.toLowerCase()] ={noun: data.noun, verb: data.verb}
    setUsedDataWord(()=> Object.assign(usedDataWord, obj))
  }

  const addUsedDataCity =(data, city)=>{
    let obj ={}
    obj[city.toLowerCase()] = data
    setUsedDataCity(()=> Object.assign(usedDataCity, obj))
  }

  return (
    <Context.Provider value={{addWord, addCity ,addUsedDataWord, addUsedDataCity, word, city, usedDataWord, usedDataCity}}>
    <div className="App">
      <Router >

        <Switch>
          <Route exact path="/">
            <Redirect to='/ua'/>
          </Route>

          <Route  path={["/ua", "/de", "/en"]}>
            <Pages />
          </Route>

          {['/cities', '/words', '/api'].map((path, i) => {
            return(

              <Route key={i}  path={path}>
                <Redirect to={`/ua${path}`} />
              </Route>
            )})}

          <Route>
              <Header lang={'/ua'} />
              <FourOFour />
          </Route>
        </Switch>

      </Router>
    </div>
    </Context.Provider>
  );
}

export default App;
