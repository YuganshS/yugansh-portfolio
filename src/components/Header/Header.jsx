import { forwardRef, useState, useEffect } from 'react'
import './Header.css'

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education & Skills' },
  { id: 'certification', label: 'Certifications' },
]

const Header = forwardRef(function Header(_, ref) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      setProgress(max > 0 ? (doc.scrollTop / max) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -45% 0px' }
    )
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  const handleClick = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    const path = '/' + id
    if (window.location.pathname !== path) {
      window.history.replaceState(null, '', path)
    }
  }

  return (
    <header ref={ref} id="hdr">
      <a
        className="logo"
        href="#home"
        title="Yugansh Suryavanshi"
        aria-label="Yugansh Suryavanshi — back to top"
        onClick={(e) => { e.preventDefault(); handleClick('home') }}
      >
        YS
      </a>
      <button className="burger" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
        {open ? '✕' : '☰'}
      </button>
      <nav className={open ? 'open' : ''}>
        {NAV_ITEMS.map(({ id, label }, i) => (
          <a
            key={id}
            href={`#${id}`}
            className={active === id ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); handleClick(id) }}
          >
            <span className="num">{String(i + 1).padStart(2, '0')}.</span>{' '}
            {label}
          </a>
        ))}
      </nav>
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${progress / 100})` }}
        aria-hidden="true"
      />
    </header>
  )
})

export default Header
