import { useEffect, useRef, useCallback } from 'react'
import ParticleBackground from './components/ParticleBackground/ParticleBackground'
import CustomCursor from './components/CustomCursor/CustomCursor'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Experience from './components/Experience/Experience'
import Education from './components/Education/Education'
import Certifications from './components/Certifications/Certifications'
import Footer from './components/Footer/Footer'
import './App.css'

const SECTIONS = ['home', 'about', 'projects', 'experience', 'education', 'certification']

function App() {
  const lastScrollY = useRef(0)
  const headerRef = useRef(null)

  const setRoute = useCallback((id) => {
    const path = '/' + id
    if (window.location.pathname !== path) {
      window.history.replaceState(null, '', path)
    }
  }, [])

  useEffect(() => {
    const isFile = window.location.protocol === 'file:'
    let id = isFile
      ? (window.location.hash || '#home').slice(1)
      : window.location.pathname.replace(/^\/+|\/+$/g, '')
    if (!SECTIONS.includes(id)) id = 'home'
    const el = document.getElementById(id)
    if (el && id !== 'home') {
      setTimeout(() => el.scrollIntoView(), 60)
    }
    setRoute(id)
  }, [setRoute])

  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return
      const currentY = window.scrollY
      headerRef.current.style.transform =
        currentY > lastScrollY.current && currentY > 120
          ? 'translateY(-100%)'
          : 'none'
      lastScrollY.current = currentY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const secObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setRoute(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -45% 0px' }
    )
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) secObs.observe(el)
    })
    return () => secObs.disconnect()
  }, [setRoute])

  useEffect(() => {
    const handlePopState = () => {
      const isFile = window.location.protocol === 'file:'
      let id = isFile
        ? (window.location.hash || '#home').slice(1)
        : window.location.pathname.replace(/^\/+|\/+$/g, '')
      if (!SECTIONS.includes(id)) id = 'home'
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  return (
    <>
      <ParticleBackground />
      <CustomCursor />
      <Header ref={headerRef} />
      <Sidebar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
      </main>
      <Footer />
    </>
  )
}

export default App
