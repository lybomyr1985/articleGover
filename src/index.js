import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'
import Artricle from './containers/storeApp/articticle/acticle'
import {createStore,   applyMiddleware } from 'redux'
import {Provider} from 'react-redux'
import red from './containers/reducers/redIn'
import Appst from './containers/storeApp/appSt'
import { Router,  IndexRoute } from 'react-router'
import axios from 'axios'
import { BrowserRouter, Route, Switch,browserHistory  } from 'react-router-dom'
import { routerReducer } from 'react-router-redux'  
 
import {apiMiddleware} from './store/customMidleware'
 
 
/*const history = syncHistoryWithStore(hashHistory, store); 


const client = axios.create({ //all axios can be used, shown in axios documentation
  baseURL:'http://localhost:3000/api',
  responseType: 'json'
});

const configureStore = () => {   
  return createStore(
    red,
    applyMiddleware(customMidleware) +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}

//const store = configureStore();
const store=createStore( red, 
  applyMiddleware(customMiddleware,logger)+window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );
console.log(store.getState());
 
store.subscribe(()=> console.log('state'+store.getState()));
  */ 
  const createStoreWithMiddleware = applyMiddleware(apiMiddleware)(createStore);
  
  // create the store
  const store = createStoreWithMiddleware(red ) ;

render(
<Provider store={store}>
       <BrowserRouter history={browserHistory}>
               <App/>
               
       </BrowserRouter>    
</Provider>,
  document.getElementById('root')
);
