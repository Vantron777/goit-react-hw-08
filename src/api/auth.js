import { instance } from "../axios.js";

export const signupUser = async (userInfo) => {
  const data = await instance.post("/users/signup", userInfo);
  return data;
};

export const loginUser = async (userInfo) => {
  const data = await instance.post("/users/login", userInfo);
  return data;
};

export const logOutUser = async (userInfo) => {
  await instance.post("/users/logOut", userInfo);
};

export const refreshUser = async () => {
  const data = await instance.get("/users/current");
  return data;
};
