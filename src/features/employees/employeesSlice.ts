import { createSlice } from "@reduxjs/toolkit";
import { EmployeeData } from "../../app/services/types";
import { getAllEmployees } from "../../app/services/employees";
import { RootState } from "../../app/store";

interface IInitialState {
  employees: EmployeeData[] | null;
}

const initialState: IInitialState = {
  employees: null,
};

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(getAllEmployees.matchFulfilled, (state, action) => {
      state.employees = action.payload;
    });
  },
});

export default employeesSlice.reducer;

// SELECTOR

export const selectEmployees = (state: RootState) => state.employees;
