import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import routes from "./path";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import * as Pages from "./pages";
import { ConfigProvider, theme } from "antd";
const container = document.getElementById("root")!;
const root = createRoot(container);
const router = createBrowserRouter([
  {
    path: routes.home,
    element: <Pages.Home />,
  },
  {
    path: routes.login,
    element: <Pages.Login />,
  },
  {
    path: routes.register,
    element: <Pages.Register />,
  },
  {
    path: routes.employees,
    element: <Pages.Employees />,
  },
  {
    path: routes.employeesAdd,
    element: <h1>Employees add</h1>,
  },
  {
    path: routes.employeesDelete,
    element: <h1>Employees delete</h1>,
  },
  {
    path: routes.employeesEdit,
    element: <h1>Employees edit</h1>,
  },
  {
    path: routes.status,
    element: <Pages.Status />,
  },
]);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
        }}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
);
