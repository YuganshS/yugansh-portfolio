import { motion } from 'framer-motion'
import './Experience.css'

const EXPERIENCES = [
  {
    date: 'OCT 2023 — JUL 2024',
    title: 'Associate Analyst — Deloitte USI, Hyderabad',
    role: 'Associate Analyst',
    items: [
      'Developed and maintained backend logic, reports, OData services, and integration components supporting enterprise business workflows.',
      'Supported the software delivery lifecycle across development, QA, and production, including debugging, validation, testing, documentation, and controlled releases.',
      'Investigated defects and production issues, identified root causes, validated fixes before deployment, and documented outcomes to improve release quality.',
      'Collaborated with developers, QA teams, consultants, and business stakeholders to translate requirements into maintainable technical deliverables.',
    ],
    badges: ['Python', 'SQL', 'REST APIs', 'OData Services', 'Flask', 'Git', 'Jira', 'Agile / Scrum'],
    image: '/deloitee.jpeg',
    fallback: '🏢',
  },
]

const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

export default function Experience() {
  return (
    <section id="experience">
      <h2 className="sec-title">
        <span className="num">04.</span> Professional Experience
      </h2>

      {EXPERIENCES.map((exp, i) => (
        <motion.div
          key={i}
          className="exp-card"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="exp-visual">
            <img
              src={exp.image}
              alt={exp.title}
              onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
            />
            <span className="exp-fallback" style={{ display: 'none' }}>{exp.fallback}</span>
          </div>
          <div>
            <p className="exp-date">{exp.date}</p>
            <h3 className="exp-title">{exp.title}</h3>
            <div className="exp-role">
              <div className="role-head">
                <span>👥</span> {exp.role}
              </div>
              <ul>
                {exp.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="badges">
              {exp.badges.map((b) => (
                <span key={b} className="badge">{b}</span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  )
}
