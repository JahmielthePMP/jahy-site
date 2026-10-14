
import Link from "next/link";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-[#080807] px-6 py-12 text-[#F2EDE4] md:px-12 md:py-20">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/portfolio"
          className="text-sm text-[#BD9455] transition-opacity hover:opacity-70"
        >
          ← Back to portfolio
        </Link>

        <header className="mb-16 mt-16">
          <p className="mb-5 text-xs tracking-[0.3em] text-[#BD9455]">
            01 / PROFESSIONAL JOURNEY
          </p>

          <h1 className="text-4xl font-medium tracking-tight md:text-6xl">
            Work & Experience<span className="text-[#BD9455]">.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/60">
            A record of my roles, contributions, and practical work
            across Web3, community building, ecosystem growth, and
            creative production.
          </p>
        </header>

        
<section className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
  <article className="flex flex-col border border-white/10 bg-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#BD9455]/50">
    <div className="mb-8 flex items-center justify-between">
      <span className="text-xs tracking-widest text-[#BD9455]">
        01 / COMMUNITY
      </span>
      <span className="text-xs text-white/40">OCT — NOV 2024</span>
    </div>

    <h2 className="text-xl font-medium">Solnom Dex</h2>
    <p className="mt-2 text-sm text-[#BD9455]">Community Moderator</p>
    <p className="mt-5 text-sm leading-6 text-white/55">
      Community moderation and support within a decentralised
      exchange ecosystem.
    </p>

    <div className="mt-auto pt-8">
      <span className="text-xs tracking-wide text-white/35">
        PROJECT NO LONGER ACTIVE
      </span>
    </div>
  </article>

  <article className="flex flex-col border border-white/10 bg-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#BD9455]/50">
    <div className="mb-8 flex items-center justify-between">
      <span className="text-xs tracking-widest text-[#BD9455]">
        02 / COMMUNITY
      </span>
      <span className="text-xs text-white/40">JAN — MAR 2025</span>
    </div>

    <h2 className="text-xl font-medium">Atok.Ai</h2>
    <p className="mt-2 text-sm text-[#BD9455]">Community Moderator</p>
    <p className="mt-5 text-sm leading-6 text-white/55">
      Regional community involvement within a Web3 and AI ecosystem.
    </p>

    <div className="mt-auto pt-8">
      <a
        href="https://atok.ai/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-[#BD9455] transition-opacity hover:opacity-70"
      >
        Visit project ↗
      </a>
    </div>
  </article>

  <article className="flex flex-col border border-white/10 bg-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#BD9455]/50">
    <div className="mb-8 flex items-center justify-between">
      <span className="text-xs tracking-widest text-[#BD9455]">
        03 / COMMUNITY
      </span>
      <span className="text-xs text-white/40">SEP 2026 — PRESENT</span>
    </div>

    <h2 className="text-xl font-medium">EfficiencyDMI</h2>
    <p className="mt-2 text-sm text-[#BD9455]">Community Manager</p>
    <p className="mt-5 text-sm leading-6 text-white/55">
      Community management and development, with a focus on
      exploring sustainable community growth.
    </p>

    <div className="mt-auto pt-8">
      <a
        href="https://efficiencydmi.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-[#BD9455] transition-opacity hover:opacity-70"
      >
        Visit project ↗
      </a>
    </div>
  </article>
</section>


        <footer className="mt-24 border-t border-white/10 pt-6 text-xs tracking-widest text-white/35">
          JAHMIEL OKON · THE DUKE OF WEB3
        </footer>
      </div>
    </main>
  );
}
