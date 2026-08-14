import { useState } from 'react'
import { images as IMGS } from '../assets/images'

type Segment = 'Automotive' | 'Furnishing' | 'Footwear' | 'Leather Goods'

const segments: Record<Segment, { hero: string; image: string; subcategories: string[]; desc: string }> = {
  Automotive: {
    hero: IMGS.heroCarousel1,
    image: IMGS.vision,
    subcategories: ['Cars', '3 Wheelers', '2 Wheelers', 'Commercial Vehicles', 'Train', 'Marine', 'Tractors'],
    desc: 'Engineering-grade synthetic leather for every form of transport — from premium passenger vehicles to commercial fleets. Designed to exceed OEM specifications for abrasion resistance, UV stability, and grain consistency.',
  },
  Furnishing: {
    hero: IMGS.furnishHero,
    image: IMGS.furnishCategory,
    subcategories: ['Residential', 'Work Place', 'Restaurants & Retails', 'Spas', 'Stadiums & Theatre', 'Poolside & Outdoors'],
    desc: 'Premium upholstery materials for residential and contract environments. Designed for durability, aesthetics, and comfort — meeting demanding fire, abrasion and stain-resistance standards.',
  },
  Footwear: {
    hero: IMGS.leatherGoods,
    image: IMGS.leatherTexture,
    subcategories: ['Sports & Athletic', 'Formal & Dress', 'Casual & Lifestyle', 'Industrial Safety', 'Children\'s Footwear', 'Sandals & Slippers'],
    desc: 'Lightweight, breathable and highly flexible synthetic leather solutions for every footwear category — from performance athletic wear to high-end fashion and safety footwear.',
  },
  'Leather Goods': {
    hero: IMGS.leatherGoods,
    image: IMGS.leatherClose,
    subcategories: ['Handbags & Purses', 'Wallets & Cardholders', 'Belts & Accessories', 'Travel Luggage', 'Office & Laptop Bags', 'Fashion Accessories'],
    desc: 'Refined, supple materials with rich grain characteristics for premium leather goods. Our portfolio includes both classic full-grain looks and contemporary finishes for the fashion and lifestyle market.',
  },
}

const swatchColors = [
  { label: 'Obsidian', hex: '#1A1108' },
  { label: 'Camel', hex: '#C4A265' },
  { label: 'Ivory', hex: '#E8DDD0' },
  { label: 'Espresso', hex: '#4A2A1A' },
  { label: 'Burgundy', hex: '#5C1A1A' },
  { label: 'Sage', hex: '#6B7A60' },
  { label: 'Slate', hex: '#4A5568' },
]

const productSwatches = [
  IMGS.furnishProduct1,
  IMGS.furnishProduct2,
  IMGS.furnishProduct3,
  IMGS.furnishProduct4,
  IMGS.furnishProduct5,
]

const productCards = [
  { name: 'Leatherite Pro — Automotive Grade', category: 'Automotive', img: IMGS.heroCarousel1 },
  { name: 'Luxurino — Furnishing Collection', category: 'Furnishing', img: IMGS.furnishCategory },
  { name: 'FlexSole — Footwear Series', category: 'Footwear', img: IMGS.leatherGoods },
  { name: 'Lumina — Leather Goods', category: 'Leather Goods', img: IMGS.leatherTexture },
  { name: 'Duracoat — Commercial Grade', category: 'Automotive', img: IMGS.vision },
  { name: 'Nuvelo — Interior Textiles', category: 'Furnishing', img: IMGS.furnishHero },
]

export default function ProductsPage() {
  const [activeSegment, setActiveSegment] = useState<Segment>('Automotive')
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)
  const [activeSwatch, setActiveSwatch] = useState(0)
  const [productPage, setProductPage] = useState(0)

  const seg = segments[activeSegment]
  const visibleProducts = productCards.slice(productPage * 3, productPage * 3 + 3)
  const totalPages = Math.ceil(productCards.length / 3)

  const toggleAccordion = (item: string) => {
    setOpenAccordion(openAccordion === item ? null : item)
  }

  return (
    <main className="bg-[#F7F3EC]">

      {/* ── HERO ── */}
      <section className="relative w-full h-[75vh] min-h-[480px] overflow-hidden">
        <img
          src={seg.hero}
          alt={`${activeSegment} leather`}
          key={activeSegment}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1008]/60 via-[#1C1008]/20 to-transparent" />
        <div className="absolute bottom-16 left-8 lg:left-20 right-8">
          <span className="rule-red mb-5 block" />
          <h1 className="font-serif text-5xl lg:text-7xl font-light text-white mb-4 tracking-tight">
            Market Segments
          </h1>
          <p className="font-sans text-white/70 text-sm lg:text-base max-w-[520px] leading-relaxed">
            Materials engineered for the worlds that surround us.
          </p>
        </div>
      </section>

      {/* ── CATEGORY NAV ── */}
      <nav className="bg-white border-b border-[#D4B47A] sticky top-[80px] z-40">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
          <div className="flex items-center gap-10 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
            {(Object.keys(segments) as Segment[]).map(s => (
              <button
                key={s}
                onClick={() => { setActiveSegment(s); setOpenAccordion(null) }}
                className={`
                  shrink-0 font-sans text-[11px] tracking-[0.18em] uppercase font-medium py-5 relative
                  transition-colors duration-200
                  ${activeSegment === s ? 'text-[#8B1A1A]' : 'text-[#9A8F82] hover:text-[#1C1008]'}
                `}
              >
                {s}
                {activeSegment === s && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#8B1A1A]" />
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ── MAIN SEGMENT SECTION ── */}
      <section className="py-20 lg:py-32 px-8 lg:px-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left: image with carousel dots */}
            <div>
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  key={activeSegment}
                  src={seg.image}
                  alt={activeSegment}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-2 mt-4">
                {[0, 1, 2, 3].map(i => (
                  <button key={i} className={`w-2 h-2 rounded-full transition-colors ${i === 0 ? 'bg-[#8B1A1A]' : 'bg-[#D4B47A]'}`} />
                ))}
              </div>
            </div>

            {/* Right: accordion */}
            <div className="lg:pt-2">
              <p className="font-sans text-[10px] tracking-[0.3em] text-[#8B1A1A] uppercase mb-3">Market Segment</p>
              <h2 className="font-serif text-4xl lg:text-5xl font-light text-[#8B1A1A] mb-4">{activeSegment}</h2>
              <div className="w-full h-[1px] bg-[#8B1A1A] mb-6" />
              <p className="font-sans text-[#2C2418] text-sm leading-[1.8] opacity-80 mb-8">{seg.desc}</p>

              <div>
                {seg.subcategories.map((sub, i) => (
                  <div key={sub} className="accordion-item">
                    <button
                      onClick={() => toggleAccordion(sub)}
                      className="w-full flex items-center justify-between py-4 text-left"
                    >
                      <span className="font-sans text-sm text-[#1C1008] font-medium">{sub}</span>
                      <svg
                        width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke="#8B1A1A" strokeWidth="1.5"
                        className={`shrink-0 transition-transform duration-300 ${openAccordion === sub ? 'rotate-180' : ''}`}
                      >
                        <path d="M6 9l6 6 6-6"/>
                      </svg>
                    </button>
                    {openAccordion === sub && (
                      <div className="pb-4 font-sans text-[#9A8F82] text-xs leading-relaxed">
                        Premium synthetic leather solutions for {sub.toLowerCase()} applications — engineered for durability, aesthetics, and compliance with relevant international standards.
                        <button className="block mt-3 font-sans text-[9px] tracking-[0.2em] uppercase text-[#8B1A1A] flex items-center gap-2 hover:gap-3 transition-all">
                          Explore Products
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR PRODUCTS: FEATURED SWATCH ── */}
      <section className="py-20 lg:py-28 bg-[#EDE6D9] px-8 lg:px-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <p className="font-sans text-[10px] tracking-[0.3em] text-[#8B1A1A] uppercase mb-3">Our Products</p>
            <h2 className="font-serif text-4xl font-light text-[#1C1008]">Material Showcase</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: circular swatch */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-[#D4B47A] shadow-xl bg-black">
                  <img
                    src={productSwatches[activeSwatch % productSwatches.length]}
                    alt="Material swatch"
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 border border-[#C4A265] rounded-full" />
              </div>
            </div>

            {/* Right: product info */}
            <div>
              <p className="font-sans text-[10px] tracking-[0.3em] text-[#8B1A1A] uppercase mb-4">Featured Material</p>
              <h3 className="font-serif text-3xl lg:text-4xl font-medium text-[#8B1A1A] mb-3">
                [Product Name — Replace]
              </h3>
              <span className="rule-red mb-6 block" />
              <p className="font-sans text-[#2C2418] text-sm leading-[1.8] opacity-80 mb-8">
                A high-performance synthetic leather engineered for premium applications. Featuring exceptional grain clarity, superior abrasion resistance and consistent colorfastness across all production batches. Replace this with your actual product description.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-10">
                {['Characteristic 01 — [Replace]', 'Characteristic 02 — [Replace]', 'Characteristic 03 — [Replace]', 'Characteristic 04 — [Replace]'].map(c => (
                  <div key={c} className="flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full bg-[#8B1A1A] shrink-0" />
                    <span className="font-sans text-xs text-[#2C2418] opacity-80">{c}</span>
                  </div>
                ))}
              </div>
              <button className="inline-flex items-center gap-3 font-sans text-[10px] tracking-[0.2em] uppercase text-[#8B1A1A] border border-[#8B1A1A] hover:bg-[#8B1A1A] hover:text-white px-8 py-4 transition-all duration-300">
                Request Sample
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>

          {/* Swatch selector */}
          <div className="mt-16">
            <div className="border-t border-[#D4B47A] pt-8">
              <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#9A8F82] mb-6">Select Material Colour</p>
              <div className="flex items-center gap-6 flex-wrap">
                {swatchColors.map((s, i) => (
                  <div key={s.label} className="flex flex-col items-center gap-2">
                    <button
                      onClick={() => setActiveSwatch(i)}
                      className={`swatch ${activeSwatch === i ? 'active' : ''}`}
                      style={{ backgroundColor: s.hex }}
                      title={s.label}
                    />
                    <p className="font-sans text-[9px] text-[#9A8F82] tracking-wide">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCT GRID ── */}
      <section className="py-24 px-8 lg:px-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="font-sans text-[10px] tracking-[0.3em] text-[#8B1A1A] uppercase mb-3">Product Catalogue</p>
              <h2 className="font-serif text-4xl font-light text-[#1C1008]">All Products</h2>
            </div>
            {/* Pagination */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setProductPage(Math.max(0, productPage - 1))}
                disabled={productPage === 0}
                className="w-9 h-9 border border-[#C4A265] flex items-center justify-center hover:bg-[#C4A265] transition-colors disabled:opacity-30 group"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:stroke-white"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              </button>
              <span className="font-sans text-[10px] text-[#9A8F82]">{productPage + 1} / {totalPages}</span>
              <button
                onClick={() => setProductPage(Math.min(totalPages - 1, productPage + 1))}
                disabled={productPage === totalPages - 1}
                className="w-9 h-9 border border-[#C4A265] flex items-center justify-center hover:bg-[#C4A265] transition-colors disabled:opacity-30 group"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:stroke-white"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleProducts.map(p => (
              <div key={p.name} className="product-card group cursor-pointer">
                <div className="overflow-hidden bg-[#EDE6D9] aspect-[4/3]">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="pt-5 pb-6 border-b border-[#D4B47A]">
                  <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-[#8B1A1A] mb-2">{p.category}</p>
                  <p className="font-serif text-base text-[#1C1008] font-medium mb-4 leading-snug">{p.name}</p>
                  <button className="font-sans text-[9px] tracking-[0.18em] uppercase text-[#2C2418] flex items-center gap-2 hover:gap-3 hover:text-[#8B1A1A] transition-all duration-200">
                    View Product
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Dot pagination */}
          <div className="flex items-center gap-2 mt-10 justify-center">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setProductPage(i)}
                className={`w-2 h-2 rounded-full transition-colors ${productPage === i ? 'bg-[#8B1A1A]' : 'bg-[#D4B47A]'}`}
              />
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
