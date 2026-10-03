import { Link, useParams } from 'react-router-dom'
import { products } from '../data/products.js'
import { useCart } from '../context/CartContext.jsx'
export default function ProductDetail() {
  const { id } = useParams()
  const { dispatch } = useCart()
  const p = products.find(x => x.id === Number(id))
  if (!p) return <div className="pad"><p>We couldn't find that product.</p><Link to="/">Back to shop</Link></div>
  return (
    <section className="pad detail">
      <img src={p.image} alt={p.name} width="600" height="600" />
      <div>
        <Link to="/">Back to shop</Link>
        <h1>{p.name}</h1><p>{p.category}</p><p>{p.blurb}</p>
        <p className="price">${p.price}</p>
        <button onClick={() => dispatch({ type: 'add', id: p.id })}>Add to cart</button>
      </div>
    </section>
  )
}
