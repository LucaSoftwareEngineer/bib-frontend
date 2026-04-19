import { createBrowserRouter, RouterProvider } from "react-router";
import LoginComponent from "./components/LoginComponent/LoginComponent.tsx";
import RegisterComponent from "./components/RegisterComponent/RegisterComponent.tsx";
import DashboardComponent from "./components/DashboardComponent/DashboardComponent.tsx";
import ElencoLibriComponent from "./components/ElencoLibriComponent/ElencoLibriComponent.tsx";

const router = createBrowserRouter([
  {path: "/", element: <LoginComponent />},
  {path: "/register", element: <RegisterComponent />},
  {path: "/dashboard", element: <DashboardComponent />},
  {path: "/libri", element: <ElencoLibriComponent />}
]);

export default function App() {

  return (
    <>
      <RouterProvider router={router}>
      </RouterProvider>
    </>
  );
}
