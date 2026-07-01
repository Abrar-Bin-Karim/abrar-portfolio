import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiWechat } from "@icons-pack/react-simple-icons";
import wechatQR from "@/assets/images/wechat.png";
import { Mail, Heart } from 'lucide-react';
import { GitHubIcon, LinkedInIcon, XIcon } from '@/components/common/Icons';
import { NAV_LINKS } from '@/constants';
import logo from "@/assets/images/logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showWechat, setShowWechat] = useState(false);
  const [copied, setCopied] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const copyWechat = async () => {
  await navigator.clipboard.writeText("abrarbinkarim");

  setCopied(true);

  setTimeout(() => {
    setCopied(false);
  }, 2000);
};

useEffect(() => {
  function handleClickOutside(event: MouseEvent) {
    if (
      popupRef.current &&
      !popupRef.current.contains(event.target as Node)
    ) {
      setShowWechat(false);
    }
  }

  if (showWechat) {
    document.addEventListener("mousedown", handleClickOutside);
  }

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [showWechat]);

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

              <div
  className="relative"
  ref={popupRef}
>

  <button
    type="button"
    onClick={() => setShowWechat(!showWechat)}
    className="p-2.5 rounded-[12px] bg-card border border-border-subtle text-muted hover:text-text hover:border-primary/30 transition-all"
    aria-label="WeChat"
  >
    <SiWechat className="w-5 h-5" />
  </button>

  <AnimatePresence>

    {showWechat && (

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 10 }}
        transition={{ duration: 0.2 }}
        className="absolute bottom-14 right-0 w-56 rounded-2xl glass-card border border-border-subtle p-4 shadow-2xl z-50"
      >

        <img
          src={wechatQR}
          alt="WeChat QR"
          className="w-full rounded-xl"
        />

        <p className="text-center mt-3 font-medium text-text">
          abrarbinkarim
        </p>

        <button
          type="button"
          onClick={copyWechat}
          className="mt-3 w-full rounded-lg bg-primary py-2 text-white hover:opacity-90"
        >
          Copy ID
        </button>

        {copied && (
          <p className="text-center text-green-400 text-sm mt-2">
            ✓ Copied!
          </p>
        )}

      </motion.div>

    )}

  </AnimatePresence>

</div>

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

        <div className="mt-12 pt-8 border-t border-border-glass flex">
  <p className="text-muted text-sm ml-auto text-right">
    &copy; {currentYear} Abrar Bin Karim. All rights reserved.
  </p>
</div>
      </div>
    </footer>
  );
}
