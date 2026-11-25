import { motion } from 'framer-motion'
import './Education.css'

const SKILLS = [
  {
    title: 'Frontend & UI',
    chips: ['React', 'Next.js 14', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5 / CSS3', 'Framer Motion', 'Radix UI', 'Responsive UI', 'Accessibility Basics'],
  },
  {
    title: 'Backend, Data & APIs',
    chips: ['Python', 'Node.js', 'Express', 'Flask', 'FastAPI', 'Java', 'C++', 'SQL', 'MongoDB Atlas', 'SQLite', 'Firestore', 'REST APIs', 'OData Services'],
  },
  {
    title: 'AI, Vision & Vector Search',
    chips: ['Cloudflare Workers AI', 'ChromaDB', 'RAG', 'Azure OpenAI', 'LangGraph', 'LangSmith', 'HuggingFace', 'MediaPipe', 'OpenCV', 'Scikit-learn', 'gTTS', 'Federated Learning'],
  },
  {
    title: 'Cloud, DevOps & Quality',
    chips: ['Docker', 'Kubernetes', 'Jenkins', 'ArgoCD', 'AWS EKS', 'Helm', 'GitHub Actions', 'Redis', 'Prometheus / Grafana', 'SonarQube', 'Trivy', 'Git / GitHub', 'OAuth2 / JWT', 'Testing', 'Jira / Agile'],
  },
]

const rowVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Education() {
  return (
    <section id="education">
      <h2 className="sec-title">
        <span className="num">05.</span> Education &amp; Skills
      </h2>

      <motion.div
        className="cert-row"
        variants={rowVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="cert-label">
          <span className="tag">EDUCATION</span>
          <h3>MSc</h3>
        </div>
        <div className="edu-card">
          <h4>University College Cork, Ireland</h4>
          <p className="deg">MSc in Computing Science • First Class Honours • Sept 2024 – Oct 2025</p>
          <p>Full-stack applications, REST APIs, enterprise software and secure coding.</p>
        </div>
      </motion.div>

      <motion.div
        className="cert-row"
        variants={rowVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.1 }}
      >
        <div className="cert-label">
          <span className="tag">EDUCATION</span>
          <h3>BBA</h3>
        </div>
        <div className="edu-card">
          <h4>Savitribai Phule Pune University, India</h4>
          <p className="deg">BBA in Computer Applications • Aug 2020 – Jun 2023</p>
          <p>Foundation in computer applications, programming and information systems.</p>
        </div>
      </motion.div>

      <motion.div
        className="cert-row"
        variants={rowVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.2 }}
      >
        <div className="cert-label">
          <span className="tag">SKILLS</span>
          <h3>Tech Stack</h3>
        </div>
        <div>
          {SKILLS.map((skill, i) => (
            <div key={i} className="skills-box" style={i < SKILLS.length - 1 ? { marginBottom: 18 } : {}}>
              <h4>{skill.title}</h4>
              <div className="chips">
                {skill.chips.map((chip) => (
                  <span key={chip} className="chip">{chip}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
