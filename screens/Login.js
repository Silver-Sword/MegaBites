import React, {  useState, useContext } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// api stuff
import {login} from '../api_link/auth.js'
import '../global.js'

// Interactive Components
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import { NavigationContainer } from '@react-navigation/native';
import { getRecipesHome } from '../api_link/getRecipes.js';
import NavBar from '../components/NavBar.js';
import CustomToolbar from '../components/assets/CustomToolbar.js';

// import { MenuStack} from '../components/MenuBar'

// const LoginSchema = Yup.object().shape({
//   email: Yup.string().email('Invalid email').required('Required'),
//   password: Yup.string()
//     .min(2, 'Too Short!')
//     .max(10, 'Too Long!')
//     .required('Required')
// });

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [token, setToken] = useState('');
  // const { onLogin, isLoading, error } = useContext(AuthenticationContext);

  const [errorMessage, setErrorMessage] = useState('');

  const loginUser = () => {
    setErrorMessage('');
    console.log("email is " + email + " password is " + password);
    login('gamergirl5001@gmail.com', 'happytest', true)  // currently on definite success
      .then((response) => {
        console.log(response);

        if(response.success)
        {
          global.user_token = response.token;
          getRecipesHome()
            .then((response) => {
              global.home_recipes = response;
              console.log(global.home_recipes[0]);
              navigation.navigate('Home');
            });
        }

        else
        {
          setErrorMessage(response.error);
        }

      })
      .catch((err) => setErrorMessage(err.message));

    console.log("login function successful");
  };

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched
  } = useFormik({
    // validationSchema: LoginSchema,
    // initialValues: { email: '', password: '' },
    // onSubmit: values => loginUser
      //navigation.navigate('Home', {name: values.email}) 
      //  alert(`Email: ${values.email}, Password: ${values.password}`)
  });

  // const password = useRef(null);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* <NavBar/> */}
      {/* <CustomToolbar/> */}
      <Image 
          style={login_styles.image} 
          source={require('../components/imgs/MegaBitesLogo_transparent-large.png')} 
          />

      <View style={login_styles.login_box}>
        <TextInput
          placeholderTextColor='#555555'
          // icon='mail'
          placeholder='Enter your email'
          autoCapitalize='none'
          autoCompleteType='email'
          keyboardType='email-address'
          keyboardAppearance='dark'
          returnKeyType='next'
          returnKeyLabel='next'
          onChangeText={(userEmail) => setEmail(userEmail)}
          onBlur={handleBlur('email')}
          error={errors.email}
          touched={touched.email}
        />
      </View>
      <View style={login_styles.login_box}>
        <TextInput
          placeholderTextColor='#555555'
          icon='key'
          placeholder='Enter your password'
          secureTextEntry
          autoCompleteType='password'
          autoCapitalize='none'
          keyboardAppearance='dark'
          returnKeyType='go'
          returnKeyLabel='go'
          onChangeText={(userPass) => setPassword(userPass)}
          onBlur={handleBlur('password')}
          error={errors.password}
          touched={touched.password}
          onSubmitEditing={() => handleSubmit()}
        />
      </View>
      <Button label='Login'
          // onPress={handleSubmit}
          //onPress = {() => navigation.navigate('Home')}
          onPress = {() => loginUser(email, password)}
           />

      {errorMessage ? <Text style={{marginTop: 30}}>{errorMessage}</Text> : null}
      
      {/* <NavBar/> */}
    </View>

    
  );
}

const login_styles = StyleSheet.create({
  image: 
  {
    marginBottom: 30,
    width: "50%",
    height: "25%",
    resizeMode:'contain',
    alignItems: "center",
  },

  login_box: 
  {
    // paddingHorizontal: 32, 
    // marginBottom: 16, 
    backgroundColor: "#ffe1a8",
    borderRadius: 20,
    width: "70%",
    height: 45,
    marginBottom: 20,
    border: 'none',
    alignItems: "center",
    
  },

});

export default Login;