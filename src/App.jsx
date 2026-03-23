import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Navbar } from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="container mx-auto px-6 py-12">
        <section id="center" className="flex flex-col items-center">
          <div className="hero relative mb-8">
            <img src={heroImg} className="base" width="170" height="179" alt="" />
            <img src={reactLogo} className="framework absolute -bottom-4 -right-4 w-12" alt="React logo" />
            <img src={viteLogo} className="vite absolute -top-4 -left-4 w-12" alt="Vite logo" />
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Get started</h1>
            <p className="text-slate-500 dark:text-slate-400 mb-8">
              Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
            </p>
          </div>
          <button
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            onClick={() => setCount((count) => count + 1)}
          >
            Count is {count}
          </button>
        </section>

        <div className="ticks my-12 h-px bg-slate-200 dark:bg-slate-800"></div>

        <section id="next-steps" className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div id="docs">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <span className="w-8 h-8 flex items-center justify-center bg-blue-100 dark:bg-blue-900 rounded-lg">📚</span>
              Documentation
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mb-4">Your questions, answered</p>
            <ul className="space-y-2">
              <li>
                <a href="https://vite.dev/" target="_blank" className="flex items-center gap-2 hover:text-blue-500 transition-colors">
                  <img className="w-5" src={viteLogo} alt="" />
                  Explore Vite
                </a>
              </li>
              <li>
                <a href="https://react.dev/" target="_blank" className="flex items-center gap-2 hover:text-blue-500 transition-colors">
                  <img className="w-5" src={reactLogo} alt="" />
                  Learn more
                </a>
              </li>
            </ul>
          </div>
          <div id="social">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <span className="w-8 h-8 flex items-center justify-center bg-violet-100 dark:bg-violet-900 rounded-lg">🌐</span>
              Connect with us
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mb-4">Join the Vite community</p>
            <ul className="grid grid-cols-2 gap-4">
              <li>
                <a href="https://github.com/vitejs/vite" target="_blank" className="flex items-center gap-2 hover:text-blue-500 transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://chat.vite.dev/" target="_blank" className="flex items-center gap-2 hover:text-blue-500 transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href="https://x.com/vite_js" target="_blank" className="flex items-center gap-2 hover:text-blue-500 transition-colors">
                  X.com
                </a>
              </li>
              <li>
                <a href="https://bsky.app/profile/vite.dev" target="_blank" className="flex items-center gap-2 hover:text-blue-500 transition-colors">
                  Bluesky
                </a>
              </li>
            </ul>
          </div>
        </section>

        <div className="ticks my-12 h-px bg-slate-200 dark:bg-slate-800"></div>
        <section id="spacer" className="h-40"></section>
      </main>
    </div>
  )
}

export default App
