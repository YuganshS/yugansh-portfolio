import { motion } from 'framer-motion'
import { SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import './Sidebar.css'

export default function Sidebar() {
  return (
    <>
      <div className="side-left">
        <motion.a
          href="https://github.com/YuganshS"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          whileHover={{ y: -4, color: '#64ffda' }}
          transition={{ duration: 0.2 }}
        >
          <SiGithub />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/yugansh-suryavanshi/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          whileHover={{ y: -4, color: '#64ffda' }}
          transition={{ duration: 0.2 }}
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="mailto:yuganshsuryavanshi@gmail.com"
          aria-label="Email"
          whileHover={{ y: -4, color: '#64ffda' }}
          transition={{ duration: 0.2 }}
        >
          <MdEmail />
        </motion.a>
        <div className="side-line" />
      </div>

      <div className="side-right">
        <a href="tel:+353892135843">+353 89 213 5843</a>
        <a href="mailto:yuganshsuryavanshi@gmail.com">yuganshsuryavanshi@gmail.com</a>
        <div className="side-line" />
      </div>
    </>
  )
}
