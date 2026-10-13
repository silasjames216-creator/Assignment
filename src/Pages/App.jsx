import { useEffect, useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Home from './Home.jsx'
import '../index.css'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [time, setTime] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
    const clock = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000)

    return () => clearInterval(clock)
  }, [])

  return (
    <BrowserRouter>
      <div className={darkMode ? 'app dark' : 'app light'}>
        <div className="site">
          <header className="header">
            <Link className="logo" to="/">SJ_</Link>

            <nav>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
              <span className="clock">{time}</span>
              <button onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? 'Light mode' : 'Dark mode'}
              </button>
            </nav>
          </header>

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          <footer>© 2026 Silas James — Built with purpose.</footer>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
