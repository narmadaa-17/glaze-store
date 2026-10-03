import { createContext, useContext, useEffect, useReducer } from 'react'
const CartCtx = createContext()
function reducer(s, a) {
  switch (a.type) {
    case 'add': return { ...s, [a.id]: (s[a.id] || 0) + 1 }
    case 'set': { const n = { ...s }; a.qty > 0 ? (n[a.id] = a.qty) : delete n[a.id]; return n }
    case 'clear': return {}
    default: return s
  }
}
const load = () => { try { return JSON.parse(localStorage.getItem('cart')) || {} } catch { return {} } }
export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(reducer, {}, load)
  useEffect(() => { try { localStorage.setItem('cart', JSON.stringify(items)) } catch {} }, [items])
  const count = Object.values(items).reduce((a, b) => a + b, 0)
  return <CartCtx.Provider value={{ items, count, dispatch }}>{children}</CartCtx.Provider>
}
export const useCart = () => useContext(CartCtx)
