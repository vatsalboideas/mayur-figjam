import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutPage from './pages/AboutPage'
import ProductsPage from './pages/ProductsPage'

type Page = 'about' | 'products'

export default function App() {
  const [activePage, setActivePage] = useState<Page>('about')

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
