import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageSquare, Eye, HeartPulse, Cpu, ArrowRight } from 'lucide-react';
import { useInView } from '@hooks/useScrollAnimation';
import SectionHeading from '@components/ui/SectionHeading';
import { researchInterests } from '@data/research';

const iconMap: Record<string, React.ElementType> = {
  'message-square': MessageSquare,
  eye: Eye,
  'heart-pulse': HeartPulse,
  cpu: Cpu,
};

export default function ResearchInterests() {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <section className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          title="Research Interests"
          subtitle="Exploring the frontiers of artificial intelligence with a focus on real-world impact."
        />

        <div ref={ref} className="grid md:grid-cols-2 gap-6 mt-12">
          {researchInterests.map((interest, index) => {
            const Icon = iconMap[interest.icon] || Cpu;
            return (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass-card rounded-[24px] p-8 group hover:border-primary/30 transition-all"
              >
                <div className="w-14 h-14 rounded-[18px] bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-sora font-semibold text-text text-xl mb-3">
                  {interest.title}
                </h3>
                <p className="text-muted leading-relaxed">{interest.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/research"
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium"
          >
            Explore My Research
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
