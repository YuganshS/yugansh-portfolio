import { useEffect, useRef } from 'react'

export default function ParticleBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let W, H, particles
    const isTouch = window.matchMedia('(pointer:coarse)').matches
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const COUNT = isTouch ? 30 : 50
    const mouse = { x: -9999, y: -9999 }
    let animId

    function resize() {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    resize()

    function make() {
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 2.2 + 0.8,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        o: Math.random() * 0.5 + 0.15,
      }
    }
    particles = Array.from({ length: COUNT }, make)

    const handleMouseMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY }
    const handleMouseLeave = () => { mouse.x = -9999; mouse.y = -9999 }

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    function draw() {
      ctx.clearRect(0, 0, W, H)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy

        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const d = Math.hypot(dx, dy)
        if (d < 140 && d > 0.01) {
          const f = ((140 - d) / 140) * 1.6
          p.x += (dx / d) * f
          p.y += (dy / d) * f
        }

        if (p.x < -10) p.x = W + 10
        if (p.x > W + 10) p.x = -10
        if (p.y < -10) p.y = H + 10
        if (p.y > H + 10) p.y = -10

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(100,255,218,${p.o})`
        ctx.fill()
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < 110) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(100,255,218,${(1 - d / 110) * 0.14})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
        if (!isTouch) {
          const a = particles[i]
          const d = Math.hypot(a.x - mouse.x, a.y - mouse.y)
          if (d < 160) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.strokeStyle = `rgba(100,255,218,${(1 - d / 160) * 0.22})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }
      if (!reduceMotion) animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}
    />
  )
}
