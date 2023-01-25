import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { map } from "./route-map";

const LoadingScreen = () => <h1>Loading...</h1>;

const RouterProvider = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <BrowserRouter>
        <Routes>
          {map.map((route, index) => (
            <Route key={index} {...route} />
          ))}
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default RouterProvider;
