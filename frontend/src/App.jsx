// filepath: d:\portfolio\frontend\src\App.jsx
import { useState } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Navbar from './components/Navbar.jsx'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <Home />
      <About />
      <Resume />
      <Projects />
      <Contact />
    </div>
  )
}

export default App