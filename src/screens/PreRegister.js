import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  Logo,
  SignArea,
  LoginText,
  LoginLink,
} from "../styles/preRegister";
import { ButtonText, RegularButton } from "../styles/common";
import pig from './../../assets/pig.png'

export default function PreRegisterScreen() {
  const { navigate } = useNavigation()

  return (
    <Container>
      <Logo source={pig} />

      <RegularButton>
        <ButtonText>Criar sua conta</ButtonText>
      </RegularButton>
      <SignArea>
        <LoginText>Já possui uma conta? </LoginText>
        <TouchableOpacity onPress={() => {
          navigate('Login')
        }} >
          <LoginLink>Entrar</LoginLink>
        </TouchableOpacity>
      </SignArea>
    </Container>
  )
}