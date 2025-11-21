import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

export default function ParticlesBackground() {
  const init = async (engine) => {
    await loadFull(engine)
  }

  return (
    <Particles
      id="tsparticles"
      init={init}
      options={{
        fullScreen: { enable: false },
        background: { color: { value: 'transparent' } },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'repulse' },
            resize: true,
          },
          modes: { repulse: { distance: 100, duration: 0.4 } },
        },
        particles: {
          color: { value: '#61dafb' },
          links: { enable: true, color: '#61dafb', distance: 120, opacity: 0.2, width: 1 },
          move: { enable: true, speed: 1, outModes: { default: 'bounce' } },
          number: { density: { enable: true, area: 800 }, value: 60 },
          opacity: { value: 0.3 },
          shape: { type: 'circle' },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
      className="absolute inset-0"
    />
  )
}
