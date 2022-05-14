import axios from "axios";
import { AnyObject } from "yup/lib/object";
export const apiBaseUrl = "http://localhost:4000/api";

export default class UserService {
  static listUser = () => {
    return axios.get(`${apiBaseUrl}/users`).then((response: any) => response.data);
  };

  static createUser = (user: any) => {
    return axios.post(`${apiBaseUrl}/users`, user).then((response: any) => response.data);
  };

  static userById = (id: any) => {
    return axios.get(`${apiBaseUrl}/users/${id}`).then((response: any) => response.data);
  };

  static updateUser = (id: any, user: any) => {
    return axios.put(`${apiBaseUrl}/users/${id}`, user).then((response: any) => response.data);
  };

  static deleteUser = (id: any) => {
    return axios.delete(`${apiBaseUrl}/users/${id}`).then((response: any) => response.data);
  };
}
