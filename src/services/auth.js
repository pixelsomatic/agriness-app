import axios from "axios"
import { urls } from "./urls"

export async function signIn(email, pass) {
  var responseError = {}
  const user = { email: email, password: pass }

  try {
    const response = await axios.post(urls.user.login, user)
    return response
  } catch (error) {
    console.log('User ou senha incorretos -> ', error.message)
    error.message == 'Request failed with status code 400' ? (responseError.status = 400, responseError.message = error.response.data[0]) : responseError.status = 'Error'
    return responseError
  }
}