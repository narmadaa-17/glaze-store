import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
export default function ProductCard({ product: p }) {
  const { dispatch } = useCart()
  return (
    <article className="card">
      <Link to={`/product/${p.id}`}>
        <img src={p.image} alt={p.name} width="600" height="600" loading="lazy" decoding="async" />
        <h3>{p.name}</h3>
      </Link>
      <div className="row"><span>₹{p.price}</span>
        <button onClick={() => dispatch({ type: 'add', id: p.id })}>Add to cart</button></div>
    </article>
  )
}
