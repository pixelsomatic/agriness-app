import React, { useState } from "react";
import axios from "axios";
import { Container, Fields, Input, Label, EnterArea, RegularButton, ButtonText } from "../styles/common";
import { urls } from "../services/urls";

export default function LoginScreen() {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  function Login() {
    const options = {
      method: 'POST',
      url: urls.login,
      headers: { 'Content-Type': 'application/json' },
      data: { email: email, password: pass }
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }

  return (
    <Container>
      <Fields>
        <Label>E-mail</Label>
        <Input
          placeholder={'Seu e-mail'}
          autoCapitalize={'none'}
          keyboardType={'email-address'}
          onChangeText={(text) => setEmail(text)}
        />
      </Fields>
      <Fields>
        <Label>Senha</Label>
        <Input
          placeholder={'Sua senha'}
          autoCapitalize={'none'}
          secureTextEntry={true}
          keyboardType={'default'}
          onChangeText={(text) => setPass(text)}
        />
      </Fields>
      <EnterArea>
        <RegularButton onPress={() => Login()} >
          <ButtonText>Entrar</ButtonText>
        </RegularButton>
      </EnterArea>
    </Container>
  )
}