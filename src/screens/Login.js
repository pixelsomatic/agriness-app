import React from "react";
import { Container, Fields, Input, Label, EnterArea, RegularButton, ButtonText } from "../styles/common";

export default function LoginScreen() {
  return (
    <Container>
      <Fields>
        <Label>E-mail</Label>
        <Input placeholder={'Seu e-mail'} autoCapitalize={'none'} keyboardType={'email-address'} />
      </Fields>
      <Fields>
        <Label>Senha</Label>
        <Input placeholder={'Sua senha'} autoCapitalize={'none'} secureTextEntry={true} keyboardType={'default'} />
      </Fields>
      <EnterArea>
        <RegularButton>
          <ButtonText>Entrar</ButtonText>
        </RegularButton>
      </EnterArea>
    </Container>
  )
}