import { createSlice } from "@reduxjs/toolkit";
import { current, login, register } from "../../app/services/auth";
import { RootState } from "../../app/store";
import { ResponseLoginData } from "../../app/services/types";

interface IInitialState {
  user: ResponseLoginData | null;
  isAuthenticated: boolean;
}

const initialState: IInitialState = {
  user: null,
  isAuthenticated: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(login.matchFulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addMatcher(register.matchFulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addMatcher(current.matchFulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
      });
  },
});

export const { logout } = slice.actions;

// SELECTORS
export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;

export const selectUser = (state: RootState) => state.auth.user;

export default slice.reducer;
