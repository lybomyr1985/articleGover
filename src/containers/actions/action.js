import {   apiMiddleware } from '../../store/customMidleware';
import axios from 'axios'
import fetch from 'isomorphic-fetch'

  /*
 export function fetchData ()  {
     return function (dispatch){ 
       dispatch({type:'FETCH_START'})
  fetch( 'api/articles')
   .then(response => response.data())
   .then(response => dispatch(fetchArt(response)))
   .catch(error=>dispatch( {type:'FETCH_ERROR',
   payload:  error  }))     
    }

 }

 function fetchArt(res){
  return {
     type:'FETCH_FULFILLED',
      payload:  res  } 

 }
   
  
   

    export const fetchData = () => (
        {type:'FETCH_FULFILLED',
        payload: { response}
        

          }  )  
    
       }

       export const fetchData = () => (
        { type: 'FETCH_FULFILLED',
      payload:{
        url:'http://localhost:3000/api/articles'
      }
      
      })


    export const FETCH_FULFILLED = 'FETCH_FULFILLED';

    export const fetchData = () => {
    return  { type:'API',
    payload:{
    
           url:'http://localhost:3000/api/articles',
           success:'FETCH_FULFILLED'
    }
    
    }}     */


    export const fetchData = () => ({ type:'FETCH', cb: (response,dispatch) =>dispatch(fetchArt(response))})  

    export const fetchArt = (response) => { return  {type: 'FETCH_FULFILLED', payload: response}  }