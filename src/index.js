import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'
import Artricle from './containers/storeApp/articticle/acticle'
import {createStore,   applyMiddleware, combineReducers,compose } from 'redux'
import {Provider} from 'react-redux'
import red from './containers/reducers/redIn'

import  ArticleDetail from './containers/storeApp/detail/artdetail'
import Appst from './containers/storeApp/appSt'
 
 
import createHistory from 'history/createBrowserHistory' 
 
import { Router, Route,browserHistory  } from 'react-router'
import { routerReducer,syncHistoryWithStore, routerMiddleware,ConnectedRouter  } from 'react-router-redux'  
 
import {apiMiddleware} from './store/customMidleware'
import promise from 'redux-promise'; 


/*


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

 // */ 
const hist = createHistory();
const middleware = (routerMiddleware(hist));


 const createStoreWithMiddleware =   applyMiddleware(apiMiddleware,middleware )(createStore);
const reduser=combineReducers({red, routing:routerReducer});
  // create the store 
  
  


const store = createStoreWithMiddleware(red);
 // const history = syncHistoryWithStore(browserHistory, store);  
 console.log(store.getState());
 
render(
<Provider store={store}>
        <ConnectedRouter   history={hist }>   
          <App/>
        </ConnectedRouter>
</Provider>,
  document.getElementById('root')
);
