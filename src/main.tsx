import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AuthProvider } from "./context/AuthProvider.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthPage } from "./components/pages/AuthPage.tsx";
import { LandingPage } from "./components/pages/LandingPage.tsx"; // Tu página con los planes
import { DashboardPage } from "./components/pages/DashboardPage.tsx";
import { ProtectedRoute } from "./components/ProtectedRoute.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx"; // Importa el ThemeProvider

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "auth", element: <AuthPage /> },
      {
        element: <ProtectedRoute />,
        children: [{ path: "dashboard", element: <DashboardPage /> }],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
