import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import { ConfigProvider, theme } from "antd";
import AuthProvider from "./features/auth/AuthProvider";
import { privateRoutes, publicRoutes } from "./routes";
const container = document.getElementById("root")!;
const root = createRoot(container);

const router = createBrowserRouter([...publicRoutes, ...privateRoutes]);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
        }}
      >
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
);
