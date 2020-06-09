import React, { Fragment, useState } from 'react'
import '../../styles/handbook.css'
import ReactMarkdown from 'react-markdown'
import articles from '../../articles' 
import menu_pic from '../../assets/menu.svg'
import close_pic from '../../assets/close.svg'
import texts from '../../texts'
import FourOFour from '../../components/404'

import { CSSTransition } from 'react-transition-group'

import 
{
    HashRouter as Router,
    NavLink,
    Switch,
    Route,
    useRouteMatch,
    Redirect
} from "react-router-dom";


export default  ({lang})=>{
    let { path, url } = useRouteMatch();
    const [showHandbookMenu, setshowHandbookMenu] =useState(false)
    const pathes = ['geschlechter', 'faelle', 'adjektive', 'praesens', 'vergangen', 'futurum', 'plusquamperfekt', 'konjunktiv1', 'konjunktiv2', 'passiv']
    return (
        <Fragment>
        <div className="handBook">
            <div className="themes">
                <ul type='none'>
                    {pathes.map(singlePath => {
                        return  <li key={singlePath}><NavLink  exact className="handBooklink" activeClassName="handBookselected" to={`${url}/${singlePath}`} >{texts.handBook[singlePath][lang]}</NavLink></li>
                    } )}

                </ul>
            </div>
            <div className="handbookContent">
                <div className="content">
                    <Router>
                        <Switch>

     

                            {pathes.map(singlePath => {
                                console.log(`${url}/${singlePath}`)
                                return (
                                    <Route key={singlePath} path={`${url}/${singlePath}`}>
                                        <ReactMarkdown  source={articles[singlePath][lang]} escapeHtml={false} />  
                                    </Route>
                                    
                                )
                            })}

                            <Route exact path={`${url}/`}>
                                <Redirect to={`${url}/geschlechter`}/>
                            </Route>
                            <Route>
                                <FourOFour />
                            </Route>
                        </Switch>
                    </Router>
                    <br/>
                </div>
                


                
            </div>
        </div>
        <div className="handbookMenuIcon" onClick={()=> setshowHandbookMenu(true)} >
        <img src={menu_pic} style={{border: 'none'}} className='menuIcon' alt="menu"/>

        </div>
        <CSSTransition in={showHandbookMenu} timeout={200} classNames="handbookMenu">

        <div className="handbookMenu">
            <nav>
                <img src={close_pic}  onClick={()=> setshowHandbookMenu(false) } className='menuIcon' alt="menu"/>
            </nav>

            <ul type='none'>
                    {pathes.map(singlePath => {
                        return  <li key={singlePath}><NavLink onClick={()=> setshowHandbookMenu(false) } exact className="handBooklinkMenu" activeClassName="handBookselected" to={`${url}/${singlePath}`} >{texts.handBook[singlePath][lang]}</NavLink></li>
                    } )}
            </ul>
        </div>
        </CSSTransition>
        </Fragment>
    )
}