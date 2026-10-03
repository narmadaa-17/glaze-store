import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useCart } from '../context/CartContext.jsx'

export default function Layout() {
  const { count } = useCart()
  const { pathname } = useLocation()

  useEffect(() => window.scrollTo(0, 0), [pathname])

  return (
    <>
      <header className="bar">
        <a href="/" className="logo">Glaze</a>

        <nav>
          <a href="/">Shop</a>
          <a href="/cart">Cart ({count})</a>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="pad">
        Glaze. Made in small batches.
      </footer>
    </>
  )
}