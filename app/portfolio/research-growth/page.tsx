
import Link from "next/link";

const projects = [
  {
    number: "01",
    title: "Monochrome Exchange Thesis",
    category: "MARKET STRATEGY",
    description:
      "A strategic thesis exploring Binance's lessons, Monochrome's positioning, and opportunities in the evolving financial market.",
        cover: "/covers/monochrome.jpg.jpg",
    notionUrl:
      "https://app.notion.com/p/MONOCHROME-EXCHANGE-AUDIT-3e980d9c42008125bfd1f8d7c44d7da9?source=copy_link",
  },
  {
  number: "02",
  title: "Pickle Chain Audit",
  category: "PROTOCOL RESEARCH",
  description:
    "An analytical review of Pickle Chain, examining its ecosystem, positioning, and potential growth opportunities.",
  cover: "/covers/pickle-chain.jpg",
  notionUrl:
    "https://app.notion.com/p/PICKLE-CHAIN-AUDIT-3e780d9c4200811f8776dff6b090bbe2?source=copy_link",
},

  {
  number: "03",
  title: "ICP Market Translation",
  category: "ECOSYSTEM STRATEGY",
  description:
    "An exploration of ICP's positioning and how its technology and value proposition can be translated into clearer market opportunities.",
 cover: "/covers/icp-market-translation.jpg",
  notionUrl:
    "https://app.notion.com/p/ICP-MARKET-TRANSLATION-3c380d9c420080bb9e56d0b1fafe0c1d?source=copy_link",
},

{
  number: "04",
  title: "Verilay Growth Audit",
  category: "GROWTH STRATEGY",
  description:
    "An audit of Verilay's messaging, B2B acquisition, onboarding, and retention, with recommendations to turn its existing product strengths and case studies into stronger growth.",
  cover: "/covers/verilay-audit.jpg",
  notionUrl:
    "https://app.notion.com/p/VERILAY-AUDIT-3df80d9c4200815c90b5c9dc55efa3f3?source=copy_link",
},

{
  number: "05",
  title: "Swivr Growth Audit",
  category: "GROWTH & COMMUNITY",
  description:
    "A growth strategy audit focused on targeted trader acquisition, beta feedback loops, ambassador development, activation, and expansion opportunities for Solana-based prediction markets.",
  cover: "/covers/swivr-audit.jpg",
  notionUrl:
    "https://app.notion.com/p/SWIVR-AUDIT-3de80d9c420081e8b269f105adc9261c?source=copy_link",
},


{
  number: "06",
  title: "DeFi.com Audit",
  category: "GROWTH STRATEGY",
  description:
    "A strategic audit exploring DeFi.com's positioning, user acquisition, and growth opportunities, with recommendations for improving market visibility and user activation.",
  cover: "/covers/defi-com-audit.jpg",
  notionUrl:
    "https://app.notion.com/p/DEFI-COM-AUDIT-3dd80d9c42008152a86ec3cbb5566b34?source=copy_link",
},


{
  number: "07",
  title: "EfficiencyDMI Community",
  category: "COMMUNITY GROWTH",
  description:
    "A community-building initiative focused on student partnerships, campus activation, and reciprocal value creation to turn university students into an engaged community.",
  cover: "/covers/efficiencydmi-community.jpg",
  notionUrl:
    "https://app.notion.com/p/EfficiencyDMI-Community-3dc80d9c42008055a132f53e27a9585f?source=copy_link",
},



{
  number: "08",
  title: "Fiber Audit",
  category: "GROWTH STRATEGY",
  description:
    "A strategic audit examining Fiber's positioning, growth opportunities, and potential pathways to stronger user acquisition and ecosystem adoption.",
  cover: "/covers/fiber-audit.jpg",
  notionUrl:
    "https://app.notion.com/p/FIBER-AUDIT-3d880d9c420080b2a82fe34f84cb4f24?source=copy_link",
},


];

export default function ResearchGrowthPage() {
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
            02 / THINKING & STRATEGY
          </p>
          <h1 className="text-4xl font-medium tracking-tight md:text-6xl">
            Research & Growth<span className="text-[#BD9455]">.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/60">
            Research, strategic thinking, and growth initiatives across
            DeFi protocols and Web3 ecosystems.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group overflow-hidden border border-white/10 bg-white/[0.02] transition-all duration-300 hover:-translate-y-1 hover:border-[#BD9455]/50"
            >
              {project.notionUrl ? (
                <a
                  href={project.notionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Read ${project.title} on Notion`}
                  className="block aspect-[4/3] overflow-hidden bg-white/5"
                >
                  <img
                    src={project.cover}
                    alt={`${project.title} cover`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </a>
              ) : (
                <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-[#211b12] via-[#100f0c] to-[#080807]">
                  <span className="px-6 text-center text-xs tracking-[0.25em] text-[#BD9455]/70">
                    JAHY / RESEARCH {project.number}
                  </span>
                </div>
              )}

              <div className="p-6">
                <p className="text-[10px] tracking-[0.2em] text-[#BD9455]">
                  {project.category}
                </p>
                <h2 className="mt-3 text-xl font-medium tracking-tight">
                  {project.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-white/55">
                  {project.description}
                </p>

                {project.notionUrl ? (
                  <a
                    href={project.notionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block text-sm text-[#BD9455] transition-opacity hover:opacity-70"
                  >
                    Read research ↗
                  </a>
                ) : (
                  <p className="mt-6 text-xs text-white/30">
                    Notion link to be added
                  </p>
                )}
              </div>
            </article>
          ))}
        </section>

        <footer className="mt-24 border-t border-white/10 pt-6 text-xs tracking-widest text-white/35">
          JAHMIEL OKON · THE DUKE OF WEB3
        </footer>
      </div>
    </main>
  );
}
