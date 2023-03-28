import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// imports the components from the main app file and the routes
import App from "./App";
import Home from "./routes/Home.route";
import Shop from "./routes/Shop.route";
import Authentication from "./routes/Authentication.route";
import Checkout from "./routes/Checkout.route";
import CategoriesPreview from "./components/CategoriesPreview";
import Category from "./routes/Category.route";

import { UserProvider } from "./contexts/User.context";
import { CategoriesProvider } from "./contexts/Categories.context";
import { CartProvider } from "./contexts/Cart.context";
// React router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Assigning the routing function to a variable 'router'
const router = createBrowserRouter([
  {
    // Main path from the app file has nested children
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
        children: [
          {
            index: true,
            element: <CategoriesPreview />,
          },
          {
            path: ":category",
            element: <Category />,
          },
        ],
      },
      {
        path: "auth",
        element: <Authentication />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // RouterProvider references the paths stored in the variable that points to the createBrowserRouter
  // <React.StrictMode>
  <UserProvider>
    <CategoriesProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </CategoriesProvider>
  </UserProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
