import React, { useState } from "react";
import { Container, Data, Grid, Info, SubTitle, Title, EditArea } from "../styles/animalProfile";
import { RegularButton, ButtonText } from "../styles/common";
import { useNavigation, StackActions } from "@react-navigation/native";


export default function AnimalProfile({ route }) {
  const [personalData, setPersonalData] = useState(route.params.info)
  const { dispatch } = useNavigation()

  function translate(text) {
    let response = ''
    text == 'POULTRY' ? response = 'AVES' : text == 'SWINE' ? response = 'SUÍNOS' : response = text
    return response
  }

  function formatDate(date) {
    return date.split('-').reverse().join('/')
  }

  return (
    <Grid>
      <Container>
        <Title>Detalhes</Title>
        <Info>
          <SubTitle>Nome: </SubTitle>
          <Data> {personalData.nome} </Data>
        </Info>
        <Info>
          <SubTitle>Status: </SubTitle>
          <Data> {personalData.statusAnimal} </Data>
        </Info>
        <Info>
          <SubTitle>Tipo: </SubTitle>
          <Data> {translate(personalData.tipoAnimal)} </Data>
        </Info>
      </Container>
      <Container>
        <Title>Ficha Técnica</Title>
        <Info>
          <SubTitle>Localização: </SubTitle>
          <Data> {personalData.localizacao} </Data>
        </Info>
        <Info>
          <SubTitle>Entrada: </SubTitle>
          <Data> {formatDate(personalData.entradaPlantel)} </Data>
        </Info>
        <Info>
          <SubTitle>Rastreamento: </SubTitle>
          <Data>{personalData.codigoRastreamento} </Data>
        </Info>
      </Container>
      <EditArea>
        <RegularButton onPress={() => {
          const pushAction = StackActions.push('Editar Perfil de Animal', { details: personalData })
          dispatch(pushAction)
        }}>
          <ButtonText>Editar</ButtonText>
        </RegularButton>
      </EditArea>
    </Grid>
  )
}