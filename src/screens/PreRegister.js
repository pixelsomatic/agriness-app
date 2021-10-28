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
import { ButtonText, RegularButton } from "../styles/common";

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
      <RegularButton>
        <ButtonText>Criar sua conta</ButtonText>
      </RegularButton>
    </Container>
  )
}