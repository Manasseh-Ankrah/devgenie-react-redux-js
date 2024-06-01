import { createBrowserRouter } from "react-router-dom";
import { Header } from "../components";
import { Home, About, NotFound } from "../pages/";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default router;
