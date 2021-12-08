import React, { useState, createContext } from 'react';
import axios from 'axios';

import { API_URL } from './secret/secrets.js';
//import APIKit from './APIKit.js';

// import * as firebase from 'firebase';

// import { loginRequest } from './authentication.service';

// export const AuthenticationContext = createContext();

// export const auth = ({children}) => 
// {

// const [user, setUser] = useState(null);
// const [error, setError] = useState(null);
const login_destination = "api/auth/login";


  const success = (value) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(value), 2000);
    });
  };
  
  const failure = (value) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => reject(value), 2000);
    });
  };

  const onSuccess = ({data}) => {
    // Set JSON Web Token on success
    setClientToken(data.token);
    this.setState({isLoading: false, isAuthorized: true});
  };

  const onFailure = error => {
    console.log(error && error.response);
    this.setState({errors: error.response.data, isLoading: false});
  };

  // login function
  export const login = (email, password, shouldSucceed = true) => 
  {  
    console.log("logging in");
    const doLogin = async event =>     
    {  
        // event.preventDefault();

        const config = {
          header: {
            "Content-Type": "application/json",
          },
        }

        try {
          const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({email, password})
              //body: '{"email":"gamergirl5001@gmail.com", "password":"delta123"}'
          };

          console.log(requestOptions);

          let data;
          
          return fetch(`${API_URL}${login_destination}`, requestOptions)
              .then(response => response.json())
              .then(response => {
                return response
              });
              //.catch(error => console.log(error.toString()));
    
            // localStorage.setItem("authToken", data.token);
            //     history.push('/home');

            // console.log("at end");
            console.log("Data: ");
            console.log(data);
            
            return data; 

        }catch(error) {
          console.log("error occurred when trying to log in " + error);
          setError("Error occured");
          return failure({ error: 500, message: 'Username or Password Incorrect' });
        }
    };   

    return doLogin();
  };

  const getAuthenticationToken = () => 'successful_fake_token';

  export const getUsers = (shouldSucceed = true) => {
  const token = getAuthenticationToken();

  if (!shouldSucceed) {
    return failure({ error: 401, message: 'Invalid Request' });
  }

  return success({
    users: [
      {
        email: 'test@test.ca',
      },
      {
        email: 'test2@test.ca',
      },
    ],
  });

}