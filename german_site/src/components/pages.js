import React, {Fragment} from 'react'
import Page from './page.js'
import FourOFour from './404'
import Header from './Header' 
import Main from './main'

import 
{
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";

export default function Pages(props){
    let { path, url } = useRouteMatch();
    return(
      <Fragment>
  
        <Header lang={url.slice(0, 3)} />
        <Switch>
            <Route exact path={path}>
              <Main lang={path.slice(1,3)} />
            </Route>
            <Route path={`${path}/:pageId`}>
              <Page lang={path} />
            </Route>
            <Route>
              <FourOFour />
            </Route>
  
        </Switch>
      </Fragment>
    )
  
  }
  