import React, { createContext, useState, useEffect } from "react"
import * as auth from '../services/auth'
import axios from "axios"
import { urls } from "../services/urls"
import AsyncStorage from "@react-native-async-storage/async-storage"

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  /**
   * ======
   * 
   * States
   * 
   * ======
   */
  const [token, setToken] = useState('')
  const [userData, setUserData] = useState({})
  const [isError, setIsError] = useState(false)
  const [loading, setLoading] = useState(true)

  /**
   * ======
   * 
   * Effects
   * 
   * ======
   */
  useEffect(() => {
    async function loadStorageLoginData() {
      const storagedToken = await AsyncStorage.getItem('@Agriness:token')

      if (storagedToken) {
        setToken(storagedToken)
      }
      setLoading(false)
    }

    loadStorageLoginData();
  }, [])

  // Realiza o refresh do token
  // useEffect(() => {
  //   AsyncStorage.multiGet(['@Agriness:email', '@Agriness:pass']).then((res) => {
  //     const user = { email: res[0][1], password: res[1][1] }

  //     axios.post(urls.login, user).then((res) => {
  //       setUserData(res.data.user)
  //       setToken(res.data.token)
  //     }).catch((err) => console.log('Home/Axios error =>', err))
  //   }).catch((err) => console.log('Home/Asynctorage error', err))
  // }, [])

  /**
   * ======
   * 
   * Functions
   * 
   * ======
   */
  async function signIn(email, password) {
    const response = await auth.signIn(email, password)
    if (response && response[0].refreshToken) {
      setUserData(response[1].user)
      setToken(response[0].refreshToken)

      const dataUser = [
        ['@Agriness:token', response[0].refreshToken],
        ['@Agriness:email', email],
        ['@Agriness:pass', password]
      ]
      await AsyncStorage.multiSet(dataUser)
    }
    return response
  }

  async function signOut() {
    let keys = ['@Agriness:token', '@Agriness:email', '@Agriness:pass'];
    await AsyncStorage.multiRemove(keys)
    setToken(null)
  }

  return (
    <AuthContext.Provider value={{
      signed: !!token,
      loading,
      isError,
      signIn,
      signOut,
      token,
      userData,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext