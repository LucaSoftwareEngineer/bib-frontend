import { createBrowserRouter, RouterProvider } from "react-router";
import LoginComponent from "./components/LoginComponent/LoginComponent.tsx";
import RegisterComponent from "./components/RegisterComponent/RegisterComponent.tsx";

const router = createBrowserRouter([
  {path: "/", element: <LoginComponent />},
  {path: "/register", element: <RegisterComponent />}
]);

export default function App() {

  return (
    <>
      <RouterProvider router={router}>
      </RouterProvider>
    </>
  );
}
