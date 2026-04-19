import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import Footer from '../components/Footer'

const ALL_PRODUCTS = [
  { name: 'Greige Poplin', tag: 'Woven', weight: '100gsm · Cotton · 60" Width', category: 'cotton', color: '#E2D9CC', stock: '2,400m' },
  { name: 'Natural Linen', tag: 'Natural', weight: '180gsm · Linen · 58" Width', category: 'linen', color: '#D4C4B0', stock: '1,150m' },
  { name: 'Muslin Sheer', tag: 'Sheer', weight: '70gsm · Cotton · 54" Width', category: 'cotton', color: '#EDE7DC', stock: '850m' },
  { name: 'Heavy Canvas', tag: 'Structured', weight: '320gsm · Cotton · 58" Width', category: 'canvas', color: '#9C8878', stock: '3,200m' },
  { name: 'Drill Fabric', tag: 'Denim Weight', weight: '280gsm · Cotton · 60" Width', category: 'canvas', color: '#8B7A6A', stock: '1,800m' },
  { name: 'Linen Slub', tag: 'Textured', weight: '220gsm · Linen · 56" Width', category: 'linen', color: '#C8B5A0', stock: '640m' },
  { name: 'Cotton Twill', tag: 'Woven', weight: '160gsm · Cotton · 60" Width', category: 'cotton', color: '#BFB09F', stock: '4,500m' },
  { name: 'Jute Blend', tag: 'Blended', weight: '240gsm · Jute-Cotton · 54" Width', category: 'canvas', color: '#A89070', stock: '920m' },
  { name: 'Voile Base', tag: 'Sheer', weight: '55gsm · Cotton · 58" Width', category: 'cotton', color: '#F0EAE0', stock: '1,300m' },
]

const FILTERS = ['All', 'Cotton', 'Linen', 'Canvas']

const WOVEN_PATTERNS = {
  cotton: `repeating-linear-gradient(0deg, transparent 0px, transparent 4px, rgba(0,0,0,0.04) 4px, rgba(0,0,0,0.04) 5px), repeating-linear-gradient(90deg, transparent 0px, transparent 4px, rgba(0,0,0,0.04) 4px, rgba(0,0,0,0.04) 5px)`,
  linen: `repeating-linear-gradient(45deg, transparent 0px, transparent 6px, rgba(0,0,0,0.05) 6px, rgba(0,0,0,0.05) 7px), repeating-linear-gradient(-45deg, transparent 0px, transparent 6px, rgba(0,0,0,0.05) 6px, rgba(0,0,0,0.05) 7px)`,
  canvas: `repeating-linear-gradient(0deg, transparent 0px, transparent 8px, rgba(0,0,0,0.07) 8px, rgba(0,0,0,0.07) 9px), repeating-linear-gradient(90deg, transparent 0px, transparent 8px, rgba(0,0,0,0.07) 8px, rgba(0,0,0,0.07) 9px)`,
}

export default function Collection() {
  useScrollReveal()
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = ALL_PRODUCTS.filter(p =>
    activeFilter === 'All' || p.category === activeFilter.toLowerCase()
  )

  return (
    <main className="collection-page">
      <div className="collection-page__hero">
        <h1 className="collection-page__title">The Fabric Range</h1>
        <p className="collection-page__sub">40+ greige varieties · Sustainable sourcing · Bulk & sample orders</p>
      </div>

      <div className="filter-bar">
        {FILTERS.map(f => (
          <button
            key={f}
            className={`filter-btn${activeFilter === f ? ' active' : ''}`}
            onClick={() => setActiveFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {filtered.map((product, i) => (
          <div key={i} className="product-card reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
            <div className="product-card__image">
              <div style={{
                width: '100%',
                height: '100%',
                background: product.color,
                backgroundImage: WOVEN_PATTERNS[product.category],
                backgroundSize: '12px 12px',
                position: 'absolute',
                inset: 0,
              }} />
              <div style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '3rem',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  color: 'rgba(42,31,23,0.2)',
                  letterSpacing: '0.1em',
                }}>
                  {product.name.split(' ')[0]}
                </span>
              </div>
            </div>
            <div className="product-card__body">
              <div className="product-card__tag">{product.tag}</div>
              <div className="product-card__name">{product.name}</div>
              <div className="product-card__weight">{product.weight}</div>
              <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4CAF50' }}></span>
                <span style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--espresso)', fontWeight: 500 }}>
                  Stock: {product.stock}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div style={{
        textAlign: 'center',
        padding: '6rem var(--gutter)',
        background: 'var(--greige)',
      }}>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 4vw, 4rem)',
          fontWeight: 300,
          color: 'var(--espresso)',
          marginBottom: '1.5rem',
          fontStyle: 'italic',
        }}>
          Need a custom weight or weave?
        </h2>
        <p style={{ color: 'var(--charcoal)', marginBottom: '2.5rem', maxWidth: '420px', margin: '0 auto 2.5rem' }}>
          We take custom mill orders for brands that need specific GSM,
          width, or fibre composition.
        </p>
        <a href="/contact" className="cta-btn"><span>Talk to Us</span></a>
      </div>

      <Footer />
    </main>
  )
}
