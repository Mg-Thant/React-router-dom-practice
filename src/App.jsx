import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main";
import { Home, Product, ProductDetail, About, Error } from "./Pages";
import { loader as ProductsLoader } from "./Pages/Products";
import { loader as ProductDetailLoader } from "./Pages/ProductDetail"

const router = createBrowserRouter([
  {
    path: "",
    element: <Main />,
    errorElement : <Error />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/products",
        element: <Product />,
        loader : ProductsLoader,
      },
      {
        path: "/products/:productId",
        element: <ProductDetail />,
        loader : ProductDetailLoader
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
