import hero from "./assets/hero.png"
import logo from "./assets/logo.png"

export default function App() {
  return (
    <div className="radial min-h-screen text-white">
      {/* Top Nav */}
      <header className="w-full px-6 py-4 flex items-center justify-between">
  {/* Left: Logo + Text */}
     <a href="/" className="flex items-center gap-2 group">
     <img src={logo} alt="memelab.fun logo" className="w-12 h-12 object-contain" />
     <span className="text-2xl sm:text-3xl font-extrabold tracking-wide">
     <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9945FF] via-[#14F195] to-[#00C2FF]">
        memelab.fun
      </span>
    </span>
  </a>

      {/* Right: Nav */}
      <nav className="flex items-center gap-4">
       {/* X icon link */}
      <a
      href="https://x.com/memelabfun"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center w-8 h-8 rounded-md hover:opacity-90 focus:outline-none focus:ring focus:ring-cyan-400/40"
      aria-label="Follow on X"
      title="Follow on X"
      >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="currentColor"
        >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.822-5.97 6.822H1.68l7.73-8.836L1.254 2.25H8.08l4.713 6.231 5.451-6.231z"/>
      </svg>
    </a>

    {/* Join Community */}
    <a
      href="https://x.com/memelabfun"
      target="_blank"
      rel="noopener noreferrer"
      className="hidden sm:inline-flex items-center gap-2 rounded-lg px-3 py-2 bg-white/10 hover:bg-white/15 transition glass"
      >
       <span className="text-sm">Join Community</span>
      </a>
    </nav>
  </header>

      {/* Hero */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16 lg:py-20">
        <div className="grid lg:grid-cols-2 items-center gap-10">
          {/* Left: Copy */}
          <div className="space-y-6">
            {/* Bigger LAUNCHING SOON pill */}
            <div className="relative inline-flex">
            {/* Running Light Border (sirf ek line) */}
            <span className="absolute inset-0 rounded-full p-[3px] bg-[linear-gradient(90deg,#14F195,#9945FF,#00FFA3,#14F195)] bg-[length:300%_300%] animate-runningLight"></span>

            {/* Black Background Content */}
            <div className="relative flex items-center gap-2 rounded-full bg-glass px-6 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 animate-pulse"></span>
            <span className="text-black text-lg font-semibold">LAUNCHING SOON</span>
            </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
             You bring <span className="gradient-solana-1">memes</span>,<br />
             we bring <span className="gradient-solana-2">rewards</span>.
            </h1>

            <p className="text-base sm:text-lg text-white/70 max-w-xl">
              Not just whales creators get paid too. Even broke ideas can go viral.
              The fastest AI-powered meme coin launchpad on Solana.
            </p>

            {/* Buttons & waitlist removed as requested */}
          </div>

          {/* Right: Visual */}
          <div className="relative mx-auto max-w-sm sm:max-w-md">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-purple-500/20 to-cyan-400/20 blur-2xl"></div>
            {/* Bottom padding reduced */}
            <div className="relative rounded-3xl bg-black/40 p-4 sm:p-6 pb-0">
              <img
                src={hero}
                alt="Hero"
                className="block w-[260px] sm:w-[360px] lg:w-[440px] mx-auto"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}<footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-white/50 text-sm">
        © 2025 Memelab.fun · All rights reserved
      </footer>
    </div>
  )
}