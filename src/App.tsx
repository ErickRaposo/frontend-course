import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Course } from "./pages/Course";
import { useContext } from "react";
import { AuthContext } from "./context/auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Course />
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
