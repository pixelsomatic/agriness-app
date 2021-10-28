import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
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
  const { navigate } = useNavigation()

  return (
    <Container>
      <Logo source={cow} />

      <SignArea>
        <LoginText>Já possui uma conta? </LoginText>
        <TouchableOpacity onPress={() => {
          navigate('Login')
        }} >
          <LoginLink>Entrar</LoginLink>
        </TouchableOpacity>
      </SignArea>
      <RegisterButton>
        <TextButton>Criar sua conta</TextButton>
      </RegisterButton>
    </Container>
  )
}