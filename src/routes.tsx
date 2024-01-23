import * as Pages from "./pages";
import { useSelector } from "react-redux";
import { selectUser } from "./features/auth/authSlice";
import { Navigate } from "react-router-dom";

const Path = {
  employees: "/",
  employeeDetail: "/employees",
  employeesAdd: "/employees/add",
  employeesEdit: "/employees/edit",
  status: "/status",
  login: "/login",
  register: "/register",
} as const;

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const user = useSelector(selectUser);
  return user ? children : <Navigate to={Path.login} />;
};

export const publicRoutes = [
  {
    path: Path.login,
    element: <Pages.Login />,
  },
  {
    path: Path.register,
    element: <Pages.Register />,
  },
];

export const privateRoutes = [
  {
    path: Path.employeeDetail + "/:id",
    element: (
      <PrivateRoute>
        <Pages.EmployeeDetail />
      </PrivateRoute>
    ),
  },
  {
    path: Path.employees,
    element: (
      <PrivateRoute>
        <Pages.Employees />
      </PrivateRoute>
    ),
  },

  {
    path: Path.employeesAdd,
    element: (
      <PrivateRoute>
        <Pages.AddEmployee />
      </PrivateRoute>
    ),
  },
  {
    path: Path.employeesEdit + "/:id",
    element: (
      <PrivateRoute>
        <Pages.EditEmployee />
      </PrivateRoute>
    ),
  },
  {
    path: Path.status + "/:status",
    element: (
      <PrivateRoute>
        <Pages.Status />
      </PrivateRoute>
    ),
  },
];

export default Path;
