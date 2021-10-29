import styled from "styled-components";

export const Container = styled.ScrollView`
  flex: 1;
`
export const Card = styled.View`
  width: 80%;
  padding: 20px;
  background-color: #f9c2ff;
  margin: 15px 0;
  border-radius: 10px;
`
export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`
export const Data = styled.Text`
  font-size: 18px;
`
export const Info = styled.View`
  flex-direction: row;
`
export const PaginationButton = styled.TouchableOpacity`
  border-radius: 30px;
  background-color: #000;
  padding: 15px 20px;
  width: 80%;
  align-items: center;
  margin-bottom: 20px;
`
export const TitleButton = styled(Title)`
  color: #fff;
  font-size: 20px;
`
export const Filter = styled.TextInput`
  border-radius: 20px;
  width: 80%;
  background-color: #fff;
  font-size: 18px;
  height: 50px;
  border-color: lightgrey;
  margin: 20px 0;
  padding-left: 10px;
  color: rgba(0,0,0,0.5);
`