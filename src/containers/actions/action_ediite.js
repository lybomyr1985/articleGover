import axios from 'axios'


export const fetchEdite= (id,item) => { 
 
    axios.put('/api/articles/'+id,item,
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