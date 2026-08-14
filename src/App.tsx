import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutPage from './pages/AboutPage'
import ProductsPage from './pages/ProductsPage'

type Page = 'about' | 'products'

const PAGE_META: Record<Page, { title: string; description: string }> = {
  about: {
    title: 'About Us | Mayur Uniquoters Limited',
    description:
      'Mayur Uniquoters Limited develops and manufactures premium synthetic leather for automotive, furnishing, footwear, and leather goods industries across the globe.',
  },
  products: {
    title: 'Market Segments | Mayur Uniquoters Limited',
    description:
      'Explore Mayur Uniquoters material solutions engineered for automotive, furnishing, footwear, and leather goods — from OEM interiors to luxury lifestyle products.',
  },
}

function setMetaTag(attr: 'name' | 'property', key: string, content: string) {
  let tag = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, key)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

export default function App() {
  const [activePage, setActivePage] = useState<Page>('about')

  useEffect(() => {
    const meta = PAGE_META[activePage]
    document.title = meta.title
    setMetaTag('name', 'description', meta.description)
    setMetaTag('property', 'og:title', meta.title)
    setMetaTag('property', 'og:description', meta.description)
  }, [activePage])

  const navigate = (page: Page) => {
    setActivePage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#F7F3EC' }}>
      <Header activePage={activePage} onNavigate={navigate} />
      <div className="flex-1">
        {activePage === 'about' ? (
          <AboutPage />
        ) : (
          <ProductsPage />
        )}
      </div>
      <Footer />
    </div>
  )
}
