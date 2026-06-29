import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, Code, GraduationCap, Lightbulb } from 'lucide-react';
import { useInView } from '@hooks/useScrollAnimation';
import SectionHeading from '@components/ui/SectionHeading';
import Button from '@components/ui/Button';
import profileImg from '@/assets/images/profile/profile.jpg';

const strengths = [
  {
    icon: Brain,
    title: 'AI & ML',
    description: 'Deep expertise in neural networks, NLP, and computer vision.',
  },
  {
    icon: Code,
    title: 'Software Engineering',
    description: 'Building scalable, maintainable systems with modern architectures.',
  },
  {
    icon: GraduationCap,
    title: 'Continuous Learning',
    description: 'Always exploring new technologies and research frontiers.',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solving',
    description: 'Tackling complex challenges with creative, data-driven solutions.',
  },
];

export default function AboutPreview() {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <section className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="A passionate Software Engineering student dedicated to pushing the boundaries of AI and machine learning."
        />

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full max-w-sm mx-auto lg:mx-0 mb-8 rounded-[24px] overflow-hidden glass-card glow-primary">
              <img
                src={profileImg}
                alt="Abrar Bin Karim"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted text-base md:text-lg leading-relaxed mb-6">
              I am an international Software Engineering student at Sichuan University with a strong focus on
              Artificial Intelligence and Machine Learning. My journey began with a fascination
              for how intelligent systems can transform industries and improve lives.
            </p>
            <p className="text-muted text-base md:text-lg leading-relaxed mb-6">
              Today, I work on projects spanning from medical AI diagnostics using Three-Way Decision Theory
              to privacy-first local LLM applications. I believe in the power of combining solid software engineering
              principles with cutting-edge AI research to build products that matter.
            </p>
            <p className="text-muted text-base md:text-lg leading-relaxed mb-8">
              When I am not coding or training models, you will find me reading research papers,
              contributing to open-source projects, or preparing for Master's program applications.
            </p>
            <Link to="/about">
              <Button variant="outline">Learn More About Me</Button>
            </Link>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 lg:col-span-2">
            {strengths.map((strength, index) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-[18px] p-6 hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-[12px] bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <strength.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-sora font-semibold text-text mb-2">{strength.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{strength.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
