// filepath: d:\portfolio\frontend\src\App.jsx
import Home from './pages/Home'
import About from './pages/About'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Navbar from './components/Navbar.jsx'
import Chatbot from './components/Chatbot'
function App() {
    return (
    <div className="bg-gray-50 text-gray-900">
      <Navbar />
      <Home />
      <About />
      <Resume />
      <Projects />
      <Contact />
      <Chatbot />
    </div>
  )
}

export default App