import { API_URL } from './secret/secrets.js';
import '../global.js';

const login_destination = "api/posts/timeline/all";
  
  const failure = (value) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => reject(value), 2000);
    });
  };

  // get recipes function
  export const getRecipesHome = () => 
  {  
      if(global.user_token == '')
      {
          return null;
      }

        console.log("beginning get recipes");

        try {
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json',  'Authorization': `Bearer ${global.user_token}`},
                // body: JSON.stringify({email, password})
                //body: '{"email":"gamergirl5001@gmail.com", "password":"delta123"}'
            };

            console.log(requestOptions);
            
            return fetch(`${API_URL}${login_destination}`, requestOptions)
                .then(response => response.json())
                .then(response => {
                return response
                });
                

        }catch(error) {
            console.log("error occurred when trying to log in " + error);
            setError("Error occured");
            return failure({ error: 500, message: 'Something went wrong' });
        }
    };