import React, { Component } from 'react'
import axios from 'axios'
 
import Appst from './storeApp/appSt'
 
import  ArticleDetail from './storeApp/detail/artdetail' 
import { BrowserRouter,  Route  } from 'react-router-dom'
 
export default class App extends Component {
    
  render() {  
    return ( <div>Привет из App!!   
             
             <Route  exact path="/"  component={Appst}/>           
             <Route path= "/artic/:id"   component={ArticleDetail} /> 
           </div>);
  }
}
