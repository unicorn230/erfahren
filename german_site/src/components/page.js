import FourOFour from './404'
import Words from './words/Words'
import Cities from './cities/Cities'
import Api from './api'
import React from 'react'
import Handbook from './handbook/handbook'

import{useParams} from "react-router-dom";

export default function Page(props){
    let { pageId } = useParams();
    
    let comp;
    switch(pageId){
      case 'words':
        comp = <Words lang={props.lang.slice(1,3)}/>
        break;
      case 'cities':
        comp = <Cities lang={props.lang.slice(1,3)}/>
        break;
      case 'api':
        comp = <Api lang={props.lang.slice(1,3)}/>
        break;
      case 'handbook':
        comp = <Handbook lang={props.lang.slice(1,3)}/>
        break;
      default :
        comp = <FourOFour />
  
    }
  
    return (
      comp
    );
  }
  
  