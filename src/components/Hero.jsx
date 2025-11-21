import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import Typed from 'typed.js'

function ReactAtom() {
  return (
    <motion.svg
      width="120"
      height="120"
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className="drop-shadow-[0_0_30px_rgba(56,189,248,0.5)]"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
    >
      <circle cx="64" cy="64" r="8" fill="#61DAFB" />
      <path d="M64 16c13.255 0 24 21.49 24 48s-10.745 48-24 48S40 90.51 40 64 50.745 16 64 16Z" stroke="#61DAFB" strokeWidth="3" />
      <path d="M22 40c11.48-6.627 35.65 6.51 54 29.264 18.35 22.754 25.3 46.132 13.82 52.76C78.34 128.65 54.17 115.51 35.82 92.756 17.47 70.002 10.52 46.624 22 40Z" stroke="#61DAFB" strokeWidth="3"/>
      <path d="M22 88c-11.48-6.627-4.53-30.005 13.82-52.759C54.17 12.487 78.34-.65 89.82 5.977c11.48 6.628 4.53 30.006-13.82 52.76C57.65 81.49 33.48 94.627 22 88Z" stroke="#61DAFB" strokeWidth="3"/>
    </motion.svg>
  )
}

export default function Hero() {
  const nameEl = useRef(null)
  const titleEl = useRef(null)

  useEffect(() => {
    const nameTyped = new Typed(nameEl.current, {
      strings: ['Devang Katarkar'],
      typeSpeed: 60,
      backSpeed: 30,
      showCursor: false,
    })

    const titleTyped = new Typed(titleEl.current, {
      strings: ['Web Developer'],
      typeSpeed: 60,
      backSpeed: 30,
      startDelay: 600,
      showCursor: true,
      cursorChar: '▌',
    })

    return () => {
      nameTyped.destroy()
      titleTyped.destroy()
    }
  }, [])

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden" style={{background: 'linear-gradient(180deg, #0a192f 0%, #172a45 100%)'}}>
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/rvFZ5oikmZSIbmGQ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f]/60 via-[#0a192f]/40 to-[#172a45]/80 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <div className="text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-sky-100 drop-shadow-sm">
            <span ref={nameEl}></span>
          </h1>
          <p className="mt-3 text-sky-300 text-xl">
            <span ref={titleEl}></span>
          </p>
          <p className="mt-6 text-sky-200/80 max-w-xl">
            Enthusiastic developer passionate about creating impactful web solutions
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="group relative inline-flex items-center gap-2 rounded-md px-5 py-3 text-sky-100 bg-sky-600/20 border border-sky-400/30 hover:border-sky-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.45)] transition-all">
              <span className="transform group-hover:scale-105 transition">Contact Me</span>
            </a>
            <a href="/resume.pdf" className="group inline-flex items-center gap-2 rounded-md px-5 py-3 text-sky-100 bg-transparent border border-sky-400/30 hover:bg-sky-400/10 hover:shadow-[0_0_20px_rgba(56,189,248,0.35)] transition-all">
              Download Resume
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <ReactAtom />
        </div>
      </div>
    </section>
  )
}
