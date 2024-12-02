import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllFood from "../Pages/AllFood/AllFood";
import Menu from "../Pages/Home/Menu/Menu";
import SingleFood from "../Pages/SingleFood/SingleFood";
import OrderFood from "../Pages/OrderFood/OrderFood";
import Cart from "../Pages/Cart/Cart";
import PrivateRoutes from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/allFood",
        element: <AllFood></AllFood>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/singleFood/:id",
        element: (
          <PrivateRoutes>
            <SingleFood></SingleFood>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://127.0.0.1:5000/singleFood/${params.id}`),
      },
      {
        path: "/singleTopFood/:id",
        element: (
          <PrivateRoutes>
            <SingleFood></SingleFood>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://127.0.0.1:5000/singleTopFood/${params.id}`),
      },
      {
        path: "/orderFood",
        element: <OrderFood></OrderFood>,
      },
      {
        path: "/cart",
        element: (
          <PrivateRoutes>
            <Cart></Cart>
          </PrivateRoutes>
        ),
        loader: () => fetch("http://127.0.0.1:5000/carts"),
      },
    ],
  },
]);
export default router;
