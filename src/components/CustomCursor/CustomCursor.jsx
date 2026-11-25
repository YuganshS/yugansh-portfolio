import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const trailRefs = useRef([])
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 })
  const dotPos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 })

  useEffect(() => {
    if (window.matchMedia('(pointer:coarse)').matches ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const TRAIL = 8
    const trailPos = Array.from({ length: TRAIL }, () => ({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    }))

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }

    window.addEventListener('mousemove', handleMouseMove)

    const interactiveEls = () =>
      document.querySelectorAll('a, button, .btn, .chip, .badge, .project-card')

    const handleEnter = () => dotRef.current?.classList.add('hovering')
    const handleLeave = () => dotRef.current?.classList.remove('hovering')

    const attach = () => {
      interactiveEls().forEach((el) => {
        el.addEventListener('mouseenter', handleEnter)
        el.addEventListener('mouseleave', handleLeave)
      })
    }
    attach()
    const mutObs = new MutationObserver(attach)
    mutObs.observe(document.body, { childList: true, subtree: true })

    let animId
    function loop() {
      dotPos.current.x += (mouse.current.x - dotPos.current.x) * 0.35
      dotPos.current.y += (mouse.current.y - dotPos.current.y) * 0.35
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotPos.current.x}px,${dotPos.current.y}px) translate(-50%,-50%)`
      }

      let px = dotPos.current.x
      let py = dotPos.current.y
      trailPos.forEach((t, i) => {
        t.x += (px - t.x) * 0.3
        t.y += (py - t.y) * 0.3
        if (trailRefs.current[i]) {
          trailRefs.current[i].style.transform = `translate(${t.x}px,${t.y}px) translate(-50%,-50%)`
        }
        px = t.x
        py = t.y
      })
      animId = requestAnimationFrame(loop)
    }
    loop()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', handleMouseMove)
      mutObs.disconnect()
      interactiveEls().forEach((el) => {
        el.removeEventListener('mouseenter', handleEnter)
        el.removeEventListener('mouseleave', handleLeave)
      })
    }
  }, [])

  if (typeof window !== 'undefined' && (
    window.matchMedia('(pointer:coarse)').matches ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )) {
    return null
  }

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (trailRefs.current[i] = el)}
          className="cursor-trail"
          style={{
            width: 14 - i * 1.4,
            height: 14 - i * 1.4,
            opacity: 0.75 - i * 0.08,
          }}
        />
      ))}
    </>
  )
}
