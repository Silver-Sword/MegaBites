import React, { useState, useEffect } from 'react';
import { Redirect } from "react-router-dom";
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import './Login.css';

import {success, failure} from '../api_link/auth.js'

const LoginAPI = () =>
{    
    const history = useHistory();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");

    // was supposed to say if the person has a token dont need to log in again
    
    const doLogin = async event =>     
    {   
        event.preventDefault();

        const config = {
			header: {
				"Content-Type": "application/json",
			},
		}

		try {
			const {data} = await axios.post("/api/auth/login", {email, password},
			config);

		    localStorage.setItem("authToken", data.token);
            history.push('/home');
            return success({ auth_token: data.token }); 
			
		}catch(error) {
			setError("Error occured");
            return failure({ error: 500, message: 'Username or Password Incorrect' });
		}

        
    };   

};

export default LoginAPI;
