import { lazy } from "react";
import  paths  from "./paths";
const Home = lazy(() => import("../pages/home/home"));

export const map = [
  {
    path: paths.home,
    element: <Home />,
    exact: true,
  },
];
