import { api } from "./api";
import {
  HTTPMethods,
  ResponseLoginData,
  LoginUserData,
  UserData,
} from "./types";

enum ENDPOINTS {
  LOGIN = "/user/login",
  REGISTER = "/user/register",
  CURRENT = "/user/current",
}

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<ResponseLoginData, LoginUserData>({
      query: (userData) => ({
        url: ENDPOINTS.LOGIN,
        method: HTTPMethods.POST,
        body: userData,
      }),
    }),
    register: builder.mutation<ResponseLoginData, UserData>({
      query: (userData) => ({
        url: ENDPOINTS.REGISTER,
        body: userData,
        method: HTTPMethods.POST,
      }),
    }),
    current: builder.query<ResponseLoginData, void>({
      query: () => ({
        url: ENDPOINTS.CURRENT,
        method: HTTPMethods.GET,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useCurrentQuery } =
  authApi;

export const {
  endpoints: { login, register, current },
} = authApi;
