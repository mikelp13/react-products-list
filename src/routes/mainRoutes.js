import { lazy } from "react";

const mainRoutes = [
  {
    path: "/",
    name: "Products",
    exact: true,
    component: lazy(() =>
      import("../pages/productsPage/ProductsPage" /* webpackChunkName: "ProductsPage"*/)
    ),

  },
  {
    path: "/details",
    name: "Details",
    exact: true,
    component: lazy(() =>
      import("../pages/productDetailsPage/ProductDetailsPage" /* webpackChunkName: "DetailsPage"*/)
    ),
  },
   
];

export default mainRoutes;