import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Home = lazy(() => import('@pages/home'))
const Hero = lazy(() => import('@pages/hero'))


const AppRoutes = () => (
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/:name/:id" element={<Hero />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default AppRoutes