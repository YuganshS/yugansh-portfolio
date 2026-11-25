import { useEffect, useState } from 'react'
import { SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa6'
import { MdEmail, MdPhone } from 'react-icons/md'
import './Footer.css'

export default function Footer() {
  const [year, setYear] = useState('')
  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-contact">
          <a href="mailto:yuganshsuryavanshi@gmail.com">
            <MdEmail /> yuganshsuryavanshi@gmail.com
          </a>
          <a href="tel:+353892135843">
            <MdPhone /> +353 89 213 5843
          </a>
        </div>
        <div className="foot-social">
          <a href="https://github.com/YuganshS" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <SiGithub />
          </a>
          <a href="https://www.linkedin.com/in/yugansh-suryavanshi/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
        <p>
          Designed &amp; Built by <a href="#home">Yugansh Suryavanshi</a> — &copy; {year}
        </p>
      </div>
    </footer>
  )
}
