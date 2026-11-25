import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import './Hero.css'

const ROLES = [
  'Software Engineer.',
  'Full-Stack & AI Engineer.',
  'RAG & Computer Vision.',
  'Cloud Native / DevOps.',
  'Oracle OCI GenAI Certified.',
]

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function Hero() {
  const [typed, setTyped] = useState('')
  const ri = useRef(0)
  const ci = useRef(0)
  const deleting = useRef(false)

  useEffect(() => {
    let timeout
    function tick() {
      const word = ROLES[ri.current]
      setTyped(word.slice(0, ci.current))
      if (!deleting.current) {
        if (ci.current < word.length) {
          ci.current++
          timeout = setTimeout(tick, 90)
        } else {
          deleting.current = true
          timeout = setTimeout(tick, 1600)
        }
      } else {
        if (ci.current > 0) {
          ci.current--
          timeout = setTimeout(tick, 45)
        } else {
          deleting.current = false
          ri.current = (ri.current + 1) % ROLES.length
          timeout = setTimeout(tick, 350)
        }
      }
    }
    tick()
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section className="hero" id="home">
      <motion.div
        className="hero-left"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.p className="hello" variants={fadeUp}>
          Hello, I'm
        </motion.p>
        <motion.h1 variants={fadeUp}>Yugansh Suryavanshi.</motion.h1>
        <motion.div className="typed-line" variants={fadeUp}>
          <span>{typed}</span>
          <span className="cursor">|</span>
        </motion.div>
        <motion.a
          className="btn"
          href="mailto:yuganshsuryavanshi@gmail.com"
          variants={fadeUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Let's Connect!
        </motion.a>
      </motion.div>
      <motion.div
        className="hero-right"
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.9, delay: 0.5, ease: 'easeOut' }}
      >
        <div className="blob">
          <img
            src="/image.png"
            alt="Yugansh Suryavanshi"
            onError={(e) => { e.target.style.display = 'none' }}
          />
          <div className="blob-fallback">YS</div>
        </div>
      </motion.div>
    </section>
  )
}
