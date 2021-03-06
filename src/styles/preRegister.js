import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.View`
  padding: 50% 0 0 0;
  align-items: center;
`
export const Logo = styled.Image`
  width: 150px;
  height: 150px;
  margin-bottom: 85%;
`
export const SignArea = styled.View`
  flex-direction: row;
  margin-top: 20px;
`
export const LoginText = styled.Text`
  font-size: 18px;
  font-weight: bold;
`
export const LoginLink = styled(LoginText)`
color: #365e7d;
`