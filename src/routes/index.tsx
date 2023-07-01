import Loading from "@components/Loading";
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("@pages/home"));
const Hero = lazy(() => import("@pages/hero"));
const NotFound = lazy(() => import("@pages/notFound"));

const AppRoutes = () => (
  <BrowserRouter>
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:name/:id" element={<Hero />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default AppRoutes;
