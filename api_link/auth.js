import React, { useState, createContext } from 'react';
import axios from 'axios';



// import * as firebase from 'firebase';

// import { loginRequest } from './authentication.service';

// export const AuthenticationContext = createContext();

// export const auth = ({children}) => 
// {
//   const [user, setUser] = useState(null);
//   const [error, setError] = useState(null);

  const mockSuccess = (value) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(value), 2000);
    });
  };
  
  const mockFailure = (value) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => reject(value), 2000);
    });
  };

  // login function
  export const login = (email, password, shouldSucceed = true) => 
  {
    console.log(email, password);
  
    if (!shouldSucceed) {
      return mockFailure({ error: 500, message: 'Something went wrong!' });
    }
  
    return mockSuccess({ auth_token: 'successful_fake_token' });
  };

  const getAuthenticationToken = () => 'successful_fake_token';

  export const getUsers = (shouldSucceed = true) => {
  const token = getAuthenticationToken();

  if (!shouldSucceed) {
    return mockFailure({ error: 401, message: 'Invalid Request' });
  }

  return mockSuccess({
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