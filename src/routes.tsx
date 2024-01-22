import * as Pages from "./pages";
import { useSelector } from "react-redux";
import { selectUser } from "./features/auth/authSlice";
import { Navigate } from "react-router-dom";

const Path = {
  employees: "/",
  employeesAdd: "/employees/add",
  employeesDelete: "/employees/delete",
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
        <h1>Employees add</h1>
      </PrivateRoute>
    ),
  },
  {
    path: Path.employeesDelete,
    element: (
      <PrivateRoute>
        <h1>Employees delete</h1>
      </PrivateRoute>
    ),
  },
  {
    path: Path.employeesEdit,
    element: (
      <PrivateRoute>
        <h1>Employees edit</h1>
      </PrivateRoute>
    ),
  },
  {
    path: Path.status,
    element: (
      <PrivateRoute>
        <Pages.Status />
      </PrivateRoute>
    ),
  },
];

export default Path;
