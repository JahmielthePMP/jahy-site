import Reveal from "./components/Reveal";
const projects = [
  {
    number: "01",
    title: "Monochrome Exchange Thesis",
    description:
      "A strategic analysis exploring how lessons from Binance could inform Monochrome's positioning, speed, versatility, and growth opportunities.",
    tag: "DEFI / MARKET INTELLIGENCE",
    href: "#monochrome-thesis",
  },
  {
    number: "02",
    title: "DeFi Protocol Analysis",
    description:
      "Research into protocol performance, liquidity, revenue, and market structure to identify gaps between headline metrics and underlying activity.",
    tag: "DEFI / RESEARCH",
    href: "#defi-analysis",
  },
  {
    number: "03",
    title: "Ecosystem Growth Strategy",
    description:
      "Growth strategy work focused on community development, user acquisition, partnerships, and turning attention into meaningful participation.",
    tag: "GROWTH / STRATEGY",
    href: "#ecosystem-growth",
  },
];

const notes = [
  "Liquidity is a story. TVL is only one part of it.",
  "Growth is not just getting users in. It's understanding why they stay.",
  "The best opportunities often live between what the market sees and what the data reveals.",
];

const portfolioItems = [
  {
    number: "01",
    title: "Work & Experience",
    description:
      "Roles, contributions, and experience across Web3 and community management.",
    label: "EXPERIENCE / CONTRIBUTIONS",
    href: "/portfolio/experience",
  },
  {
    number: "02",
    title: "Research & Growth",
    description:
      "DeFi research, protocol audits, market intelligence, and ecosystem growth strategy.",
    label: "RESEARCH / STRATEGY",
    href: "/portfolio/research-growth",
  },
  {
    number: "03",
    title: "Content & Cinematography",
    description:
      "Filmmaking, cinematography, video editing, and visual storytelling.",
    label: "FILM / VISUAL STORYTELLING",
    href: "/portfolio/film",
  },
];


export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0b0b0a] text-[#eee9df]">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7 md:px-12">
        <a href="#" className="text-lg font-bold tracking-[0.2em]">
          J<span className="text-[#bd9455]">.</span>PMP
        </a>

        <div className="flex gap-5 text-xs text-[#aaa69e] sm:gap-8 sm:text-sm">
          <a href="#work" className="transition hover:text-[#d4ae76]">
            Work
          </a>
          <a href="#portfolio" className="transition hover:text-[#d4ae76]">
            Portfolio
          </a>
          <a href="#notes" className="transition hover:text-[#d4ae76]">
            Notes
          </a>
          <a href="#about" className="transition hover:text-[#d4ae76]">
            About
          </a>
        </div>
      </nav>

      {/* Hero */}
      <Reveal>
  <section className="relative mx-auto flex min-h-[76vh] max-w-7xl flex-col justify-center overflow-hidden px-6 py-24 md:px-12 hero-animate">
        <div className="pointer-events-none absolute -right-32 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full border border-[#bd9455]/15 hero-glow md:right-8 md:h-[600px] md:w-[600px]">
          <div className="absolute inset-8 rounded-full border border-[#bd9455]/10" />
          <div className="absolute inset-20 rounded-full border border-[#bd9455]/10" />
          <div className="absolute inset-32 rounded-full border border-[#bd9455]/10" />
        </div>

        <div className="relative z-10 max-w-5xl">
          <p className="hero-label mb-8 text-xs tracking-[0.3em] text-[#bd9455]">
            JAHY · THE PERSONAL DOMAIN
          </p>

          <h1 className="font-medium leading-[1.05] tracking-[-0.055em]">
            <span className="block text-4xl text-[#f4f0e8] sm:text-6xl md:text-7xl lg:text-8xl">
              JAHMIEL OKON
            </span>
            <span className="mt-4 block font-serif text-xl italic tracking-[0.02em] text-[#bd9455] sm:text-2xl md:text-3xl lg:text-4xl">
              THE DUKE OF WEB3
            </span>
          </h1>

          <div className="mt-8 h-px w-24 bg-[#bd9455]/70" />

          <p className="mt-7 max-w-xl text-base leading-8 text-[#c2bcb1] md:text-lg">
            Cinema. Markets. Systems thinking.
          </p>

          <p className="mt-3 max-w-xl text-sm leading-7 text-[#8e8981] md:text-base">
            Exploring the world through visual storytelling and market
            intelligence — creating, questioning, and building with intention.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a
              href="#work"
              className="border border-[#bd9455] bg-[#bd9455] px-6 py-3 text-sm font-medium text-[#11100e] transition hover:bg-transparent hover:text-[#e0bc83]"
            >
              EXPLORE THE WORK ↘
            </a>

            <a
              href="#about"
              className="text-sm text-[#aaa69e] transition hover:text-white"
            >
              THE STORY BEHIND THE HOUSE →
            </a>
          </div>
        </div>

        <div className="relative mt-24 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/10 pt-6 text-[10px] tracking-[0.2em] text-[#77736c] sm:text-xs">
          <span>01 / FILM & CINEMATOGRAPHY</span>
          <span>02 / WEB3 & MARKET INTELLIGENCE</span>
          <span>03 / STRATEGY & GROWTH</span>
        </div>
      </section>
      </Reveal>

     {/* Selected Work */}
<Reveal>
  <section id="work" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32">
          <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs tracking-[0.25em] text-[#bd9455]">
                THE WORK IN PROGRESS
              </p>
              <h2 className="text-4xl tracking-tight md:text-6xl">
                Curiosity, put to work.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-[#8e8981]">
              Three directions. One long-term objective: understand the
              ecosystem well enough to make a meaningful contribution.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.number}
                className="project-card group flex min-h-72 flex-col border border-white/10 bg-white/[0.02] p-7 transition duration-300 hover:border-[#bd9455]/50 hover:bg-white/[0.04] md:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#bd9455]">
                    {project.number}
                  </span>
                  <span className="text-[#77736c] transition group-hover:translate-x-1 group-hover:text-[#bd9455]">
                    ↗
                  </span>
                </div>

                <div className="mt-14">
                  <p className="mb-3 text-[10px] tracking-[0.18em] text-[#8e8981]">
                    {project.tag}
                  </p>
                  <h3 className="text-2xl">{project.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#99948c]">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
        </section>
</Reveal>

      {/* Portfolio */}
      <Reveal>
      <section id="portfolio" className="border-t border-white/10 bg-[#10100e]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32">
          <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs tracking-[0.25em] text-[#bd9455]">
                SELECTED EXPERIENCE & CREATIVE WORK
              </p>
              <h2 className="text-4xl tracking-tight md:text-6xl">
                The Portfolio<span className="text-[#bd9455]">.</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-[#8e8981]">
              A closer look at the work, research, and creative practice
              behind the person.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item) => (
              <a
                key={item.number}
                href={item.href}
                className="group flex min-h-72 flex-col justify-between border border-white/10 bg-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#bd9455]/50 hover:bg-white/[0.04] md:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs tracking-widest text-[#bd9455]">
                    {item.number}
                  </span>
                  <span className="text-xl text-white/40 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#bd9455]">
                    ↗
                  </span>
                </div>

                <div className="mt-14">
                  <p className="mb-3 text-[10px] tracking-[0.18em] text-[#8e8981]">
                    {item.label}
                  </p>
                  <h3 className="text-2xl font-medium tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#99948c]">
                    {item.description}
                  </p>
                  <p className="mt-6 text-xs tracking-wider text-[#bd9455] transition group-hover:text-[#e0bc83]">
                    EXPLORE ↗
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      </Reveal>

      {/* Field Notes */}
      <Reveal>
      <section id="notes" className="border-t border-white/10">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:grid-cols-[0.8fr_1.2fr] md:px-12 md:py-32">
          <div>
            <p className="mb-4 text-xs tracking-[0.25em] text-[#bd9455]">
              FIELD NOTES
            </p>
            <h2 className="text-4xl leading-tight tracking-tight md:text-5xl">
              Thinking out loud.
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-[#8e8981]">
              Ideas I&apos;m testing, patterns I&apos;m noticing, and beliefs
              I&apos;m willing to challenge.
            </p>
          </div>

          <div>
            {notes.map((note, index) => (
              <article
                key={note}
                className="flex gap-5 border-b border-white/10 py-6 first:border-t"
              >
                <span className="pt-1 text-xs text-[#bd9455]">
                  0{index + 1}
                </span>
                <p className="text-lg leading-8 text-[#d4cfc5] md:text-xl">
                  {note}
                </p>
              </article>
            ))}

            <p className="mt-5 text-xs text-[#77736c]">
              NOTES FROM AN ONGOING JOURNEY — MORE TO COME.
            </p>
          </div>
        </div>
      </section>
      </Reveal>

      {/* About */}
      <Reveal>
      <section
        id="about"
        className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32"
      >
        <p className="mb-4 text-xs tracking-[0.25em] text-[#bd9455]">
          THE PERSON BEHIND THE PROCESS
        </p>

        <div className="grid gap-10 md:grid-cols-2 md:gap-20">
          <h2 className="text-4xl leading-tight tracking-tight md:text-6xl">
            Not here to look established.
            <span className="font-serif italic text-[#bd9455]">
              {" "}Here to become exceptional.
            </span>
          </h2>

          <div className="text-sm leading-8 text-[#aaa69e]">
            <p>
              I&apos;m building my understanding of Web3 from the ground up —
              studying protocols, questioning assumptions, and connecting
              market analysis with the human side of growth.
            </p>

            <p className="mt-5">
              This website is a record of that process. The thinking, the
              experiments, the progress, and the work still ahead.
            </p>

            <p className="mt-5 text-[#e5c18c]">
              The goal is bigger than a title. It&apos;s contribution.
            </p>
          </div>
        </div>
      </section>
      </Reveal>

   
{/* Footer */}
<footer className="border-t border-white/10">
  <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-6 py-8 text-xs text-[#77736c] sm:flex-row sm:items-center md:px-12">
    <span className="tracking-[0.2em]">
      JAHY, THE PMP © 2026
    </span>

    <span>Learning in public. Building with intention.</span>

    <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
      <a
        href="https://x.com/the_PMP3"
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:text-[#bd9455]"
      >
        X ↗
      </a>

      <a
        href="mailto:jahmielokon18@gmail.com"
        className="transition hover:text-[#bd9455]"
      >
        EMAIL ↗
      </a>

      <a
        href="https://www.linkedin.com/in/jahmiel-okon-193595308"
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:text-[#bd9455]"
      >
        LINKEDIN ↗
      </a>

      <a
        href="https://github.com/JahmielthePMP"
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:text-[#bd9455]"
      >
        GITHUB ↗
      </a>

      <a
        href="https://t.me/jahythepmpII"
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:text-[#bd9455]"
      >
        TELEGRAM ↗
      </a>
    </div>
  </div>
</footer>

    </main>
  );
}
