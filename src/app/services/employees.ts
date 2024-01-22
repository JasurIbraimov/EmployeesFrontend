import { api } from "./api";
import { HTTPMethods, EmployeeData } from "./types";

enum ENDPOINTS {
  EMPLOYEES = "/employees",
}

export const employeeApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllEmployees: builder.query<EmployeeData[], void>({
      query: () => ({
        url: ENDPOINTS.EMPLOYEES,
        method: HTTPMethods.GET,
      }),
    }),
    getEmployee: builder.query<EmployeeData, string>({
      query: (id) => ({
        url: `${ENDPOINTS.EMPLOYEES}/${id}`,
        method: HTTPMethods.GET,
      }),
    }),
    editEmployee: builder.mutation<string, EmployeeData>({
      query: (employee) => ({
        url: `${ENDPOINTS.EMPLOYEES}/${employee.id}`,
        method: HTTPMethods.PUT,
      }),
    }),
    deleteEmployee: builder.mutation<string, string>({
      query: (id) => ({
        url: `${ENDPOINTS.EMPLOYEES}/${id}`,
        method: HTTPMethods.DELETE,
      }),
    }),
    createEmployee: builder.mutation<EmployeeData, EmployeeData>({
      query: (employee) => ({
        url: ENDPOINTS.EMPLOYEES,
        method: HTTPMethods.POST,
      }),
    }),
  }),
});

export const {
  useGetAllEmployeesQuery,
  useGetEmployeeQuery,
  useEditEmployeeMutation,
  useDeleteEmployeeMutation,
  useCreateEmployeeMutation,
} = employeeApi;

export const {
  endpoints: {
    getAllEmployees,
    getEmployee,
    editEmployee,
    deleteEmployee,
    createEmployee,
  },
} = employeeApi;
