import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Container, Email, Info, Password, Title } from "../styles/register";
import { useNavigation } from "@react-navigation/native";

export default function RegisterScreen() {
  const { navigate } = useNavigation()

  const [emails, setEmails] = useState([
    { email: 'teste@mailinator.com', senha: '123456' },
    { email: 'usuario@mailinator.com', senha: '12345678' },
    { email: 'admin@mailinator.com', senha: 'qwert123' },
  ])


  return (
    <Container>
      <Title>Para logar no aplicativo você pode utilizar uma dessas contas:</Title>
      {emails.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => {
          navigate('Login', {
            email: item.email,
            senha: item.senha
          })
        }}>
          <Info>
            <Email>Email: {item.email}</Email>
            <Password>Password: {item.senha}</Password>
          </Info>
        </TouchableOpacity>
      ))}
    </Container>
  )
}