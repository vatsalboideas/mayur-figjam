export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#C4A265' }} className="pt-16 pb-8">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center justify-center w-9 h-9 bg-[#1C1008]">
                <span className="font-serif font-bold text-[#C4A265] text-sm">M</span>
              </div>
              <div>
                <p className="font-serif font-semibold text-[#1C1008] text-xs tracking-widest uppercase">MAYUR</p>
                <p className="font-sans text-[#1C1008] text-[9px] tracking-[0.2em] uppercase opacity-70">UNIQUOTERS LIMITED</p>
              </div>
            </div>
            <p className="font-sans text-[#2C2418] text-xs leading-relaxed opacity-80 max-w-[220px]">
              Premium leather and material solutions for automotive, furnishing, footwear and leather goods industries worldwide.
            </p>
          </div>

          {/* Company */}
          <div>
            <p className="font-sans text-[#1C1008] text-[10px] tracking-[0.2em] uppercase font-semibold mb-5">Company</p>
            <ul className="space-y-3">
              {['About Us', 'Market Segments', 'Plants', 'Sustainability', 'Global Presence', 'News & Media'].map(l => (
                <li key={l}>
                  <a href="#" className="font-sans text-[#2C2418] text-xs hover:text-[#8B1A1A] transition-colors opacity-80 hover:opacity-100">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Careers */}
          <div>
            <p className="font-sans text-[#1C1008] text-[10px] tracking-[0.2em] uppercase font-semibold mb-5">
              <span className="text-[#8B1A1A]">Career</span>
            </p>
            <ul className="space-y-3">
              {['Life at Mayur', 'Student Programmes', 'Vacancies'].map(l => (
                <li key={l}>
                  <a href="#" className="font-sans text-[#2C2418] text-xs hover:text-[#8B1A1A] transition-colors opacity-80 hover:opacity-100">{l}</a>
                </li>
              ))}
            </ul>
            <p className="font-sans text-[#8B1A1A] text-[10px] tracking-[0.2em] uppercase font-semibold mt-6 mb-3">Support</p>
            <ul className="space-y-3">
              {['FAQ', 'Contact Us'].map(l => (
                <li key={l}>
                  <a href="#" className="font-sans text-[#2C2418] text-xs hover:text-[#8B1A1A] transition-colors opacity-80 hover:opacity-100">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-sans text-[#1C1008] text-[10px] tracking-[0.2em] uppercase font-semibold mb-5">Contact</p>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#8B1A1A] shrink-0">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.79 19.79 19.79 0 011 1.18 2 2 0 012.97 0h3.02a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7 7.91a16 16 0 006.09 6.09l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
                </svg>
                <span className="font-sans text-[#2C2418] text-xs opacity-80">+91-1423-224001</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#8B1A1A] shrink-0">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
                <span className="font-sans text-[#2C2418] text-xs opacity-80">info@mayur.biz</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#A88445] pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-sans text-[#2C2418] text-[10px] opacity-60 tracking-wide">
            © 2020 Mayur Uniquoters Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Use'].map(l => (
              <a key={l} href="#" className="font-sans text-[#2C2418] text-[10px] opacity-60 hover:opacity-100 hover:text-[#8B1A1A] transition-colors tracking-wide">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
