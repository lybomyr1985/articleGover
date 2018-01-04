import axios from 'axios'
import fetch from 'isomorphic-fetch'
import logger from 'redux-logger' 

export const apiMiddleware = store => next => action=> {
 
  if(action.type !== 'FETCH') return next(action)
     console.log('midleware:'+store)
    
    axios.get( 'http://localhost:3000/api/articles ')
   .then(response => response.data)
   .then(json => action.cb(json, store.dispatch))
  .catch((err) => { throw new Error(err.message) })
}

/*
export const apiMiddleware = ({dispatch}) => next => action => {
  if(action.type !== 'API') {return next(action)}

  const { payload,url } = action;
console.log('from midleware');
 axios.get(url)
  .then(response => response.json())
  .then(response => dispatch( {type: payload.success, response} )
  .catch((err) => { throw new Error(err.message) }))
}

 */