import React, { Component } from 'react'
import axios from 'axios'
 
import Appst from './storeApp/appSt' 
import  ArticleDetail from './storeApp/detail/artdetail' 
import  EditeArticle from './storeApp/appEditeArt' 
import  AddNewArt from './storeApp/appNewSt' 
import { BrowserRouter,  Route  } from 'react-router-dom'
 
export default class App extends Component {
    
  render() {  
    return ( <div>Привет из App!!   
               <Route  exact path="/"  component={Appst}/>           
               <Route path= "/artic/:id"   component={ArticleDetail} /> 
               <Route path="/addNewArt" component={AddNewArt}/>
               <Route path="/articEdite/:id" component={EditeArticle}/>
               <Route path="/articDelite/:id" component={AddNewArt}/>
           </div>);
  }
}
