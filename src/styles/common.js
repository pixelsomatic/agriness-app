import styled from "styled-components";
import { Dimensions } from "react-native";

export const RegularButton = styled.TouchableOpacity`
  background-color: #000;
  border-radius: 50px;
  padding: 15px 0 15px 0;
  width: 250px;
  align-items: center;
`
export const ButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`
export const Container = styled.View`
  padding: 20% 0 0 0;
  align-items: center;
`
export const Input = styled.TextInput`
  border-radius: 50px;
  background-color: #fff;
  width: 90%;
  font-size: 16px;
  padding: 10px 0 10px 20px;
`
export const Fields = styled.View`
  margin-bottom: 30px;
  width: ${Dimensions.get('screen').width}px;
  align-items: center;
`
export const Label = styled.Text`
  font-size: 18px;
  font-weight: bold;
  align-self: flex-start;
  margin-left: 10%;
  margin-bottom: 10px;
`
export const EnterArea = styled.View`
  margin-top: 30px;
`