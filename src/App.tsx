import { createBrowserRouter, RouterProvider, Navigate } from "react-router";
import SecureLS from "secure-ls";
import LoginComponent from "./components/LoginComponent/LoginComponent.tsx";
import RegisterComponent from "./components/RegisterComponent/RegisterComponent.tsx";
import DashboardComponent from "./components/DashboardComponent/DashboardComponent.tsx";
import ElencoLibriComponent from "./components/ElencoLibriComponent/ElencoLibriComponent.tsx";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const ls = new SecureLS();
  const rawData = ls.get("details");

  if (!rawData) {
    return <Navigate to="/" replace />;
  }

  try {
    const details = JSON.parse(rawData);
    if (!details.token || details.token === "") {
      return <Navigate to="/" replace />;
    }
    return <>{children}</>;
  } catch (e) {
    return <Navigate to="/" replace />;
  }
};

const router = createBrowserRouter([
  { path: "/", element: <LoginComponent /> },
  { path: "/register", element: <RegisterComponent /> },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardComponent />
      </ProtectedRoute>
    ),
  },
  {
    path: "/libri",
    element: (
      <ProtectedRoute>
        <ElencoLibriComponent />
      </ProtectedRoute>
    ),
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}