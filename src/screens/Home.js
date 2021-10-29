import React, { useState, useEffect } from "react";
import { Text, View, ActivityIndicator, StyleSheet, StatusBar, Dimensions } from "react-native";

import axios from "axios";
import { urls } from './../services/urls'
import {
  Card,
  Container,
  Data,
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

  return (
    <Container contentContainerStyle={{ alignItems: 'center' }}>
      {isLoading ? (
        <View style={{ justifyContent: 'center', height: height / 1.5 }}>
          <ActivityIndicator size="large" color="#000" />
        </View>
      ) : (
        <>
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
          {console.log(isPaginating)}

          {isPaginating ? (
            <ActivityIndicator color="#000" size="large" />
          ) : (
            <PaginationButton onPress={() => handlePagination()}>
              <TitleButton>Ver mais</TitleButton>
            </PaginationButton>
          )}
        </>
      )}
    </Container>


  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});