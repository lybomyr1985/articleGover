import React, { Component } from 'react'
import axios from 'axios'
import { error } from 'util';
import Appst from './storeApp/appSt'
import { BrowserRouter, Route, Switch,hashHistory  } from 'react-router-dom'
import About from './storeApp/articticle/acticle' 
import Article from './storeApp/articticle/acticle';
 
export default class App extends Component {
  
  
  render() {  
    return ( <div>Привет из App!!        
      <Switch>
            <Route path="/"  component={Appst}/>                      
            <Route path="/artic/:id"   component={About}   />            
      </Switch>
               
           </div>);
  }
}
