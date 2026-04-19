import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import Nav from './components/Nav'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Preloader from './components/Preloader'
import Cursor from './components/Cursor'

function App() {
  const [loading, setLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
      document.body.classList.add('loaded')
    }, 2800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Cursor />
      {loading && <Preloader />}
      {!loading && (
        <>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </>
      )}
    </>
  )
}

export default App
