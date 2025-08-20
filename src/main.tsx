import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AuthProvider } from "./context/AuthProvider.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "./components/pages/LoginPage.tsx";
import { RegisterPage } from "./components/pages/RegisterPage.tsx";
import { LandingPage } from "./components/pages/LandingPage.tsx"; // Tu página con los planes
import { DashboardPage } from "./components/pages/DashboardPage.tsx";
import { ProtectedRoute } from "./components/ProtectedRoute.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      {
        element: <ProtectedRoute />,
        children: [{ path: "dashboard", element: <DashboardPage /> }],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
