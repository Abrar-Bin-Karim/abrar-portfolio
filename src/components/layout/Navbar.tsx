import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { GitHubIcon } from '@/components/common/Icons';
import { NAV_LINKS } from '@/constants';
import { useScrollProgress } from '@hooks/useScrollAnimation';
import { useTheme } from '@hooks/useTheme';
import logo from "@/assets/images/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const scrollProgress = useScrollProgress();
  const { theme, toggleTheme, mounted } = useTheme();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsOpen(false);
      document.body.style.overflow = '';
    }, 0);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="glass border-b border-border-glass">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 md:h-20">
              <Link to="/" className="flex items-center gap-2 group">
                <span className="font-sora text-xl font-bold text-gradient"><img src={logo} alt="Abrar Bin Karim" className="h-10 w-auto object-contain" /></span>
              </Link>

              <div className="hidden md:flex items-center gap-1">
                {NAV_LINKS.map((link: { href: string; label: string }) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="relative px-4 py-2 text-sm font-medium text-muted hover:text-text transition-colors"
                  >
                    {link.label}
                    {location.pathname === link.href && (
                      <motion.div
                        layoutId="navbar-underline"
                        className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                ))}
              </div>

              <div className="hidden md:flex items-center gap-2">
                <button
                  onClick={toggleTheme}
                  className="p-2 text-muted hover:text-text transition-colors rounded-[12px] hover:bg-card"
                  aria-label="Toggle theme"
                >
                  {mounted && theme === 'dark' ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </button>
                <a
                  href="https://github.com/Abrar-Bin-Karim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted hover:text-text transition-colors"
                  aria-label="GitHub"
                >
                  <GitHubIcon className="w-5 h-5" />
                </a>
              </div>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 text-muted hover:text-text transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        <div className="h-0.5 bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 w-full">
          <div
            className="h-full bg-primary transition-all duration-100"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-bg/95 backdrop-blur-xl pt-20">
              <div className="flex flex-col items-center gap-2 p-8">
                {NAV_LINKS.map((link: { href: string; label: string }, index: number) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.href}
                      className={`block px-6 py-3 text-lg font-medium rounded-[12px] transition-colors ${
                        location.pathname === link.href
                          ? 'text-primary bg-primary/10'
                          : 'text-muted hover:text-text'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: NAV_LINKS.length * 0.05 }}
                  onClick={toggleTheme}
                  className="flex items-center gap-2 mt-2 px-6 py-3 text-muted hover:text-text transition-colors"
                >
                  {mounted && theme === 'dark' ? (
                    <>
                      <Sun className="w-5 h-5" />
                      <span>Light Mode</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-5 h-5" />
                      <span>Dark Mode</span>
                    </>
                  )}
                </motion.button>
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (NAV_LINKS.length + 1) * 0.05 }}
                  href="https://github.com/Abrar-Bin-Karim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 mt-2 px-6 py-3 text-muted hover:text-text transition-colors"
                >
                  <GitHubIcon className="w-5 h-5" />
                  <span>GitHub</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
