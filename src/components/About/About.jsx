import { motion } from 'framer-motion'
import './About.css'

const TOOLS = [
  'Python', 'JavaScript / TypeScript', 'React', 'Next.js',
  'Node.js / Express', 'Flask / FastAPI', 'MongoDB / SQL', 'Docker / Kubernetes',
  'Jenkins / ArgoCD', 'AWS EKS', 'Cloudflare Workers AI', 'ChromaDB / RAG',
  'MediaPipe / OpenCV', 'Azure OpenAI', 'Git / GitHub', 'OAuth2 / JWT',
]

export default function About() {
  return (
    <section id="about">
      <h2 className="sec-title">
        <span className="num">02.</span> About Me
      </h2>
      <motion.div
        className="about-grid"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <div className="about-img">
          <img
            src="/image2.jpeg"
            alt="Yugansh Suryavanshi"
            onError={(e) => { e.target.style.display = 'none' }}
          />
          <div className="about-img-fallback">YS</div>
        </div>
        <div className="about-text">
          <p>
            I'm a <span className="hl">Software Engineer</span> with an{' '}
            <span className="hl">MSc in Computing Science (First Class Honours)</span> from
            University College Cork, building full-stack applications, user-facing dashboards,
            REST APIs and enterprise software.
          </p>
          <p>
            My projects span <span className="hl">AI and computer vision</span> — RAG-powered
            educational portals, GitHub issue triage and real-time physiotherapy pose assessment —
            alongside <span className="hl">cloud-native delivery</span> with Docker, Kubernetes,
            Jenkins and ArgoCD on AWS EKS.
          </p>
          <p>
            Formerly an <span className="hl">Associate Analyst at Deloitte USI</span>, I supported
            business-critical systems across development, QA and production. I'm certified in{' '}
            <span className="hl">Oracle OCI Generative AI</span>,{' '}
            <span className="hl">IBM Enterprise-grade AI</span> and{' '}
            <span className="hl">Linux Foundation LFC102</span>. Technologies I work with:
          </p>
          <ul className="tools">
            {TOOLS.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  )
}
