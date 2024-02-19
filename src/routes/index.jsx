import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Layout } from "@/componenets/Layout";
import { Homepage } from "@/features/homepage";
import { Store, Cart } from "@/features/store";

export const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Homepage /> },
        { path: "/store", element: <Store /> },
        { path: "/store/cart", lement: <Cart /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
