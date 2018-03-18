import axios from 'axios'


export const fetchAdd = (item) => { 
 
    axios.post('/api/articles',item,
    {
      headers: {
          'Content-Type': 'application/json'
      }
    }
  )
      .then(function (response) {
        
        console.log('Succes response'+response);
   
      })
      .catch(function (error) {
        console.log(error);
      });  }