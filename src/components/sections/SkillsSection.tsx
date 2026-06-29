import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Code, Layout, Brain, Cloud, Wrench,
  Database, Server, Zap, Paintbrush, Eye,
  Smile, Link, GitBranch, Triangle, Terminal,
  BookOpen, PenTool, Send, FileText, Globe,
  Hexagon, Container, Flame, BarChart3,
} from 'lucide-react';
import { useInView } from '@hooks/useScrollAnimation';
import SectionHeading from '@components/ui/SectionHeading';
import { skillCategories } from '@data/skills';

const iconMap: Record<string, React.ElementType> = {
  code: Code,
  layout: Layout,
  brain: Brain,
  cloud: Cloud,
  database: Database,
  server: Server,
  zap: Zap,
  paintbrush: Paintbrush,
  eye: Eye,
  smile: Smile,
  link: Link,
  'git-branch': GitBranch,
  triangle: Triangle,
  terminal: Terminal,
  'book-open': BookOpen,
  'pen-tool': PenTool,
  send: Send,
  'file-text': FileText,
  globe: Globe,
  hexagon: Hexagon,
  container: Container,
  flame: Flame,
  'bar-chart': BarChart3,
  wrench: Wrench,
};

const categoryIcons = [Code, Brain, Cloud, Wrench, Globe];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <section className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          title="Technical Skills"
          subtitle="A comprehensive toolkit built through academic study, research, and hands-on project experience."
        />

        <div ref={ref} className="mt-12">
          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {skillCategories.map((category, index) => {
              const Icon = categoryIcons[index] || Code;
              return (
                <button
                  key={category.title}
                  onClick={() => setActiveCategory(index)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-[12px] text-sm font-medium transition-all ${
                    activeCategory === index
                      ? 'bg-primary text-white shadow-lg shadow-primary/20'
                      : 'bg-card text-muted hover:text-text border border-border-subtle'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.title}
                </button>
              );
            })}
          </div>

          {/* Skills grid */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          >
            {skillCategories[activeCategory].skills.map((skill, index) => {
              const Icon = iconMap[skill.icon] || Code;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="glass-card rounded-[18px] p-5 flex flex-col items-center gap-3 text-center group cursor-default hover:border-primary/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-[12px] bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-text text-sm font-medium">{skill.name}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
