import { motion } from 'framer-motion';
import {
  Brain, Code, GraduationCap, Target, Rocket,
  BookOpen, Award, Users, Zap,
} from 'lucide-react';
import { useInView } from '@hooks/useScrollAnimation';
import PageTransition from '@components/layout/PageTransition';
import SectionHeading from '@components/ui/SectionHeading';
import profileImg from '@/assets/images/profile/profile.jpg';

const strengths = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Deep understanding of neural architectures, from CNNs and transformers to reinforcement learning. Experienced with Scikit-learn, TensorFlow, and PyTorch.',
  },
  {
    icon: Code,
    title: 'Full-Stack Development',
    description: 'Proficient in building end-to-end applications with React, TypeScript, Python, and cloud infrastructure. Strong foundation in software design patterns.',
  },
  {
    icon: Target,
    title: 'Research Mindset',
    description: 'Ability to read, understand, and implement cutting-edge research papers in practical applications. Currently exploring Three-Way Decision Theory and XAI.',
  },
  {
    icon: Rocket,
    title: 'Rapid Prototyping',
    description: 'Skilled at quickly turning ideas into working prototypes and MVPs for validation. Built a local-first AI assistant and a medical diagnosis system from scratch.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Experience working in diverse teams, from academic research groups to international student communities in Chengdu, China.',
  },
  {
    icon: Zap,
    title: 'Performance Focus',
    description: 'Committed to writing efficient, optimized code and training models with best practices. Values privacy-first and local execution approaches.',
  },
];

const education = [
  {
    degree: 'BSc in Software Engineering',
    institution: 'Sichuan University',
    period: '2022 - Present',
    description: 'International undergraduate student focusing on Artificial Intelligence, Machine Learning, Computer Vision, and Software Architecture. Coursework includes algorithms, data structures, NLP, and IoT security.',
  },
];

export default function About() {
  const { ref: bioRef, isInView: bioInView } = useInView<HTMLDivElement>();
  const { ref: strengthsRef, isInView: strengthsInView } = useInView<HTMLDivElement>();
  const { ref: eduRef, isInView: eduInView } = useInView<HTMLDivElement>();

  return (
    <PageTransition>
      <div className="pt-20 md:pt-28">
        {/* Bio Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="About Me"
              subtitle="The story behind the code and research."
            />

            <div ref={bioRef} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={bioInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-[24px] overflow-hidden glass-card glow-primary mx-auto lg:mx-0">
                  <img
                    src={profileImg}
                    alt="Abrar Bin Karim"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={bioInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="font-sora text-2xl md:text-3xl font-bold text-text mb-6">
                  AI Researcher & <span className="text-gradient">Software Engineer</span>
                </h2>
                <div className="space-y-4 text-muted leading-relaxed">
                  <p>
                    Hello! I'm Abrar Bin Karim, an international Software Engineering student at
                    Sichuan University in Chengdu, China. My academic journey has equipped me with
                    a strong foundation in software design patterns, algorithms, and system architecture
                    while fueling my passion for Artificial Intelligence and Machine Learning.
                  </p>
                  <p>
                    What truly excites me is the intersection of robust software engineering and
                    cutting-edge AI research. I've worked on projects ranging from medical image
                    analysis using Three-Way Decision Theory and SHAP explainability to building
                    a privacy-first local AI coding assistant that runs entirely on-device.
                  </p>
                  <p>
                    My goal is to contribute to the AI community by developing accessible tools and
                    conducting research that pushes the boundaries of what's possible. I believe that
                    the best solutions emerge when technical excellence meets genuine curiosity.
                    Currently, I am preparing applications for Master's programs in Computer Science.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 mt-8">
                  <div className="flex items-center gap-2 text-sm text-muted">
                    <BookOpen className="w-4 h-4 text-primary" />
                    <span>Continuous Learner</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted">
                    <Award className="w-4 h-4 text-primary" />
                    <span>Open Source Contributor</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted">
                    <GraduationCap className="w-4 h-4 text-primary" />
                    <span>Research Enthusiast</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Strengths */}
        <section className="py-16 md:py-24 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <SectionHeading
              title="Core Strengths"
              subtitle="The pillars that define my approach to work and research."
            />

            <div ref={strengthsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {strengths.map((strength, index) => (
                <motion.div
                  key={strength.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={strengthsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card rounded-[18px] p-6 group hover:border-primary/30 transition-all"
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
        </section>

        {/* Education */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Education"
              subtitle="My academic foundation and ongoing learning journey."
            />

            <div ref={eduRef} className="max-w-3xl mx-auto mt-12">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 20 }}
                  animate={eduInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card rounded-[24px] p-8"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-[12px] bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-sora font-semibold text-text text-lg">{edu.degree}</h3>
                      <p className="text-primary text-sm mb-2">{edu.institution}</p>
                      <p className="text-muted text-sm mb-4">{edu.period}</p>
                      <p className="text-muted text-sm leading-relaxed">{edu.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
