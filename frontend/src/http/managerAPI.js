import { $authHost, $host } from "./index";

export const createCategory = async (category) => {
  const response = await $authHost.post('api/categories/', category);
  return response;
}

export const fetchCategories = async () => {
  const {data} = await $authHost.get('api/categories/');
  return data;
}

export const createPasswords = async (name, login, password, comment, category) => {
  const response = await $authHost.post('api/passwords/', {name, login, password, comment, category});
  return response;
}

export const fetchOnePassword = async (id) => {
  const {data} = await $authHost.get('api/passwords/' + id);
  return data;
}

export const fetchPasswords = async () => {
  const {data} = await $authHost.get('api/passwords/');
  return data;
}

export const fetchPasswordsByCategory = async (categoryId) => {
  const {data} = await $authHost.get('api/categories/' + categoryId + '/get_passwords/');
  return data;
}

export const deletePassword = async (id) => {
  const {data} = await $authHost.delete('api/passwords/' + id);
  return data;
}

export const updatePassword = async (id, name, login, password, comment, category) => {
  console.log(name, login, password, comment, category)
  const {data} = await $authHost.put('api/passwords/' + id + '/', {name, login, password, comment, category});
  return data;
}