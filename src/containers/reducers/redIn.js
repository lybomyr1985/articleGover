 
export default function redIn(state={
   
    articles:[]
    
       }, action)	{
      switch(action.type){
               
       case 'FETCH_FULFILLED' :{
        return Object.assign({}, state, {articles: action.payload})             
      }
      case 'FETCH__REJECTED':{
        return {
                 ...state,
                 
                 error: action.payload
               }
      }
      
      }
      
    return  state
    

    } 

    