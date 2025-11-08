import './index.css'
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Layout/Root';
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';
import About from './Pages/About/About';
import Contacts from './Pages/Contacts/Contacts';
import ErrorPage from './Components/Shared/ErrorPage';
import ProductPage from './Pages/Home/HomeComponents/ProductPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index : true,
        element : <Home />
      },
      {
        path : "/about",
        element : <About />
      },
      {
        path : "/blog",
        element : <Blog />
      },
      {
        path : "/contacts",
        element : <Contacts />
      },
      {
        path: "/product/:id",
        element: <ProductPage />,
        loader: async ({params})=>{
          const res = await fetch("/products.json")
          const {products} = await res.json()

          return products.find(item =>(
            item.id == params.id
          ))
        }
      }

      
    ]
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);
