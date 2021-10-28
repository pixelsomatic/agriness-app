import React from "react";
import { TouchableOpacity } from "react-native";
import {
  Container,
  Logo,
  SignArea,
  LoginText,
  LoginLink,
  RegisterButton,
  TextButton
} from "../styles/preRegister";
import cow from './../../assets/cow.png'

export default function PreRegisterScreen() {
  return (
    <Container>
      <Logo source={cow} />

      <SignArea>
        <LoginText>Já possui uma conta? </LoginText>
        <TouchableOpacity>
          <LoginLink>Entrar</LoginLink>
        </TouchableOpacity>
      </SignArea>
      <RegisterButton>
        <TextButton>Criar sua conta</TextButton>
      </RegisterButton>
    </Container>
  )
}