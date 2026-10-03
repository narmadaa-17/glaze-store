import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { products, categories } from '../data/products.js'
import ProductCard from '../components/ProductCard.jsx'
export default function Catalog() {
  // Filters live in the URL, so filtered views are shareable
  const [sp, setSp] = useSearchParams()
  const cat = sp.get('cat') || 'All', q = sp.get('q') || '', sort = sp.get('sort') || 'default'
  const set = (k, v) => { const n = new URLSearchParams(sp); v && v !== 'All' && v !== 'default' ? n.set(k, v) : n.delete(k); setSp(n, { replace: true }) }
  const list = useMemo(() => {
    let l = products.filter(x => (cat === 'All' || x.category === cat) && x.name.toLowerCase().includes(q.toLowerCase()))
    if (sort === 'low') l = [...l].sort((a, b) => a.price - b.price)
    if (sort === 'high') l = [...l].sort((a, b) => b.price - a.price)
    return l
  }, [cat, q, sort])
  return (
    <section className="pad">
      <h1>Ceramics for daily use</h1>
      <div className="tools">
        <input type="search" placeholder="Search products" value={q} onChange={e => set('q', e.target.value)} aria-label="Search products" />
        <select value={cat} onChange={e => set('cat', e.target.value)} aria-label="Category">{categories.map(c => <option key={c}>{c}</option>)}</select>
        <select value={sort} onChange={e => set('sort', e.target.value)} aria-label="Sort">
          <option value="default">Featured</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option>
        </select>
      </div>
      {list.length ? <div className="grid">{list.map(p => <ProductCard key={p.id} product={p} />)}</div>
        : <p>No products match. Try a different search or category.</p>}
    </section>
  )
}
