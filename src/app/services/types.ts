export interface EmployeeData {
  id: string;
  firstName: string;
  lastName: string;
  age: string;
  address: string;
  userId: string;
}

export interface UserData {
  id: string;
  email: string;
  password: string;
  name: string;
}
export type LoginUserData = Omit<UserData, "name">;
export type RegisterUserData = Omit<UserData, "id">;
export type ResponseLoginData = UserData & { token: string };
export enum HTTPMethods {
  GET = "GET",
  POST = "POST",
  DELETE = "DELETE",
  PUT = "PUT",
}
