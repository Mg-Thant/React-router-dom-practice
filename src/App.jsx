import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main";
import { Home, Product, ProductDetail, About } from "./Pages";

const router = createBrowserRouter([
  {
    path: "",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/products",
        element: <Product />,
      },
      {
        path: "/products/:title",
        element: <ProductDetail />,
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
