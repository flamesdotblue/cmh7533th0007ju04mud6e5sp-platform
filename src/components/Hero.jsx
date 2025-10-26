import Spline from '@splinetool/react-spline';
import { Rocket, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white" />
      </div>

      <div className="relative z-10">
        <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-white">
              <Rocket className="h-5 w-5" />
            </span>
            <span className="text-slate-900">NeonBlock AI</span>
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm font-medium">
            <a href="#about" className="text-slate-700 hover:text-slate-900">About</a>
            <a href="#portfolio" className="text-slate-700 hover:text-slate-900">Portfolio</a>
            <a href="#contact" className="text-slate-700 hover:text-slate-900">Contact</a>
          </nav>
        </header>

        <div className="max-w-7xl mx-auto px-6 pt-10 pb-20 grid md:grid-cols-12 items-center gap-8">
          <div className="md:col-span-7">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-slate-900">
              AI x Blockchain Solutions for the Next Digital Economy
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-700 max-w-2xl">
              We design and build intelligent, trustless products: from on-chain analytics and DeFi automation to AI-powered identity, risk, and real-time insights. Modern, secure, and production-ready.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#portfolio" className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-white hover:bg-slate-800 transition">
                Explore Work
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-white/70 backdrop-blur px-5 py-3 text-slate-900 ring-1 ring-slate-900/10 hover:ring-slate-900/20 transition">
                Get in touch
              </a>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="rounded-2xl border border-slate-200/60 bg-white/80 backdrop-blur p-6 shadow-sm">
              <dl className="grid grid-cols-2 gap-6">
                <div>
                  <dt className="text-sm text-slate-600">Delivered</dt>
                  <dd className="text-2xl font-semibold text-slate-900">25+ Projects</dd>
                </div>
                <div>
                  <dt className="text-sm text-slate-600">Secured</dt>
                  <dd className="text-2xl font-semibold text-slate-900">$500M TVL</dd>
                </div>
                <div>
                  <dt className="text-sm text-slate-600">AI Models</dt>
                  <dd className="text-2xl font-semibold text-slate-900">40+ in prod</dd>
                </div>
                <div>
                  <dt className="text-sm text-slate-600">Chains</dt>
                  <dd className="text-2xl font-semibold text-slate-900">8+ EVM/L2</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
