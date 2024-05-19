import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  refreshUser,
  loginUser,
  logOutUser,
  signupUser,
} from "../../api/auth.js";
import { clearAuthHeader, setAuthHeader } from "../../axios.js";
export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      const { data } = await signupUser(user);
      setAuthHeader(data.token);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    const { data } = await loginUser(user);
    setAuthHeader(data.token);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const logOut = createAsyncThunk("auth/logOut", async (_, thunkAPI) => {
  try {
    await logOutUser();
    clearAuthHeader();
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const refresh = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (!persistedToken) return thunkAPI.rejectWithValue("Unable to fetch user");

  try {
    setAuthHeader(persistedToken);
    const { data } = await refreshUser();
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
