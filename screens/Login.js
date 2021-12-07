import React, { useRef } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import TextInput from '../components/TextInput';
import Button from '../components/Button';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required')
});

export default function Login() {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched
  } = useFormik({
    validationSchema: LoginSchema,
    initialValues: { email: '', password: '' },
    onSubmit: values =>
      alert(`Email: ${values.email}, Password: ${values.password}`)
  });

  const password = useRef(null);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Image style={login_styles.image} source={require('../components/imgs/MegaBitesLogo_transparent-large.png')} />

      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
        <TextInput
          icon='mail'
          placeholder='Enter your email'
          autoCapitalize='none'
          autoCompleteType='email'
          keyboardType='email-address'
          keyboardAppearance='dark'
          returnKeyType='next'
          returnKeyLabel='next'
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          error={errors.email}
          touched={touched.email}
          onSubmitEditing={() => password.current?.focus()}
        />
      </View>
      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
        <TextInput
          ref={password}
          icon='key'
          placeholder='Enter your password'
          secureTextEntry
          autoCompleteType='password'
          autoCapitalize='none'
          keyboardAppearance='dark'
          returnKeyType='go'
          returnKeyLabel='go'
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          error={errors.password}
          touched={touched.password}
          onSubmitEditing={() => handleSubmit()}
        />
      </View>
      <Button label='Login' onPress={handleSubmit} />
    </View>
  );
}

const login_styles = StyleSheet.create({
  image: {
    marginBottom: 30,
    width: "50%",
    height: "25%",
    resizeMode:'contain',
    alignItems: "center",
  }
});