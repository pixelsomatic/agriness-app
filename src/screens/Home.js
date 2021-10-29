import React, { useState, useEffect } from "react";
import { View, ActivityIndicator, Dimensions } from "react-native";

import axios from "axios";
import { urls } from './../services/urls'
import {
  Card,
  Container,
  Data,
  Filter,
  Header,
  Info,
  PaginationButton,
  Title,
  TitleButton,
} from "../styles/home";

export default function Home() {
  const [allAnimals, setAllAnimals] = useState([])
  const [filteredList, setFilteredList] = useState([])
  const [beginListing, setBeginListing] = useState(10)
  const [isLoading, setisLoading] = useState(false)
  const [isPaginating, setisPaginating] = useState(false)
  const height = Dimensions.get('screen').height

  useEffect(() => {
    setisLoading(true)
    axios.get(urls.farm).then((res) => {
      setAllAnimals(res.data)
      setFilteredList(res.data)
      setisLoading(false)
    }).catch((err) => console.error(err))
  }, [])

  useEffect(() => {
    setBeginListing(10)
  }, [isLoading])

  function handlePagination() {
    setisPaginating(true)
    setTimeout(() => {
      setBeginListing(beginListing + 10)
      setisPaginating(false)
    }, 2000);
  }

  const setStatusFilter = text => {
    const newList = allAnimals.filter(e => {
      const location = e.localizacao.toLowerCase()
      const myText = text.toLowerCase()

      text.length ? setBeginListing(allAnimals.length) : setBeginListing(10)

      return location.indexOf(myText) > -1;
    })

    setFilteredList(newList)
  }

  return (
    <Container contentContainerStyle={{ alignItems: 'center' }}>
      {isLoading ? (
        <View style={{ justifyContent: 'center', height: height / 1.5 }}>
          <ActivityIndicator size="large" color="#000" />
        </View>
      ) : (
        <>
          <Filter placeholder={'Pesquise por localização'} autoCapitalize="none" onChangeText={(text) => setStatusFilter(text)} />

          {filteredList.slice(0, beginListing).map((item, index) => (
            <Card key={index}>
              <Info>
                <Title>Nome: </Title>
                <Data>{item.nome}</Data>
              </Info>
              <Info>
                <Title>Localização: </Title>
                <Data>{item.localizacao}</Data>
              </Info>
            </Card>
          ))}
          {isPaginating ? (
            <ActivityIndicator color="#000" size="large" />
          ) : (
            filteredList && filteredList.length ? (
              <PaginationButton onPress={() => handlePagination()}>
                <TitleButton>Ver mais</TitleButton>
              </PaginationButton>
            ) : (
              <Title>Não há resultados para essa busca!</Title>
            )
          )}
        </>
      )}
    </Container>


  )
}
