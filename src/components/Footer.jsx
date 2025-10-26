import { Github, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="font-semibold text-slate-900">NeonBlock AI</p>
          <p className="text-sm text-slate-600">AI and blockchain products. Built with care and cryptographic trust.</p>
        </div>
        <div className="flex items-center gap-4">
          <a aria-label="Email" href="mailto:hello@neonblock.ai" className="p-2 rounded-lg hover:bg-slate-100 text-slate-700">
            <Mail className="h-5 w-5" />
          </a>
          <a aria-label="Twitter" href="#" className="p-2 rounded-lg hover:bg-slate-100 text-slate-700">
            <Twitter className="h-5 w-5" />
          </a>
          <a aria-label="GitHub" href="#" className="p-2 rounded-lg hover:bg-slate-100 text-slate-700">
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
