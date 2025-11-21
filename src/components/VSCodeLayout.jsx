import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Folder, FileJson, FileCode2, FileText, Terminal, Send, Mail, Github, Linkedin } from 'lucide-react'

const tabs = [
  { id: 'projects', label: 'projects.js', icon: FileCode2 },
  { id: 'about', label: 'about.md', icon: FileText },
  { id: 'experience', label: 'experience.json', icon: FileJson },
  { id: 'contact', label: 'contact.ts', icon: Mail },
]

export default function VSCodeLayout() {
  const [active, setActive] = useState('projects')

  return (
    <section className="relative bg-[#1e1e1e] text-gray-100 py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-[260px,1fr] gap-6">
        {/* Sidebar */}
        <aside className="bg-[#252526] rounded-lg border border-white/5">
          <div className="px-4 py-3 text-sm uppercase tracking-wide text-gray-400 flex items-center gap-2 border-b border-white/5">
            <Folder size={16} /> Explorer
          </div>
          <nav className="p-2 text-sm">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActive(id)}
                className={`w-full flex items-center gap-2 px-2 py-2 rounded-md hover:bg-white/5 transition ${active===id? 'bg-white/5 text-sky-300' : 'text-gray-300'}`}
              >
                <Icon size={16} /> {label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Editor area */}
        <div className="space-y-4">
          {/* Tabs */}
          <div className="flex items-center gap-2 bg-[#252526] rounded-t-lg border border-white/5 border-b-0 px-2">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActive(id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-t-md hover:bg-white/5 transition ${active===id? 'bg-[#1e1e1e] text-sky-300 border border-white/5 border-b-0 -mb-px' : 'text-gray-300'}`}
              >
                <Icon size={16} /> {label}
              </button>
            ))}
          </div>

          {/* Editor content */}
          <div className="bg-[#1e1e1e] rounded-b-lg rounded-tr-lg border border-white/5 p-5 min-h-[360px]">
            <AnimatePresence mode="wait">
              {active === 'projects' && (
                <motion.div key="projects" initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-8}} transition={{duration:0.25}}>
                  <ProjectsContent />
                </motion.div>
              )}
              {active === 'about' && (
                <motion.div key="about" initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-8}} transition={{duration:0.25}}>
                  <AboutContent />
                </motion.div>
              )}
              {active === 'experience' && (
                <motion.div key="experience" initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-8}} transition={{duration:0.25}}>
                  <ExperienceContent />
                </motion.div>
              )}
              {active === 'contact' && (
                <motion.div key="contact" initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-8}} transition={{duration:0.25}}>
                  <ContactContent />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Terminal footer */}
          <div className="bg-[#0e0e0e] rounded-lg border border-white/5 p-3 text-sm font-mono text-green-400 flex items-center gap-2">
            <Terminal size={16} className="text-green-500" />
            devang@portfolio:~$ npm run build
            <span className="w-2 h-4 bg-green-400 ml-1 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Badge({ children }) {
  return <span className="inline-flex items-center rounded bg-sky-400/10 text-sky-300 px-2 py-0.5 text-xs border border-sky-400/20 mr-2 mb-2">{children}</span>
}

function ProjectsContent() {
  return (
    <div className="space-y-6">
      <div className="bg-[#111] border border-white/5 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-sky-300">AnimeWatchlist Manager</h3>
        <p className="text-gray-300 mt-2">React + Supabase app to curate and track anime watchlists with auth and real-time updates.</p>
        <div className="mt-3">
          <Badge>React</Badge><Badge>Supabase</Badge><Badge>Vite</Badge>
        </div>
        <div className="mt-4 flex gap-3">
          <a className="px-3 py-1.5 rounded bg-sky-600/20 border border-sky-400/30 text-sky-200 hover:shadow-[0_0_18px_rgba(56,189,248,0.35)] hover:scale-[1.02] transition" href="#">Live Demo</a>
          <a className="px-3 py-1.5 rounded bg-white/5 border border-white/10 text-gray-200 hover:bg-white/10 transition" href="#">Code Snippet</a>
        </div>
      </div>

      <div className="bg-[#111] border border-white/5 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-sky-300">Ayursutra Patient Portal</h3>
        <p className="text-gray-300 mt-2">High-fidelity prototype in Figma for a patient management portal with intuitive UX.</p>
        <div className="mt-3">
          <Badge>Figma</Badge><Badge>Design System</Badge>
        </div>
        <div className="mt-4 flex gap-3">
          <a className="px-3 py-1.5 rounded bg-sky-600/20 border border-sky-400/30 text-sky-200 hover:shadow-[0_0_18px_rgba(56,189,248,0.35)] hover:scale-[1.02] transition" href="#">Live Demo</a>
          <a className="px-3 py-1.5 rounded bg-white/5 border border-white/10 text-gray-200 hover:bg-white/10 transition" href="#">Code Snippet</a>
        </div>
      </div>
    </div>
  )
}

function ExperienceContent() {
  return (
    <pre className="text-sm bg-[#0b0b0b] p-4 rounded border border-white/5 overflow-auto">
{`{
  "experience": [
    {
      "role": "Intern",
      "company": "Ybi Foundation",
      "period": "2023",
      "focus": ["Full-stack", "Projects", "Collaboration"]
    },
    {
      "role": "Training",
      "company": "Eduskill Android & Zscaler",
      "period": "2023",
      "focus": ["Android", "Cloud Security"]
    }
  ]
}`}
    </pre>
  )
}

function AboutContent() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sky-300 font-semibold mb-2">Extensions</h3>
        <ul className="grid sm:grid-cols-2 gap-2 text-sm">
          {['ESLint','Prettier','Tailwind IntelliSense','Mongodb','Docker','GitLens','Material Icon Theme'].map((ext) => (
            <li key={ext} className="bg-[#0b0b0b] border border-white/5 rounded px-3 py-2 flex items-center justify-between">
              <span>{ext}</span>
              <span className="text-xs text-gray-400">Enabled</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-sky-300 font-semibold mb-2">Education</h3>
        <ul className="text-sm list-disc list-inside text-gray-300">
          <li>B.Tech in Computer Science</li>
          <li>Coursework: Web Dev, DBMS, OS, CN</li>
        </ul>
      </div>
      <div>
        <h3 className="text-sky-300 font-semibold mb-2">Leadership</h3>
        <ul className="text-sm list-disc list-inside text-gray-300">
          <li>IEEE Student Branch - Executive Member</li>
        </ul>
      </div>
    </div>
  )
}

function ContactContent() {
  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const submit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    const res = await fetch(`${backend}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    const data = await res.json()
    alert(data.success ? 'Message sent!' : 'Failed: ' + (data.detail || ''))
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-3">
        <input name="name" required placeholder="Name" className="bg-[#0b0b0b] border border-white/10 rounded px-3 py-2 focus:outline-none focus:border-sky-400/50" />
        <input name="email" required type="email" placeholder="Email" className="bg-[#0b0b0b] border border-white/10 rounded px-3 py-2 focus:outline-none focus:border-sky-400/50" />
      </div>
      <input name="subject" placeholder="Subject" className="w-full bg-[#0b0b0b] border border-white/10 rounded px-3 py-2 focus:outline-none focus:border-sky-400/50" />
      <input name="company" placeholder="Company" className="w-full bg-[#0b0b0b] border border-white/10 rounded px-3 py-2 focus:outline-none focus:border-sky-400/50" />
      <textarea name="message" required rows={4} placeholder="Message" className="w-full bg-[#0b0b0b] border border-white/10 rounded px-3 py-2 focus:outline-none focus:border-sky-400/50" />
      <button type="submit" className="inline-flex items-center gap-2 bg-sky-600/20 border border-sky-400/30 text-sky-200 rounded px-4 py-2 hover:shadow-[0_0_18px_rgba(56,189,248,0.35)] hover:scale-[1.02] transition">
        <Send size={16} /> Send
      </button>
    </form>
  )
}
