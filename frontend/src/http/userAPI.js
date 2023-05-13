import { $authHost, $host } from "./index";

export const registration = async (username, email, password) => {
  const response = await $host.post('register/', {username, email, password});
  return response;
}

export const login = async (username, password) => {
  const {data} = await $host.post('login/', {username, password});
  return data;
}