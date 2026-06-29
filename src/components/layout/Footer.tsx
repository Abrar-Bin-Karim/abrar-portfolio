import { Link } from 'react-router-dom';
import { Mail, Heart } from 'lucide-react';
import { GitHubIcon, LinkedInIcon, XIcon } from '@/components/common/Icons';
import { NAV_LINKS } from '@/constants';
import logo from "@/assets/images/logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-glass bg-surface/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="font-sora text-2xl font-bold text-gradient"><img src={logo} alt="Abrar Bin Karim" className="h-10 w-auto object-contain" /></span>
            </Link>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              Software Engineering Student at Sichuan University. AI Researcher and Open Source
              Enthusiast passionate about building intelligent systems that make a difference.
            </p>
          </div>

          <div>
            <h3 className="font-sora font-semibold text-text mb-4">Navigation</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link: { href: string; label: string }) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted hover:text-text text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sora font-semibold text-text mb-4">Connect</h3>
            <div className="flex gap-3">
              <a
                href="https://github.com/Abrar-Bin-Karim"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-[12px] bg-card border border-border-subtle text-muted hover:text-text hover:border-primary/30 transition-all"
                aria-label="GitHub"
              >
                <GitHubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/abrar-bin-karim"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-[12px] bg-card border border-border-subtle text-muted hover:text-text hover:border-primary/30 transition-all"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/Abrar_Bin_Karim"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-[12px] bg-card border border-border-subtle text-muted hover:text-text hover:border-primary/30 transition-all"
                aria-label="X"
              >
                <XIcon className="w-5 h-5" />
              </a>
              <a
                href="mailto:abrarkarim@qq.com"
                className="p-2.5 rounded-[12px] bg-card border border-border-subtle text-muted hover:text-text hover:border-primary/30 transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border-glass flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted text-sm">
            &copy; {currentYear} Abrar Bin Karim. All rights reserved.
          </p>
          <p className="text-muted text-sm flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-primary fill-primary" /> using React + TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
