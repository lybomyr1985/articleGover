import axios from 'axios'


export const fetchEdite= (_id,item) => { 
 
    axios.put(`/api/articles/:${_id}`,item,
    {
      headers: {
          'Content-Type': 'application/json'
      }
    }
  )
      .then(function (response) {
        console.log('Idddddddddddddd'+_id);
        console.log('Succes response'+response);
   
      })
      .catch(function (error) {
        console.log(error);
      });  }