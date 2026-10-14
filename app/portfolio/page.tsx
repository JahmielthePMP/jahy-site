
import Link from "next/link";

const galleries = [
  {
    number: "01",
    title: "Work & Experience",
    description:
      "Roles, contributions, and projects across Web3, community management, and creative production.",
    href: "/portfolio/experience",
  },
  {
    number: "02",
    title: "Research & Growth",
    description:
      "DeFi research, market intelligence, growth audits, and strategic proposals.",
    href: "/portfolio/research-growth",
  },
  {
    number: "03",
    title: "Content & Cinematography",
    description:
      "Filmmaking, video editing, content creation, and visual storytelling.",
    href: "/portfolio/film",
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#080807] px-6 py-12 text-[#F2EDE4] md:px-12 md:py-20">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="text-sm text-[#BD9455] transition-opacity hover:opacity-70"
        >
          ← Back to home
        </Link>

        <header className="mb-16 mt-16">
          <p className="mb-5 text-xs tracking-[0.3em] text-[#BD9455]">
            SELECTED WORK
          </p>
          <h1 className="text-4xl font-medium tracking-tight md:text-6xl">
            Portfolio<span className="text-[#BD9455]">.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/60">
            A collection of work, ideas, and creative projects across
            research, growth, and visual storytelling.
          </p>
        </header>

        <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {galleries.map((gallery) => (
            <Link
              key={gallery.number}
              href={gallery.href}
              className="group flex min-h-64 flex-col justify-between border border-white/10 bg-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#BD9455]/50"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs tracking-widest text-[#BD9455]">
                  {gallery.number}
                </span>
                <span className="text-xl text-white/40 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#BD9455]">
                  ↗
                </span>
              </div>

              <div className="mt-12">
                <h2 className="text-xl font-medium tracking-tight">
                  {gallery.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-white/55">
                  {gallery.description}
                </p>
              </div>
            </Link>
          ))}
        </section>

        <footer className="mt-24 border-t border-white/10 pt-6 text-xs tracking-widest text-white/35">
          JAHMIEL OKON · THE DUKE OF WEB3
        </footer>
      </div>
    </main>
  );
}
