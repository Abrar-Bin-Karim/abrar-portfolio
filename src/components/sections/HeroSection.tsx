import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, ExternalLink } from 'lucide-react';
import { GitHubIcon } from '@/components/common/Icons';
import { Link } from 'react-router-dom';
import TypewriterText from '@components/ui/TypewriterText';
import Button from '@components/ui/Button';
import profileImg from '@/assets/images/profile/profile.jpg';

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove);
      return () => hero.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-bg">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-bg to-bg" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Cursor spotlight */}
      <div
        className="absolute pointer-events-none transition-opacity duration-300"
        style={{
          left: mousePosition.x - 200,
          top: mousePosition.y - 200,
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(79,142,247,0.08) 0%, transparent 70%)',
          opacity: mousePosition.x > 0 ? 1 : 0,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-muted mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Software Engineering Student at Sichuan University
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sora text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text leading-tight mb-6"
            >
              Hi, I'm{' '}
              <span className="text-gradient">Abrar</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-mono text-lg sm:text-xl md:text-2xl text-primary mb-8 h-8"
            >
              <TypewriterText
                texts={[
                  'AI Researcher',
                  'Software Engineer',
                  'Machine Learning Enthusiast',
                  'Open Source Contributor',
                ]}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              An international Software Engineering student at Sichuan University passionate about
              Artificial Intelligence, Machine Learning, Large Language Models, and building
              privacy-first intelligent systems that solve real-world problems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link to="/projects">
                <Button size="lg" className="w-full sm:w-auto">
                  <ExternalLink className="w-5 h-5" />
                  View Projects
                </Button>
              </Link>
              <a href="/Resume of Abrar.pdf" download>
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <Download className="w-5 h-5" />
                  Download Resume
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-4 mt-10 justify-center lg:justify-start"
            >
              <a
                href="https://github.com/Abrar-Bin-Karim"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-[12px] glass-card text-muted hover:text-text transition-colors"
                aria-label="GitHub"
              >
                <GitHubIcon className="w-5 h-5" />
              </a>
              <span className="text-muted text-sm">Follow my work on GitHub</span>
            </motion.div>
          </div>

          {/* Right side - profile image with floating cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Profile image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 h-72 rounded-[24px] overflow-hidden glass-card glow-primary">
                  <img
                    src={profileImg}
                    alt="Abrar Bin Karim"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Floating cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-8 right-0 glass-card rounded-[18px] p-4 glow-accent"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-[12px] bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-lg font-bold">Py</span>
                  </div>
                  <div>
                    <p className="text-text text-sm font-medium">Python</p>
                    <p className="text-muted text-xs">Expert</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute bottom-16 left-0 glass-card rounded-[18px] p-4 glow-accent"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-[12px] bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-lg font-bold">AI</span>
                  </div>
                  <div>
                    <p className="text-text text-sm font-medium">Medical AI</p>
                    <p className="text-muted text-xs">Researcher</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute top-1/3 -left-8 glass-card rounded-[18px] p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-[12px] bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-lg font-bold">3WD</span>
                  </div>
                  <div>
                    <p className="text-text text-sm font-medium">3-Way Decision</p>
                    <p className="text-muted text-xs">XAI</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted"
        >
          <span className="text-xs">Scroll to explore</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
