import React, {useState, Fragment} from 'react'
import {
      NavLink,

      useLocation 
    } from 'react-router-dom'

import '../styles/header.css'
import menu_pic from '../assets/menu.svg'
import close_pic from '../assets/close.svg'
import { CSSTransition } from 'react-transition-group'
import text from '../texts'



export default ({lang})=>{
  let location = useLocation()
  const [showMenu, setshowMenu] =useState(false)
  return(
      <Fragment>
        <CSSTransition in={showMenu} timeout={200} classNames="mobileContainer">
       
          <div className="mobileContainer">
              <nav>
                <h1 className="MobLogo">Deutschland erfahren</h1>
                <img src={close_pic}  onClick={()=> setshowMenu(false) } className='menuIcon' alt="menu"/>
              </nav>
              <div className="innerMobMenu">
                  <ul className="options" type="none">
                      <li><NavLink onClick={()=> setshowMenu(false)} exact className="link" activeClassName="selected" to={`${lang}`}>{text.headerText.home[lang.slice(1)]}</NavLink></li>
                      <li><NavLink onClick={()=> setshowMenu(false)} className="link" activeClassName="selected" to={`${lang}/words`}>{text.headerText.words[lang.slice(1)]}</NavLink></li>
                      <li><NavLink onClick={()=> setshowMenu(false)} className="link" activeClassName="selected" to={`${lang}/cities`}>{text.headerText.cities[lang.slice(1)]}</NavLink></li>
                      <li><NavLink onClick={()=> setshowMenu(false)} className="link" activeClassName="selected" to={`${lang}/api`}>API</NavLink></li>

                      <li>
                        <NavLink onClick={()=> setshowMenu(false)} className="link " activeClassName="selected" to={`/ua${location.pathname.slice(3)}`}>UA</NavLink>
                        <NavLink onClick={()=> setshowMenu(false)} className="link " activeClassName="selected" to={`/de${location.pathname.slice(3)}`}>DE</NavLink>
                        <NavLink onClick={()=> setshowMenu(false)} className="link " activeClassName="selected" to={`/en${location.pathname.slice(3)}`}>EN</NavLink>
                      </li>
                  </ul>
                  {/* <ul className="languages" type="none">
                      <li><NavLink className="link " activeClassName="selected" to='/about'>UA</NavLink></li>
                      <li><NavLink className="link " activeClassName="selected" to='/about'>DE</NavLink></li>
                      <li><NavLink className="link " activeClassName="selected" to='/about'>EN</NavLink></li>
                  </ul> */}
              </div>
          </div>
       </CSSTransition>  
      <header>
      <div className="container">
            <h1 className="logoText">Deutschland erfahren</h1>
            <nav>
              <div className="mobile">
                  <img src={menu_pic}  onClick={()=> setshowMenu(true) } style={{border: "2px solid #1b1b2f"}}  className='menuIcon' alt="menu"/>

              </div>
              <ul type="none">
                  <li><NavLink exact className="link" activeClassName="selected" to={`${lang}`}>{text.headerText.home[lang.slice(1)]}</NavLink></li>
                  <li><NavLink className="link" activeClassName="selected" to={`${lang}/words`}>{text.headerText.words[lang.slice(1)]}</NavLink></li>
                  <li><NavLink className="link" activeClassName="selected" to={`${lang}/cities`}>{text.headerText.cities[lang.slice(1)]}</NavLink></li>
                  <li><NavLink onClick={()=> setshowMenu(false)} className="link" activeClassName="selected" to={`${lang}/api`}>API</NavLink></li>

                  
              </ul>
              <ul type="none">
                  <li><NavLink className="link " activeClassName="selected" to={`/ua${location.pathname.slice(3)}`}>UA</NavLink></li>
                  <li><NavLink className="link " activeClassName="selected" to={`/de${location.pathname.slice(3)}`}>DE</NavLink></li>
                  <li><NavLink className="link " activeClassName="selected" to={`/en${location.pathname.slice(3)}`}>EN</NavLink></li>
              </ul>
            </nav>
          
      </div>
      </header>
      
      </Fragment>
    )
  }