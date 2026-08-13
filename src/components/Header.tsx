import { useState } from 'react'

interface HeaderProps {
  activePage: 'about' | 'products'
  onNavigate: (page: 'about' | 'products') => void
}

export default function Header({ activePage, onNavigate }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { label: 'ABOUT', page: 'about' as const },
    { label: 'MARKET SEGMENTS', page: 'products' as const },
    { label: 'PLANTS', page: null },
    { label: 'SUSTAINABILITY', page: null },
    { label: 'GLOBAL PRESENCE', page: null },
    { label: 'NEWS & MEDIA', page: null },
  ]

  return (
    <header style={{ backgroundColor: '#C4A265' }} className="sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => onNavigate('about')}
            className="flex items-center gap-3 shrink-0 group"
          >
            <div className="flex flex-col items-center justify-center w-9 h-9 border-2 border-[#1C1008] bg-[#1C1008]">
              <span className="font-serif font-bold text-[#C4A265] text-sm leading-none">M</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-serif font-semibold text-[#1C1008] text-xs leading-tight tracking-widest uppercase">
                MAYUR
              </p>
              <p className="font-sans text-[#1C1008] text-[9px] leading-tight tracking-[0.2em] uppercase opacity-80">
                UNIQUOTERS LIMITED
              </p>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive =
                (item.page === 'about' && activePage === 'about') ||
                (item.page === 'products' && activePage === 'products')
              return (
                <button
                  key={item.label}
                  onClick={() => item.page && onNavigate(item.page)}
                  className={`
                    font-sans text-[11px] tracking-[0.18em] font-medium uppercase
                    transition-colors duration-200 pb-0.5 relative
                    ${isActive ? 'text-[#8B1A1A]' : 'text-[#1C1008] hover:text-[#8B1A1A]'}
                  `}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#8B1A1A]" />
                  )}
                </button>
              )
            })}
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`block w-6 h-[1.5px] bg-[#1C1008] transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-[1.5px] bg-[#1C1008] transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-[1.5px] bg-[#1C1008] transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ backgroundColor: '#B8903A' }} className="lg:hidden border-t border-[#A88445]">
          <div className="px-8 py-4 flex flex-col gap-4">
            {navItems.map((item) => {
              const isActive =
                (item.page === 'about' && activePage === 'about') ||
                (item.page === 'products' && activePage === 'products')
              return (
                <button
                  key={item.label}
                  onClick={() => {
                    if (item.page) { onNavigate(item.page); setMenuOpen(false) }
                  }}
                  className={`font-sans text-[11px] tracking-[0.18em] font-medium uppercase text-left
                    ${isActive ? 'text-[#8B1A1A]' : 'text-[#1C1008]'}`}
                >
                  {item.label}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </header>
  )
}
