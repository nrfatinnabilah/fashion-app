import axios from "../api/axios";

export const login = (data) => {
  return axios.post("/auth/login", data);
};

export const register = (data) => {
  return axios.post("/auth/register", data);
};

export const logout = () => {
  localStorage.removeItem("token");
};
