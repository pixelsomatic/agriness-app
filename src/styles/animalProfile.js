import styled from "styled-components";

export const Grid = styled.View`
  margin-top: 15%;
`

export const Container = styled.View`
  border-radius: 20px;
  box-shadow: 20px 10px 20px rgba(0,0,0,0.7);
  background-color: #fff;
  margin: 10px 20px;
  padding: 30px 20px;
`
export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
`
export const SubTitle = styled(Title)`
  font-size: 20px;
`
export const Info = styled.View`
  margin-top: 10px;
  flex-direction: row;
  flex-wrap: wrap;
`
export const Data = styled.Text`
  font-size: 20px;
`

export const EditArea = styled.View`
  margin-top: 40px;
  align-items: center;
`