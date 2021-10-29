import React, { useState, useContext } from "react";
import axios from "axios";
import { ToastAndroid } from "react-native";
/**
 * =========
 * Styles
 * =========
 */
import { Container, Fields, Input, Label, EnterArea, RegularButton, ButtonText } from "../styles/common";

/**
 * =========
 * Services
 * =========
 */
import { urls } from "../services/urls";

/**
* =========
* Library
* =========
*/
import { Formik } from 'formik'
import * as yup from 'yup'
import AsyncStorage from '@react-native-async-storage/async-storage';
/**
* =========
* Contexts
* =========
*/
import AuthContext from './../contexts/auth'

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Email inválido')
    .required('Insira seu email para efetuar o login'),
  password: yup
    .string()
    .min(6, ({ min }) => `Senha precisa ter no mínimo ${min} caracteres`)
    .required('Insira sua senha para efetuar o login'),
})


export default function LoginScreen() {
  const { signIn } = useContext(AuthContext)

  const showToast = (text) => {
    ToastAndroid.showWithGravity(
      text,
      ToastAndroid.LONG,
      ToastAndroid.CENTER
    );
  }

  async function handleSign(values) {
    const response = await signIn(values.email, values.password)
    if (response == 404) {
      showToast('Email ou senha incorretos')
    }
    return response
  }

  return (
    <Container>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{ email: '', password: '' }}
        onSubmit={values => {
          handleSign(values)
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
          <>
            <Fields>
              <Label>E-mail</Label>
              <Input
                name="email"
                placeholder={'Seu e-mail'}
                autoCapitalize={'none'}
                keyboardType={'email-address'}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
            </Fields>
            <Fields>
              <Label>Senha</Label>
              <Input
                name="password"
                placeholder={'Sua senha'}
                autoCapitalize={'none'}
                secureTextEntry
                keyboardType={'default'}
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
              />
            </Fields>
            <EnterArea>
              <RegularButton onPress={() => {
                !values.email.length || !values.password.length ? showToast('Por favor preencha todos os campos') :
                  !isValid ? showToast('Login inválido') : handleSubmit()
              }}>
                <ButtonText>Entrar</ButtonText>
              </RegularButton>
            </EnterArea>
          </>
        )}
      </Formik>
    </Container>
  )
}