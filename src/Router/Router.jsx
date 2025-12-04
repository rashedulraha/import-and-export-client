import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Hero from "../Component/Hero/Hero";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Registretion/Registretion";
import ProductsDetails from "../Pages/Products/ProductsDetails";
import AboutUs from "../Component/AboutUs/AboutUs";
import MyImport from "../Pages/MyImport/MyImport";
import LatestProducts from "../Pages/LatestProducts/LatestProducts";
import AllProducts from "../Pages/AllProducts/AllProducts";
import MyExport from "../Pages/MyExports/MyExport";
import PrivateRoute from "../Component/PrivateRoute/PrivateRoute";
import AddProduct from "../Pages/AddProducts/AddProducts";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Hero,
      },
      {
        path: "products-details/:id",
        loader: ({ params }) =>
          fetch(`https://smart-deals-app.vercel.app/products/${params.id}`),
        Component: ProductsDetails,
      },
      {
        path: "latest-products",
        element: <LatestProducts />,
      },
      {
        path: "allProducts",
        element: (
          <PrivateRoute>
            <AllProducts></AllProducts>
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "about",
        element: (
          <PrivateRoute>
            <AboutUs></AboutUs>
          </PrivateRoute>
        ),
      },
      {
        path: "export-list",
        element: (
          <PrivateRoute>
            <MyExport></MyExport>
          </PrivateRoute>
        ),
      },
      {
        path: "import",
        element: (
          <PrivateRoute>
            <MyImport></MyImport>
          </PrivateRoute>
        ),
      },
      {
        path: "add-product",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
