import { motion } from 'framer-motion'
import { SiGithub } from 'react-icons/si'
import './Projects.css'

const PROJECTS = [
  {
    id: 1,
    title: 'AI-powered GitHub Issue Triage System',
    subtitle: 'AI / Open Source',
    desc: 'An AI-assisted issue triage platform for the Oppia Community Dashboard that automates GitHub issue labeling. Processed 6,400+ historical GitHub issues using ChromaDB embeddings and kNN similarity search, combining LLMs with similarity search to recommend labels with confidence scores and explanations. Integrated GitHub REST APIs for automated labeling after maintainer approval.',
    tech: ['FastAPI', 'Next.js', 'Firestore', 'ChromaDB', 'HuggingFace', 'GitHub REST API'],
    icon: 'A',
    image: '/project2.png',
    link: 'https://oppia-community-dashboard.com/dashboard/overview',
  },
  {
    id: 2,
    title: 'Yoga Studio — AI Physiotherapy & Automated Exercise Assessment',
    subtitle: 'AI / Computer Vision',
    desc: 'A real-time camera AI assessment room using MediaPipe Holistic pose tracking and a trained exercise classifier to evaluate joint angles, range of motion and form. Flags faulty joints with pulsating red halos, gives throttled spoken feedback, counts repetitions and scores form from 0–100%, with user dashboards, session reports, an exercise library and guided yoga flows.',
    tech: ['Python', 'Flask', 'OpenCV', 'MediaPipe', 'Scikit-learn', 'SQLite', 'gTTS', 'JavaScript'],
    icon: 'Y',
    image: '/project4.png',
    link: 'https://ai-enabled-automated-physiotherapy-pose.onrender.com/',
  },
  {
    id: 3,
    title: 'FinAlliance',
    subtitle: 'Cross-Bank Fraud Detection',
    desc: 'A federated-learning platform for detecting coordinated fraud across banks without sharing raw transaction data. Tackles credit card fraud, mule accounts, identity theft and money laundering through a dashboard, fraud check workflow and FL console for collaborative model insights.',
    tech: ['Federated Learning', 'Fraud Detection', 'FL Console', 'Web App'],
    icon: 'F',
    image: '/project5.png',
    link: 'https://glowing-frangollo-58e2c8.netlify.app/',
  },
  {
    id: 4,
    title: 'Wanderlust - Travel Blog',
    subtitle: 'MERN Stack + DevOps',
    desc: 'An end-to-end three-tier MERN stack travel blog application deployed on AWS EKS. Features a complete CI/CD pipeline with Jenkins, Docker containerization, OWASP dependency scanning, SonarQube quality gates, Trivy filesystem scans, ArgoCD for GitOps-based continuous delivery, Redis caching, and monitoring via Prometheus & Grafana using Helm charts.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Docker', 'Jenkins', 'Kubernetes', 'ArgoCD', 'AWS EKS', 'Helm'],
    icon: 'W',
    image: '/project1.png',
    link: null,
    repo: 'https://github.com/YuganshS/Wanderlust---Travel-Blog',
  },
  {
    id: 5,
    title: 'StudySync AI',
    subtitle: 'Full-Stack Educational Portal',
    desc: 'A full-stack portal bridging educators and students through modern AI, real-time material ingestion, vector RAG search, and automated announcement dispatch. The teacher portal provides live analytics, material management, multi-file uploads, and notice broadcasts, while the student portal offers a context-aware RAG chatbot, semantic study search, streaming answers, and direct file downloads.',
    tech: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB Atlas', 'Cloudflare Workers AI', 'ChromaDB', 'Cloudinary'],
    icon: 'S',
    image: '/project6.png',
    link: 'https://study-sync-gdfk.vercel.app/',
  },
  {
    id: 6,
    title: 'BrandGuardian-AI',
    subtitle: 'AI / Video Compliance',
    desc: 'An AI-powered video compliance auditing system that analyzes multimedia content (video transcripts and OCR text) against regulatory rules using RAG architecture. Multi-agent orchestration with LangGraph, Azure Video Indexer for transcript/OCR extraction, compliance reasoning via Azure OpenAI (GPT-4o), knowledge retrieval with Azure AI Search + OpenAI embeddings, and observability through LangSmith & Azure Application Insights.',
    tech: ['Azure OpenAI', 'LangGraph', 'LangSmith', 'Azure AI Search', 'Video Indexer', 'FastAPI', 'RAG'],
    icon: 'B',
    image: '/project3.png',
    link: null,
    repo: 'https://github.com/YuganshS/BrandGuardian-AI',
  },
]

const cardVariants = {
  hidden: (i) => ({
    opacity: 0,
    x: i % 2 === 0 ? -60 : 60,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="sec-title">
        <span className="num">03.</span> Featured Projects
      </h2>

      {PROJECTS.map((project, i) => (
        <motion.div
          key={project.id}
          className={`project ${i % 2 === 1 ? 'alt' : ''}`}
          custom={i}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="shot">
            <img
              src={project.image}
              alt={project.title}
              onError={(e) => { e.target.style.display = 'none' }}
            />
            <div className="shot-fallback">{project.icon}</div>
          </div>
          <div className="info">
            <p className="p-over">{project.subtitle}</p>
            <h3 className="p-name">{project.title}</h3>
            <div className="p-desc">{project.desc}</div>
            <div className="p-tech">
              {project.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <div className="p-links">
              {project.link && (
                <a
                  className="live-link"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} live demo`}
                >
                  Live demo ↗
                </a>
              )}
              {project.repo ? (
                <a
                  className="repo-link"
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} repository`}
                >
                  <SiGithub /> GitHub
                </a>
              ) : !project.link && (
                <span className="project-type">GitHub link coming soon</span>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  )
}
