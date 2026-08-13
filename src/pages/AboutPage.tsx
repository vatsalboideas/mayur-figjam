import { useState, useRef } from 'react'

const IMGS = {
  heroAuto: 'https://images.unsplash.com/photo-1643142314404-32a911f3ede2?w=1800&h=900&fit=crop&auto=format',
  leatherClose: 'https://images.unsplash.com/photo-1571829604981-ea159f94e5ad?w=800&h=1100&fit=crop&auto=format',
  leatherSwatches: 'https://images.unsplash.com/photo-1573227896778-8f378c4029d4?w=900&h=600&fit=crop&auto=format',
  leatherTexture2: 'https://images.unsplash.com/photo-1716295177956-420a647c83ac?w=600&h=800&fit=crop&auto=format',
  sofa: 'https://images.unsplash.com/photo-1599696848652-f0ff23bc911f?w=900&h=600&fit=crop&auto=format',
  carSeat: 'https://images.unsplash.com/photo-1582519366734-82dac0fcc12d?w=600&h=700&fit=crop&auto=format',
  leatherRolls: 'https://images.unsplash.com/photo-1451930393367-e1e01fc2bacc?w=900&h=600&fit=crop&auto=format',
  founder: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&auto=format',
  board1: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&auto=format',
  board2: 'https://images.unsplash.com/photo-1718209881007-c0ecdfc00f9d?w=400&h=500&fit=crop&auto=format',
  board3: 'https://images.unsplash.com/photo-1573497161161-c3e73707e25c?w=400&h=500&fit=crop&auto=format',
  board4: 'https://images.unsplash.com/photo-1581065178047-8ee15951ede6?w=400&h=500&fit=crop&auto=format',
  investors: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=700&h=800&fit=crop&auto=format',
  timeline22: 'https://images.unsplash.com/photo-1573227896778-8f378c4029d4?w=400&h=280&fit=crop&auto=format',
  timeline23: 'https://images.unsplash.com/photo-1599696848652-f0ff23bc911f?w=400&h=280&fit=crop&auto=format',
  timeline24: 'https://images.unsplash.com/photo-1451930393367-e1e01fc2bacc?w=400&h=280&fit=crop&auto=format',
  timeline25: 'https://images.unsplash.com/photo-1643142314404-32a911f3ede2?w=400&h=280&fit=crop&auto=format',
}

const values = [
  { icon: '◆', title: 'Integrity', desc: 'Honesty and transparency in every partnership we build' },
  { icon: '◈', title: 'Innovation', desc: 'Advancing material science to define what leather can be' },
  { icon: '◉', title: 'Excellence', desc: 'Uncompromising quality at every stage of production' },
  { icon: '◇', title: 'Sustainability', desc: 'Responsible manufacturing for a better shared future' },
  { icon: '○', title: 'Customer Focus', desc: 'Designing solutions around the needs of each industry' },
  { icon: '△', title: 'Global Reach', desc: 'Serving markets across six continents with consistent standards' },
]

const boardMembers = [
  { name: 'Suresh K. Poddar', designation: 'Chairman & Managing Director', img: IMGS.board1 },
  { name: 'Rahul S. Mehta', designation: 'Executive Director', img: IMGS.board2 },
  { name: 'Priya R. Sharma', designation: 'Independent Director', img: IMGS.board3 },
  { name: 'Anita V. Bose', designation: 'Independent Director', img: IMGS.board4 },
]

const certs = [
  { name: 'ISO 9001:2015', sub: 'Quality Management System' },
  { name: 'ISO 14001:2015', sub: 'Environmental Management' },
  { name: 'ISO 45001:2018', sub: 'Occupational Health & Safety' },
  { name: 'OEKO-TEX Standard 100', sub: 'Textile Safety Certification' },
  { name: 'REACH Compliance', sub: 'EU Chemical Regulations' },
]

const timelineItems = [
  { year: '2022', img: IMGS.timeline22, desc: 'Expanded automotive leather production capacity with state-of-the-art tanning facilities in Rajasthan.' },
  { year: '2023', img: IMGS.timeline23, desc: 'Launched premium furnishing leather line. Entered new export markets across Southeast Asia and the Middle East.' },
  { year: '2024', img: IMGS.timeline24, desc: 'Achieved ISO 45001 certification. Commissioned second manufacturing plant with advanced effluent treatment.' },
  { year: '2025', img: IMGS.timeline25, desc: 'Introduced sustainable bio-based leather alternatives. Crossed ₹1,000 Cr. in annual turnover milestone.' },
]

const testimonials = [
  { quote: 'Mayur\'s automotive leather sets a benchmark for consistency and grain quality. It is the preferred choice across our production lines.', name: 'Rajiv Anand', title: 'VP Procurement, Premium OEM', avatar: IMGS.board1 },
  { quote: 'Their material expertise and customisation capabilities are unmatched. Every collection we develop begins with a conversation with Mayur.', name: 'Léa Fontaine', title: 'Design Director, Luxury Furniture Brand', avatar: IMGS.board3 },
  { quote: 'Reliability, quality, and scale — Mayur delivers all three. Our footwear collections have benefited enormously from this partnership.', name: 'Marco Di Luca', title: 'Head of Sourcing, European Footwear Group', avatar: IMGS.board2 },
]

export default function AboutPage() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [activeBoard, setActiveBoard] = useState(0)

  const scrollBoard = (dir: number) => {
    const el = carouselRef.current
    if (!el) return
    el.scrollBy({ left: dir * 300, behavior: 'smooth' })
  }

  return (
    <main className="bg-[#F7F3EC]">

      {/* ── SECTION 1: HERO ── */}
      <section className="relative w-full h-[88vh] min-h-[540px] overflow-hidden">
        <img
          src={IMGS.heroAuto}
          alt="Premium automotive leather interior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1008]/70 via-[#1C1008]/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end pb-20 px-8 lg:px-20">
          <div className="max-w-[680px]">
            <span className="rule-red mb-6" />
            <h1 className="font-serif text-5xl lg:text-7xl font-light text-white leading-[1.05] tracking-tight mb-6">
              Crafting Materials<br />
              <em>That Move the World</em>
            </h1>
            <p className="font-sans text-white/80 text-sm lg:text-base leading-relaxed max-w-[460px] mb-10">
              Mayur Uniquoters develops and manufactures premium synthetic leather and material solutions for automotive, furnishing, footwear, and leather goods industries across the globe.
            </p>
            <button className="inline-flex items-center gap-3 font-sans text-[11px] tracking-[0.2em] uppercase font-medium text-white border border-white/60 hover:border-[#C4A265] hover:text-[#C4A265] px-8 py-4 transition-all duration-300">
              Explore Our Story
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" opacity="0.6">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </div>
      </section>

      {/* ── SECTION 2: ABOUT MAYUR ── */}
      <section className="py-24 lg:py-36 px-8 lg:px-20 max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: tall image */}
          <div className="relative">
            <img
              src={IMGS.leatherClose}
              alt="Close-up of premium leather grain"
              className="w-full h-[560px] lg:h-[720px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-[#C4A265] hidden lg:block" />
          </div>
          {/* Right: editorial text */}
          <div className="lg:pt-16">
            <p className="font-sans text-[10px] tracking-[0.3em] text-[#8B1A1A] uppercase mb-4">About Us</p>
            <h2 className="font-serif text-4xl lg:text-5xl font-light text-[#1C1008] leading-tight mb-8">
              A Legacy Built<br />on Leather
            </h2>
            <span className="rule-red mb-8 block" />
            <p className="font-sans text-[#2C2418] text-sm leading-[1.9] mb-6 opacity-85">
              Founded in Rajasthan, India, Mayur Uniquoters Limited has grown into one of the world's leading manufacturers of synthetic leather. With decades of expertise, we serve the automotive, furnishing, footwear and leather goods industries — supplying to marquee brands across India and more than 50 countries worldwide.
            </p>
            <p className="font-sans text-[#2C2418] text-sm leading-[1.9] opacity-85">
              Our state-of-the-art manufacturing plants, rigorous quality systems, and deep material research capabilities allow us to deliver precision-engineered products that meet the most demanding international standards — while staying committed to sustainable and responsible production.
            </p>

            {/* Stats strip */}
            <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-[#D4B47A] pt-10">
              {[
                { num: '50+', label: 'Global Presence', sub: 'Countries served worldwide' },
                { num: '30+', label: 'Years of Expertise', sub: 'Decades of material innovation' },
                { num: '4', label: 'Market Segments', sub: 'Automotive · Furnishing · Footwear · Leather Goods' },
                { num: '2', label: 'Manufacturing Plants', sub: 'Advanced facilities in India' },
              ].map(s => (
                <div key={s.label}>
                  <p className="font-serif text-3xl font-light text-[#8B1A1A]">{s.num}</p>
                  <p className="font-sans text-[11px] tracking-[0.12em] uppercase text-[#1C1008] font-semibold mt-1">{s.label}</p>
                  <p className="font-sans text-[10px] text-[#9A8F82] mt-0.5 leading-snug">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: MATERIAL STORY ── */}
      <section className="py-20 px-8 lg:px-20 bg-[#EDE6D9]">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-12">
            <p className="font-sans text-[10px] tracking-[0.3em] text-[#8B1A1A] uppercase mb-3">Our Material</p>
            <h2 className="font-serif text-4xl font-light text-[#1C1008]">The Art of the Craft</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="col-span-2 row-span-2 relative group overflow-hidden">
              <img src={IMGS.leatherSwatches} alt="Assorted leather swatches" className="w-full h-full object-cover min-h-[340px] transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1C1008]/60 to-transparent p-6">
                <p className="font-sans text-white text-[10px] tracking-[0.2em] uppercase">Colour Library</p>
                <p className="font-sans text-white/70 text-xs mt-1">An expansive palette engineered to specification</p>
              </div>
            </div>
            <div className="relative group overflow-hidden">
              <img src={IMGS.leatherTexture2} alt="Leather grain texture" className="w-full h-[200px] object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#1C1008]/60 to-transparent">
                <p className="font-sans text-white text-[10px] tracking-[0.2em] uppercase">Grain Textures</p>
              </div>
            </div>
            <div className="relative group overflow-hidden">
              <img src={IMGS.carSeat} alt="Automotive leather seat" className="w-full h-[200px] object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#1C1008]/60 to-transparent">
                <p className="font-sans text-white text-[10px] tracking-[0.2em] uppercase">Automotive Grade</p>
              </div>
            </div>
            <div className="relative group overflow-hidden">
              <img src={IMGS.sofa} alt="Furnishing leather" className="w-full h-[200px] object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#1C1008]/60 to-transparent">
                <p className="font-sans text-white text-[10px] tracking-[0.2em] uppercase">Furnishing</p>
              </div>
            </div>
            <div className="relative group overflow-hidden">
              <img src={IMGS.leatherRolls} alt="Leather rolls in manufacturing" className="w-full h-[200px] object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#1C1008]/60 to-transparent">
                <p className="font-sans text-white text-[10px] tracking-[0.2em] uppercase">Material Production</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: VISION + MISSION ── */}
      <section className="py-24 lg:py-36">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Vision */}
            <div className="bg-[#1C1008] p-14 lg:p-20 flex flex-col justify-between min-h-[420px]">
              <div>
                <p className="font-sans text-[10px] tracking-[0.3em] text-[#C4A265] uppercase mb-6">Vision</p>
                <h3 className="font-serif text-3xl lg:text-4xl font-light text-white leading-snug mb-6">
                  To be the world's most trusted name in premium material solutions
                </h3>
                <span className="block w-10 h-[2px] bg-[#C4A265]" />
              </div>
              <p className="font-sans text-white/60 text-xs leading-relaxed mt-8">
                We aspire to set the global standard for quality, consistency and innovation in synthetic leather — delivered with integrity and care for the planet.
              </p>
            </div>
            {/* Mission */}
            <div className="relative overflow-hidden min-h-[420px]">
              <img src={IMGS.leatherRolls} alt="Mayur manufacturing" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[#5C1A1A]/80" />
              <div className="relative z-10 p-14 lg:p-20 flex flex-col justify-between h-full min-h-[420px]">
                <div>
                  <p className="font-sans text-[10px] tracking-[0.3em] text-[#C4A265] uppercase mb-6">Mission</p>
                  <h3 className="font-serif text-3xl lg:text-4xl font-light text-white leading-snug mb-6 italic">
                    "Delivering exceptional materials that elevate every product they touch."
                  </h3>
                  <span className="block w-10 h-[2px] bg-[#C4A265]" />
                </div>
                <p className="font-sans text-white/60 text-xs leading-relaxed mt-8">
                  Through relentless research, responsible manufacturing and genuine partnership, we help global brands realise their finest ideas in leather.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: VALUES ── */}
      <section className="py-24 px-8 lg:px-20 bg-[#F7F3EC]">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <p className="font-sans text-[10px] tracking-[0.3em] text-[#8B1A1A] uppercase mb-3">What We Stand For</p>
            <h2 className="font-serif text-4xl font-light text-[#1C1008]">Our Values</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {values.map((v, i) => (
              <div key={v.title} className={`p-8 flex flex-col items-center text-center ${i < values.length - 1 ? 'border-r border-[#D4B47A]' : ''} border-t border-[#D4B47A]`}>
                <span className="text-[#8B1A1A] text-xl mb-4">{v.icon}</span>
                <p className="font-sans text-[11px] tracking-[0.15em] uppercase font-semibold text-[#1C1008] mb-3">{v.title}</p>
                <span className="block w-5 h-[1px] bg-[#C4A265] mb-3" />
                <p className="font-sans text-[10px] text-[#9A8F82] leading-snug">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: HISTORY TIMELINE ── */}
      <section className="py-24 lg:py-36 bg-[#EDE6D9] overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
          <div className="mb-16">
            <p className="font-sans text-[10px] tracking-[0.3em] text-[#8B1A1A] uppercase mb-3">Our Journey</p>
            <h2 className="font-serif text-4xl font-light text-[#1C1008]">History</h2>
          </div>
          <div className="relative">
            {/* Horizontal line */}
            <div className="absolute top-[calc(50%)] left-0 right-0 h-[1px] bg-[#C4A265]" style={{ top: '50%' }} />
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {timelineItems.map((item, i) => (
                <div key={item.year} className={`flex flex-col ${i % 2 === 0 ? 'justify-end' : 'justify-start flex-col-reverse'} gap-4`}>
                  {/* Card above or below */}
                  <div className="bg-white p-4 shadow-sm">
                    <img src={item.img} alt={`Mayur ${item.year}`} className="w-full h-[140px] object-cover mb-4" />
                    <p className="font-sans text-[10px] text-[#9A8F82] leading-snug">{item.desc}</p>
                  </div>
                  {/* Year marker */}
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-[#8B1A1A] border-2 border-[#EDE6D9]" />
                    <p className="font-serif text-2xl font-light text-[#1C1008] mt-1">{item.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: FOUNDER ── */}
      <section className="py-24 lg:py-36 px-8 lg:px-20">
        <div className="max-w-[1440px] mx-auto">
          <hr className="border-none border-t border-[#D4B47A] mb-20" style={{ borderTopWidth: '1px', borderColor: '#D4B47A' }} />
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative">
              <img src={IMGS.founder} alt="Founder" className="w-full h-[600px] object-cover object-top" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-[#C4A265] hidden lg:block" />
            </div>
            <div>
              <p className="font-sans text-[10px] tracking-[0.3em] text-[#8B1A1A] uppercase mb-4">Founder</p>
              <h2 className="font-serif text-4xl lg:text-5xl font-light text-[#1C1008] mb-2">Suresh K. Poddar</h2>
              <p className="font-sans text-[#9A8F82] text-xs tracking-[0.12em] uppercase mb-8">Chairman & Managing Director</p>
              <span className="rule-red mb-8 block" />
              <p className="font-sans text-[#2C2418] text-sm leading-[1.9] opacity-85 mb-6">
                Under the visionary leadership of Shri Suresh K. Poddar, Mayur Uniquoters has grown from a small textile manufacturer in Rajasthan into one of the world's most respected names in synthetic leather. His commitment to quality, innovation and ethical business practice has defined the company's culture and its enduring partnerships with global automotive and fashion brands.
              </p>
              <p className="font-sans text-[#2C2418] text-sm leading-[1.9] opacity-85 mb-10">
                With over three decades at the helm, Shri Poddar has led the company through transformative phases of modernisation, international expansion, and sustainability commitment — ensuring Mayur remains at the frontier of material innovation.
              </p>
              <button className="inline-flex items-center gap-3 font-sans text-[10px] tracking-[0.2em] uppercase text-[#8B1A1A] border-b border-[#8B1A1A] pb-1 hover:gap-5 transition-all duration-300">
                Read More
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: BOARD MEMBERS ── */}
      <section className="py-20 bg-[#EDE6D9]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="font-sans text-[10px] tracking-[0.3em] text-[#8B1A1A] uppercase mb-3">Leadership</p>
              <h2 className="font-serif text-4xl font-light text-[#1C1008]">Board Members</h2>
            </div>
            <div className="flex gap-3">
              <button onClick={() => scrollBoard(-1)} className="w-10 h-10 border border-[#C4A265] flex items-center justify-center hover:bg-[#C4A265] transition-colors group">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:stroke-white"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              </button>
              <button onClick={() => scrollBoard(1)} className="w-10 h-10 border border-[#C4A265] flex items-center justify-center hover:bg-[#C4A265] transition-colors group">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:stroke-white"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>
          <div ref={carouselRef} className="flex gap-6 overflow-x-auto pb-4" style={{ scrollbarWidth: 'none' }}>
            {boardMembers.map((m, i) => (
              <div
                key={m.name}
                onClick={() => setActiveBoard(i)}
                className={`shrink-0 w-[240px] cursor-pointer group transition-all duration-300 ${activeBoard === i ? 'opacity-100' : 'opacity-70 hover:opacity-90'}`}
              >
                <div className="overflow-hidden">
                  <img src={m.img} alt={m.name} className="w-full h-[300px] object-cover object-top transition-transform duration-500 group-hover:scale-104" />
                </div>
                <div className="pt-4 border-t border-[#C4A265] mt-4">
                  <p className="font-serif text-base text-[#1C1008] font-medium">{m.name}</p>
                  <p className="font-sans text-[10px] text-[#9A8F82] tracking-[0.1em] uppercase mt-1">{m.designation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 9: POLICY & CERTIFICATIONS ── */}
      <section className="py-24 px-8 lg:px-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-12">
            <p className="font-sans text-[10px] tracking-[0.3em] text-[#8B1A1A] uppercase mb-3">Standards & Compliance</p>
            <h2 className="font-serif text-4xl font-light text-[#1C1008]">Policy & Certifications</h2>
            <p className="font-sans text-[#9A8F82] text-sm mt-4 max-w-[600px] leading-relaxed">
              Our quality systems and environmental commitments are verified by internationally recognised certification bodies — ensuring every shipment meets the most exacting standards.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {certs.map(c => (
              <div key={c.name} className="border border-[#D4B47A] bg-white p-6 flex flex-col justify-between group hover:border-[#C4A265] transition-colors">
                <div className="w-12 h-12 border border-[#D4B47A] flex items-center justify-center mb-6">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8B1A1A" strokeWidth="1.5">
                    <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-serif text-base text-[#1C1008] font-medium leading-snug mb-1">{c.name}</p>
                  <p className="font-sans text-[10px] text-[#9A8F82] leading-snug mb-5">{c.sub}</p>
                  <button className="font-sans text-[9px] tracking-[0.18em] uppercase text-[#8B1A1A] flex items-center gap-2 hover:gap-3 transition-all duration-200">
                    View Certificate
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 10: INVESTORS ── */}
      <section className="py-24 bg-[#EDE6D9]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2 relative">
              <img src={IMGS.investors} alt="Investors" className="w-full h-[520px] object-cover object-top" />
              <div className="absolute -top-4 -right-4 w-20 h-20 border border-[#C4A265] hidden lg:block" />
            </div>
            <div className="lg:col-span-3 lg:pl-12">
              <p className="font-sans text-[10px] tracking-[0.3em] text-[#8B1A1A] uppercase mb-4">Investor Relations</p>
              <h2 className="font-serif text-4xl lg:text-5xl font-light text-[#1C1008] leading-snug mb-6">
                Building Value,<br />Together
              </h2>
              <span className="rule-red mb-8 block" />
              <p className="font-sans text-[#2C2418] text-sm leading-[1.9] opacity-85 mb-6">
                Mayur Uniquoters Limited is publicly listed on the BSE and NSE. Our commitment to governance, transparency, and sustained performance has made us a trusted choice for institutional and retail investors alike.
              </p>
              <p className="font-sans text-[#2C2418] text-sm leading-[1.9] opacity-85 mb-10">
                We maintain consistent shareholder value through disciplined capital allocation, strong operating margins, and long-term contracts with marquee global OEMs and brands.
              </p>
              <button className="inline-flex items-center gap-3 font-sans text-[10px] tracking-[0.2em] uppercase text-white bg-[#1C1008] hover:bg-[#8B1A1A] px-8 py-4 transition-colors duration-300">
                More About Investors
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 11: TESTIMONIALS ── */}
      <section className="py-24 lg:py-36 px-8 lg:px-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <p className="font-sans text-[10px] tracking-[0.3em] text-[#8B1A1A] uppercase mb-3">What Our Partners Say</p>
            <h2 className="font-serif text-4xl font-light text-[#1C1008]">Customer Testimonials</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-[#F7F3EC] border border-[#D4B47A] p-10 flex flex-col justify-between group hover:border-[#C4A265] transition-colors">
                <div>
                  <span className="font-serif text-[80px] leading-none text-[#D4B47A] block -mb-4 -ml-2 select-none">"</span>
                  <p className="font-sans text-[#2C2418] text-sm leading-[1.8] opacity-85 mt-4">{t.quote}</p>
                </div>
                <div className="flex items-center gap-4 mt-10 pt-6 border-t border-[#D4B47A]">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover object-top shrink-0" />
                  <div>
                    <p className="font-serif text-sm text-[#1C1008] font-medium">{t.name}</p>
                    <p className="font-sans text-[9px] text-[#9A8F82] tracking-[0.1em] uppercase mt-0.5">{t.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
