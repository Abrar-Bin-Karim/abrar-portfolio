import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight, Sparkles } from 'lucide-react';
import { useInView } from '@hooks/useScrollAnimation';
import Button from '@components/ui/Button';

export default function ContactCTA() {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <section className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-[24px] p-10 md:p-16 text-center relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px]" />

          <div className="relative z-10">
            <div className="w-16 h-16 rounded-[18px] bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>

            <h2 className="font-sora text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4">
              Let's Build Something{' '}
              <span className="text-gradient">Amazing</span>
            </h2>

            <p className="text-muted text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Whether you're looking for a collaborator on a research project, need help with
              an AI implementation, or just want to connect, I'd love to hear from you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto">
                  <Mail className="w-5 h-5" />
                  Get In Touch
                </Button>
              </Link>
              <Link to="/projects">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  View My Work
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
