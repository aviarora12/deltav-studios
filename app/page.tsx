const partnershipModes = [
  {
    mode: 'MODE: EMBEDDED',
    focus: 'Fractional CMO ownership + fully embedded execution infrastructure.',
    details:
      'Run as an extension of your leadership team across channel strategy, creative systems, and revenue ops.'
  },
  {
    mode: 'MODE: ENGINE',
    focus: 'High-output paid acquisition focused on Meta + Google scale velocity.',
    details:
      'Built for founders needing immediate throughput, rapid creative iteration, and media buying precision.'
  },
  {
    mode: 'MODE: ARCHITECT',
    focus: 'Strategic blueprinting for margins, growth sequencing, and operational leverage.',
    details:
      'For teams that need a decisive operating model before deploying capital.'
  }
];

const missionReports = [
  {
    classification: '[TOP SECRET]',
    deltaRevenue: '+$1.2M',
    deltaRoas: '+2.8x',
    objective:
      'Stabilize customer acquisition while eliminating [REDACTED] spend fragmentation across channels.',
    outcome:
      'Deployed a structured paid media command center and unlocked predictable scaling in 120 days.'
  },
  {
    classification: '[CLASSIFIED]',
    deltaRevenue: '+$860K',
    deltaRoas: '+1.9x',
    objective:
      'Rebuild measurement fidelity and replace legacy [REDACTED] creative workflows with modular testing.',
    outcome:
      'Converted fragmented campaign ops into a repeatable engine with tighter CAC thresholds.'
  },
  {
    classification: '[TOP SECRET]',
    deltaRevenue: '+$2.4M',
    deltaRoas: '+3.4x',
    objective:
      'Engineer a full-funnel growth stack to neutralize [REDACTED] conversion volatility.',
    outcome:
      'Integrated acquisition + retention programs to produce durable margin expansion at scale.'
  }
];

const logos = ['NOVA COMMERCE', 'VECTOR LABS', 'AURORA SYSTEMS', 'KINETIC BRANDS', 'ORBITAL HEALTH'];

const redactText = (text: string) => {
  return text.split(/(\[REDACTED\])/g).map((chunk, index) => {
    if (chunk === '[REDACTED]') {
      return (
        <span
          key={`redacted-${index}`}
          className="group/redact relative cursor-crosshair bg-zinc-800 px-1 text-transparent transition-colors duration-300 hover:text-zinc-100"
        >
          REDACTED
          <span className="absolute inset-0 flex items-center justify-center font-mono text-[10px] tracking-[0.2em] text-zinc-500 opacity-100 transition-opacity duration-300 group-hover/redact:opacity-0">
            ███████
          </span>
        </span>
      );
    }

    return <span key={`chunk-${index}`}>{chunk}</span>;
  });
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-obsidian px-6 py-10 text-zinc-100 md:px-12">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:100%_4px] opacity-20" />
      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-14">
        <header className="sticky top-4 z-10 border border-stealth bg-black/75 px-4 py-3 backdrop-blur-sm">
          <nav className="flex flex-wrap items-center justify-between gap-4">
            <p className="font-mono text-sm tracking-[0.2em] text-zinc-200">DELTA V STUDIOS</p>
            <div className="flex flex-wrap gap-4 font-mono text-xs tracking-[0.15em] text-zinc-400">
              <a href="#hero" className="transition hover:text-alert">OVERVIEW</a>
              <a href="#logos" className="transition hover:text-alert">LOGOS</a>
              <a href="#about" className="transition hover:text-alert">ABOUT</a>
              <a href="#modes" className="transition hover:text-alert">MODES</a>
              <a href="#reports" className="transition hover:text-alert">REPORTS</a>
              <a href="#briefing" className="transition hover:text-alert">BRIEFING</a>
            </div>
          </nav>
        </header>

        <section id="hero" className="border border-stealth bg-black/40 p-8 md:p-12">
          <p className="mb-4 font-mono text-xs tracking-[0.25em] text-alert">TACTICAL OVERVIEW</p>
          <h1 className="max-w-4xl font-mono text-4xl uppercase leading-tight md:text-6xl">
            Delta V Studios. Your Full Stack Growth Partner.
          </h1>
          <p className="mt-6 max-w-3xl text-sm text-zinc-300 md:text-base">
            We don&apos;t just run ads. We engineer growth infrastructure. This is your secret weapon for P&amp;L
            optimization and market dominance.
          </p>
          <button className="mt-8 border border-alert bg-alert px-6 py-3 font-mono text-sm tracking-[0.15em] text-black transition hover:bg-black hover:text-alert">
            REQUEST MISSION BRIEFING
          </button>
        </section>

        <section id="logos" className="border border-stealth bg-black/30 py-4">
          <p className="px-6 pb-3 font-mono text-xs tracking-[0.2em] text-alert">ALLIED OPERATORS</p>
          <div className="logo-marquee overflow-hidden border-y border-stealth py-4">
            <div className="logo-track flex w-max items-center gap-10 px-6 font-mono text-sm tracking-[0.22em] text-zinc-400">
              {[...logos, ...logos].map((logo, idx) => (
                <span key={`${logo}-${idx}`}>{logo}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="border border-stealth bg-black/40 p-8 md:p-12">
          <p className="font-mono text-xs tracking-[0.25em] text-alert">ABOUT // SKUNKWORKS CELL</p>
          <h2 className="mt-2 font-mono text-3xl uppercase">Built for Operators, Not Vanity Metrics</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <article className="border border-stealth p-5">
              <p className="font-mono text-xs tracking-[0.2em] text-zinc-500">01 // SYSTEMS FIRST</p>
              <p className="mt-3 text-sm text-zinc-300">
                We design growth as infrastructure: channel architecture, creative loops, and measurement discipline that
                compounds instead of breaking at scale.
              </p>
            </article>
            <article className="border border-stealth p-5">
              <p className="font-mono text-xs tracking-[0.2em] text-zinc-500">02 // P&L ORIENTATION</p>
              <p className="mt-3 text-sm text-zinc-300">
                Every sprint maps back to contribution margin and cash efficiency—because growth without financial control
                is just expensive noise.
              </p>
            </article>
            <article className="border border-stealth p-5">
              <p className="font-mono text-xs tracking-[0.2em] text-zinc-500">03 // EXECUTION VELOCITY</p>
              <p className="mt-3 text-sm text-zinc-300">
                Strategy and execution stay in one room. That means faster decisions, tighter feedback loops, and fewer
                dropped handoffs.
              </p>
            </article>
          </div>
        </section>

        <section id="modes" className="space-y-6">
          <header>
            <p className="font-mono text-xs tracking-[0.25em] text-alert">PARTNERSHIP OPTIONS</p>
            <h2 className="mt-2 font-mono text-3xl uppercase">Operational Profiles</h2>
          </header>
          <div className="grid gap-6 lg:grid-cols-3">
            {partnershipModes.map((mode) => (
              <article
                key={mode.mode}
                className="group relative border border-stealth bg-black/60 p-6 transition duration-300 hover:border-alert hover:shadow-tactical"
              >
                <div className="pointer-events-none absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:18px_18px]" />
                <p className="absolute right-4 top-4 font-mono text-[10px] tracking-[0.2em] text-alert">Status: ACTIVE</p>
                <div className="relative space-y-4">
                  <h3 className="font-mono text-xl uppercase">{mode.mode}</h3>
                  <p className="text-sm text-zinc-300">{mode.focus}</p>
                  <p className="border-t border-stealth pt-4 text-sm text-zinc-400">{mode.details}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="reports" className="space-y-6">
          <header>
            <p className="font-mono text-xs tracking-[0.25em] text-alert">MISSION REPORTS</p>
            <h2 className="mt-2 font-mono text-3xl uppercase">Case Study Dossier</h2>
          </header>
          <div className="grid gap-6 lg:grid-cols-3">
            {missionReports.map((report, idx) => (
              <article key={idx} className="space-y-4 border border-stealth bg-black/60 p-6">
                <p className="font-mono text-xs tracking-[0.2em] text-alert">{report.classification}</p>
                <div className="grid grid-cols-2 gap-2 border-y border-stealth py-4 font-mono text-sm">
                  <div>
                    <p className="text-zinc-500">Δ Revenue</p>
                    <p className="text-lg text-zinc-100">{report.deltaRevenue}</p>
                  </div>
                  <div>
                    <p className="text-zinc-500">Δ ROAS</p>
                    <p className="text-lg text-zinc-100">{report.deltaRoas}</p>
                  </div>
                </div>
                <div>
                  <p className="mb-1 font-mono text-xs tracking-[0.18em] text-zinc-400">OBJECTIVE</p>
                  <p className="text-sm text-zinc-300">{redactText(report.objective)}</p>
                </div>
                <div>
                  <p className="mb-1 font-mono text-xs tracking-[0.18em] text-zinc-400">OUTCOME</p>
                  <p className="text-sm text-zinc-300">{report.outcome}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="briefing" className="border border-stealth bg-black/40 p-8 md:p-12">
          <header className="mb-8">
            <p className="font-mono text-xs tracking-[0.25em] text-alert">MISSION BRIEFING</p>
            <h2 className="mt-2 font-mono text-3xl uppercase">Extraction Channel</h2>
          </header>
          <form className="grid gap-8 md:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm text-zinc-300">
              Name / Intel Source
              <input
                type="text"
                className="border-b border-stealth bg-transparent pb-2 text-zinc-100 outline-none transition focus:border-alert"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-zinc-300">
              Objective
              <select className="border-b border-stealth bg-transparent pb-2 text-zinc-100 outline-none transition focus:border-alert">
                <option className="bg-black">Scale Channels</option>
                <option className="bg-black">Optimize Margins</option>
                <option className="bg-black">Full Growth Partner</option>
              </select>
            </label>
            <label className="flex flex-col gap-2 text-sm text-zinc-300">
              Current Velocity
              <select className="border-b border-stealth bg-transparent pb-2 text-zinc-100 outline-none transition focus:border-alert">
                <option className="bg-black">&lt;$20k</option>
                <option className="bg-black">$20k-$100k</option>
                <option className="bg-black">$100k+</option>
              </select>
            </label>
            <label className="flex flex-col gap-2 text-sm text-zinc-300 md:col-span-2">
              Message / Intel
              <textarea
                rows={4}
                className="border-b border-stealth bg-transparent pb-2 text-zinc-100 outline-none transition focus:border-alert"
              />
            </label>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="border border-alert bg-alert px-6 py-3 font-mono text-sm uppercase tracking-[0.2em] text-black transition hover:bg-black hover:text-alert"
              >
                Initialize Launch Sequence
              </button>
              <p className="mt-4 font-mono text-xs tracking-[0.2em] text-zinc-500">DECRYPTING SUBMISSION...</p>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
