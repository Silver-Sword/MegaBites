import React, { useState, createContext } from 'react';
import axios from 'axios';

import { API_URL } from './secret/secrets.js';
import APIKit from './APIKit.js';
const {login_destination} = "api/auth/login";


// import * as firebase from 'firebase';

// import { loginRequest } from './authentication.service';

// export const AuthenticationContext = createContext();

// export const auth = ({children}) => 
// {

// const [user, setUser] = useState(null);
// const [error, setError] = useState(null);

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
    const doLogin = async event =>     
    {   
        event.preventDefault();

        const config = {
			header: {
				"Content-Type": "application/json",
			},
		}

		try {
			const {data} = axios.post(`${API_URL}${login_destination}`, {email, password}, config);


		    localStorage.setItem("authToken", data.token);
            history.push('/home');

        return success({ auth_token: data.token }); 
		}catch(error) {
			setError("Error occured");
      return failure({ error: 500, message: 'Username or Password Incorrect' });
		}

        
    };   


    // const config = {
    //   header: {
    //       "Content-Type": "application/json",
    //     },
		//   }


    //   APIKit.post(`${API_URL}${login_destination}`, {email, password})
    //   .then(onSuccess)
    //   .catch(onFailure);



      // try {
      //   console.log("got here")
      //   const {data} = axios.post(`${API_URL}${login_destination}`, {email, password},
      //   config);

      //     //localStorage.setItem("authToken", data.token);
      //         //history.push('/home');
      //   console.log("successfully found")
      //   return success({ auth_token: data.token }); 
        
      // }catch(error) {
      //   return failure({ error: 500, message: 'Username or Password Incorrect' });
      // }
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

  
// };


  // const doLogin = async event =>     
  //   {   
  //       event.preventDefault();

  //       const config = {
	// 		header: {
	// 			"Content-Type": "application/json",
	// 		},
	// 	}

	// 	try {
	// 		const {data} = await axios.post("https://sheltered-wildwood-67909.herokuapp.com/api/auth/login", {email, password},
	// 		config);

	// 	    localStorage.setItem("authToken", data.token);
  //           history.push('/home');

			
	// 	}catch(error) {
	// 		setError("Error occured");
	// 	}

        
  //   };   
}

// export const AuthenticationContextProvider = ({ children }) => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [user, setUser] = useState(null);
//   const [error, setError] = useState(null);

//   firebase.auth().onAuthStateChanged((usr) => {
//     if (usr) {
//       setUser(usr);
//       setIsLoading(false);
//     }
//   });

//   const onLogin = (email, password) => {
//     setIsLoading(true);
//     loginRequest(email, password)
//       .then((u) => {
//         setUser(u);
//         setIsLoading(false);
//       })
//       .catch((err) => {
//         setIsLoading(false);
//         setError(err.toString());
//       });
//   };

//   const onRegister = (email, password, repeatedPassword) => {
//     setIsLoading(true);
//     if (password !== repeatedPassword) {
//       setError('Error: Passwords do not match');
//       return;
//     }

//     firebase
//       .auth()
//       .createUserWithEmailAndPassword(email, password)
//       .then((u) => {
//         setUser(u);
//         setIsLoading(false);
//       })
//       .catch((err) => {
//         setIsLoading(false);
//         setError(err.toString());
//       });
//   };

//   const onLogout = () => {
//     setUser(null);
//     firebase.auth().signOut();
//   };

//   return (
//     <AuthenticationContext.Provider
//       value={{
//         isAuthenticated: !!user,
//         isLoading,
//         user,
//         error,
//         onLogin,
//         onRegister,
//         onLogout,
//       }}
//     >
//       {children}
//     </AuthenticationContext.Provider>
//   );
// };