import { ThemeProvider } from './contexts/ThemeContext'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Education from './components/sections/Education'
import Contact from './components/sections/Contact'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)' }}>
        <Header />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App