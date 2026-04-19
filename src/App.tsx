import { createBrowserRouter, RouterProvider } from "react-router";
import LoginComponent from "./components/LoginComponent/LoginComponent.tsx";

const router = createBrowserRouter([
  {path: "/", element: <LoginComponent />},
]);

export default function App() {

  return (
    <>
      <RouterProvider router={router}>
      </RouterProvider>
    </>
  );
}
