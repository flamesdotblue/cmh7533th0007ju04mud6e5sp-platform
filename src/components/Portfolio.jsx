import { Link } from 'lucide-react';

const projects = [
  {
    title: 'DeFi Risk Monitor',
    desc: 'Real-time liquidation and risk scoring across multiple L2s using streaming features and anomaly detection.',
    tags: ['Streaming ML', 'EVM', 'Time-series'],
    href: '#'
  },
  {
    title: 'ZK Proof Insights',
    desc: 'Dashboard and alerting for proving markets with model-based cost predictions and capacity forecasting.',
    tags: ['ZK', 'Forecasting', 'Analytics'],
    href: '#'
  },
  {
    title: 'NFT Recommender',
    desc: 'Hybrid retrieval and ranking for discovery, with wallet embeddings and fraud-safe filters.',
    tags: ['Retrieval', 'Embeddings', 'Trust & Safety'],
    href: '#'
  },
  {
    title: 'On-Chain Agent Ops',
    desc: 'LLM-powered bots orchestrating on-chain actions with policy guardrails and human-in-the-loop review.',
    tags: ['LLM', 'Agents', 'Automation'],
    href: '#'
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-widest text-slate-500">Portfolio</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900">Selected work</h2>
            <p className="mt-3 max-w-2xl text-slate-700">A sample of products and platforms we have shipped. Production-grade systems with measurable impact.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-white hover:bg-slate-800 transition">Start a project</a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-50 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none" />
              <h3 className="text-lg font-semibold text-slate-900 pr-10">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">{t}</span>
                ))}
              </div>
              <a href={p.href} className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:underline">
                View details <Link className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>

        <div id="contact" className="mt-16 rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center">
          <h3 className="text-2xl font-semibold text-slate-900">Have an idea? Let's build it.</h3>
          <p className="mt-2 text-slate-700">We take on select engagements each quarter. Share goals and timelines, and we’ll propose a roadmap.</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a href="mailto:hello@neonblock.ai" className="rounded-lg bg-slate-900 px-5 py-3 text-white hover:bg-slate-800 transition">hello@neonblock.ai</a>
            <a href="#" className="rounded-lg bg-white px-5 py-3 text-slate-900 ring-1 ring-slate-200 hover:ring-slate-300 transition">Book intro call</a>
          </div>
        </div>
      </div>
    </section>
  );
}
