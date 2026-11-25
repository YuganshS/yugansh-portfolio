import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Certifications.css'

const CERTS = [
  {
    brand: 'IBM SkillsBuild',
    brandColor: '#0f62fe',
    title: 'Getting Started with Enterprise-grade AI',
    issuer: 'Yugansh Suryavanshi',
    date: 'IBM SkillsBuild • Enterprise AI',
    credential: null,
    image: '/images/cert-ibm-skillsbuild.png',
  },
  {
    brand: 'udemy',
    brandColor: '#a435f0',
    title: 'Node with React: Fullstack Web Development',
    issuer: 'Yugansh Suryavanshi',
    date: 'Issued 2 May 2024 • Instructor: Stephen Grider',
    credential: 'https://www.udemy.com/certificate/UC-b9d9adc5-bf46-4964-a41a-190b15284e4/',
    image: '/images/cert-udemy-node-react.png',
  },
  {
    brand: 'Oracle',
    brandColor: '#c74634',
    title: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
    issuer: 'Yugansh Suryavanshi',
    date: 'Issued 22 Oct 2025 • ID: 3232212570CI25GAIOCP',
    credential: null,
    image: '/images/cert-oracle-genai.png',
  },
  {
    brand: 'The Linux Foundation',
    brandColor: '#f5a623',
    title: 'Inclusive Open Source Community Orientation (LFC102)',
    issuer: 'Yugansh Suryavanshi',
    date: 'Issued 4 Aug 2026 • ID: LF-bsygl3kdjd',
    credential: null,
    image: '/images/cert-linux-foundation-lfc102.png',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const card = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Certifications() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <section id="certification">
      <h2 className="sec-title">
        <span className="num">06.</span> Certifications
      </h2>
      <motion.div
        className="cert-grid"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {CERTS.map((cert, i) => (
          <motion.div
            key={i}
            className="cert-card"
            variants={card}
            whileHover={{ y: -5 }}
          >
            <div
              className="cert-thumb"
              onClick={() => setLightbox(cert.image)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setLightbox(cert.image)}
            >
              <img src={cert.image} alt={`${cert.title} certificate`} />
              <div className="cert-thumb-overlay">View Certificate</div>
            </div>
            <div className="cert-content">
              <div>
                <div className="brand" style={{ color: cert.brandColor }}>{cert.brand}</div>
                <div className="small">Certificate of Completion</div>
                <h4>{cert.title}</h4>
              </div>
              <div>
                <div className="who">{cert.issuer}</div>
                <div className="date">{cert.date}</div>
                <div className="cert-links">
                  <button className="view" onClick={() => setLightbox(cert.image)}>
                    View Certificate
                  </button>
                  {cert.credential && (
                    <a className="view" href={cert.credential} target="_blank" rel="noopener noreferrer">
                      Show credential ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="lightbox-close" onClick={() => setLightbox(null)}>✕</button>
              <img src={lightbox} alt="Certificate" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
