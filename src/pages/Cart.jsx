import { Link } from 'react-router-dom'
import { products } from '../data/products.js'
import { useCart } from '../context/CartContext.jsx'

export default function Cart() {
  const { items, dispatch } = useCart()

  const lines = products.filter(p => items[p.id])

  const total = lines.reduce(
    (sum, p) => sum + p.price * items[p.id],
    0
  )

  if (!lines.length) {
    return (
      <div className="pad">
        <h1>Your cart is empty</h1>
        <Link to="/">Browse the shop</Link>
      </div>
    )
  }

  return (
    <section className="pad">
      <h1>Your cart</h1>

      {lines.map(p => (
        <div className="line" key={p.id}>
          <img
            src={p.image}
            alt={p.name}
            width="64"
            height="64"
            loading="lazy"
          />

          <Link to={`/product/${p.id}`}>{p.name}</Link>

          <input
            type="number"
            min="0"
            value={items[p.id]}
            aria-label={`Quantity for ${p.name}`}
            onChange={e =>
              dispatch({
                type: 'set',
                id: p.id,
                qty: Number(e.target.value)
              })
            }
          />

          <span>₹{p.price * items[p.id]}</span>
        </div>
      ))}

      <p className="price">Total: ₹{total}</p>

      <button
        onClick={() => {
          alert('Demo checkout: order placed.')
          dispatch({ type: 'clear' })
        }}
      >
        Place order
      </button>
    </section>
  )
}