import { Brain, Cpu, Shield, Wallet } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Brain,
      title: 'Applied AI',
      desc: 'From LLM agents to time-series forecasting and anomaly detection tailored for on-chain and fintech data.'
    },
    {
      icon: Cpu,
      title: 'On-Chain Engineering',
      desc: 'Indexers, subgraphs, data pipelines, and performant APIs that bridge on-chain and off-chain worlds.'
    },
    {
      icon: Shield,
      title: 'Security & Risk',
      desc: 'Threat detection, fraud scoring, smart contract audits with ML-assisted code intelligence.'
    },
    {
      icon: Wallet,
      title: 'DeFi Automation',
      desc: 'Bots and keepers for liquidity, liquidation, and market-making with guardrails and observability.'
    }
  ];

  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-widest text-slate-500">About Us</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900">We build intelligent, verifiable systems</h2>
          <p className="mt-4 text-slate-700">
            Our team blends machine learning, product engineering, and crypto-native expertise. We ship end-to-end: data infra, model training, smart contracts, dApps, and cloud-native deployments. We partner with startups and enterprises to unlock new value with trustworthy automation.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow transition">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
