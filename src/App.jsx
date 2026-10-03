import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
// Route-level code splitting: each page is its own chunk
const Catalog = lazy(() => import('./pages/Catalog.jsx'))
const ProductDetail = lazy(() => import('./pages/ProductDetail.jsx'))
const Cart = lazy(() => import('./pages/Cart.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))
export default function App() {
  return (
    <Suspense fallback={<p className="pad">Loading…</p>}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Catalog />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
