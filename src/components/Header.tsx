import { useState } from 'react'
import { logo } from '../assets/images'

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
          <button
            onClick={() => onNavigate('about')}
            className="flex items-center shrink-0"
          >
            <img src={logo} alt="Mayur Uniquoters Limited" className="h-9 lg:h-11 w-auto" />
          </button>

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
