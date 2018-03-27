import axios from 'axios'


export const fetchDelete= (id) => { 
 
    axios.delete('/api/articles/'+id,
    {
      headers: {
          'Content-Type': 'application/json'
      }
    }
  
  )
      .then(function (response) {
        console.log('Idddddddddddddd'+id);
        console.log('Succes response'+response);
   
      })
      .catch(function (error) {
        console.log('Idddddddddddddd'+id);
        console.log(error);
      });  }