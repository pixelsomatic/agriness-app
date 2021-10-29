import axios from "axios"
import { urls } from "./urls"

export function signIn(email, pass) {
  const user = { email: email, password: pass }

  const options = {
    method: 'POST',
    url: urls.login,
    headers: { 'Content-Type': 'application/json' },
    data: { email: email, password: pass }
  };

  axios.request(options).then(function (response) {
    console.log(response.data);
    return response.data;
  }).catch(function (error) {
    console.error(error);
    return error.response?.status;
  });
}