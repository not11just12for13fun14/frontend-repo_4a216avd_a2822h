import Hero from './components/Hero'
import VSCodeLayout from './components/VSCodeLayout'
import ParticlesBackground from './components/ParticlesBackground'

function App() {
  return (
    <div className="min-h-screen bg-[#0a192f] text-white">
      <div className="relative">
        <Hero />
        <div className="absolute inset-0 pointer-events-none">
          <ParticlesBackground />
        </div>
      </div>
      <VSCodeLayout />
    </div>
  )
}

export default App
