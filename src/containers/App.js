import React, { Component } from 'react'
 
 
import Appst from './storeApp/appSt' 
import  ArticleDetail from './storeApp/detail/artdetail' 
import  EditeArticle from './storeApp/appEditeArt' 
import  AddNewArt from './storeApp/appNewSt' 
import  DeliteArticle from './storeApp/appDeleteArt' 
import { Route  } from 'react-router-dom'
import Header from './header/header'
import Footer from './footer/footer'
export default class App extends Component {
    
  render() {  
    return ( <div> 
               <Header/>      
               <Route  exact path="/"  component={Appst}/>           
               <Route path= "/artic/:id"   component={ArticleDetail} /> 
               <Route path="/addNewArt" component={AddNewArt}/>
               <Route path="/articEdite/:id" component={EditeArticle}/>
               <Route path="/articDelite/:id" component={DeliteArticle}/>
               <Footer/>
           </div>);
  }
}
