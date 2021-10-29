import React, { useState } from "react";
import { Alert } from "react-native";
import axios from "axios";
import { urls } from "../services/urls";
import { useNavigation, StackActions } from "@react-navigation/native";
import { Container, EditArea, Grid, Info, Input, SubTitle, Title } from "../styles/animalProfile";
import { RegularButton, ButtonText } from "../styles/common";


export default function EditAnimalProfile({ route }) {
  const { dispatch } = useNavigation()

  const [name, setName] = useState(route.params.details.nome)
  const [status, setStatus] = useState(route.params.details.statusAnimal)
  const [id, setId] = useState(route.params.details.id)
  const [allData, setAllData] = useState(route.params.details)

  async function updateProfileAnimal(id) {
    try {
      const url = urls.farm + '/' + id
      const response = await axios.put(url, {
        id: route.params.details.id,
        nome: name,
        tipoAnimal: route.params.details.tipoAnimal,
        statusAnimal: status.toString(),
        localizacao: route.params.details.localizacao,
        dataNascimento: route.params.details.dataNascimento,
        entradaPlantel: route.params.details.entradaPlantel,
        pesoCompra: route.params.details.pesoCompra,
        raca: route.params.details.raca,
        codigoRastreamento: route.params.details.codigoRastreamento,
        faseProducao: {
          sigla: route.params.details.faseProducao.sigla,
          descricao: route.params.details.faseProducao.descricao,
        },
        tipoGranja: {
          sigla: route.params.details.tipoGranja.sigla,
          descricao: route.params.details.tipoGranja.descricao,
        }
      })

      console.log(response.data)

      const pushAction = StackActions.push('Home')

      Alert.alert(
        "Atualizado com sucesso!",
        "",
        [
          {
            text: 'Ok', onPress: () => dispatch(pushAction)
          }
        ]
      )

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Grid>
      <Container>
        <Title>Campos Editáveis</Title>
        <Info>
          <SubTitle>Nome: </SubTitle>
          <Input value={name} autoCapitalize="characters" onChangeText={(text) => setName(text)} />
        </Info>
        <Info>
          <SubTitle>Status: </SubTitle>
          <Input value={status.toString()} keyboardType="numeric" onChangeText={(text) => setStatus(text)} />
        </Info>
      </Container>
      <EditArea>
        <RegularButton onPress={() => {
          updateProfileAnimal(id)
        }}>
          <ButtonText>Salvar</ButtonText>
        </RegularButton>
      </EditArea>
    </Grid>
  )
}