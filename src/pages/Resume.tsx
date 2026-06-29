import { motion } from 'framer-motion';
import { Download, Briefcase, GraduationCap, FlaskConical, Award, BookOpen } from 'lucide-react';
import { useInView } from '@hooks/useScrollAnimation';
import PageTransition from '@components/layout/PageTransition';
import Button from '@components/ui/Button';
import { experiences } from '@data/experience';
import { skillCategories } from '@data/skills';

const typeConfig = {
  work: { icon: Briefcase, color: 'text-primary', bg: 'bg-primary/10' },
  education: { icon: GraduationCap, color: 'text-accent', bg: 'bg-accent/10' },
  research: { icon: FlaskConical, color: 'text-green-400', bg: 'bg-green-400/10' },
};

const achievements = [
  {
    icon: BookOpen,
    title: 'Research Publication',
    description: 'Developed a hybrid intelligent medical diagnosis system using Three-Way Decision Theory and SHAP explainability.',
  },
  {
    icon: Award,
    title: 'Open Source Projects',
    description: 'Built and maintained multiple open-source repositories including a local-first AI dev assistant and a medical diagnosis system.',
  },
  {
    icon: FlaskConical,
    title: 'Academic Excellence',
    description: 'International Software Engineering student at Sichuan University with strong academic record in AI and ML coursework.',
  },
];

export default function Resume() {
  const { ref: expRef, isInView: expInView } = useInView<HTMLDivElement>();
  const { ref: skillsRef, isInView: skillsInView } = useInView<HTMLDivElement>();
  const { ref: achRef, isInView: achInView } = useInView<HTMLDivElement>();

  return (
    <PageTransition>
      <div className="pt-20 md:pt-28">
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12">
              <div>
                <h1 className="font-sora text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-2">
                  Resume
                </h1>
                <p className="text-muted text-base md:text-lg">
                  My professional journey, skills, and experiences.
                </p>
              </div>
              <a href="/Resume of Abrar.pdf" download>
                <Button size="lg">
                  <Download className="w-5 h-5" />
                  Download PDF
                </Button>
              </a>
            </div>

            {/* Experience Timeline */}
            <div className="mb-20">
              <h2 className="font-sora text-2xl font-bold text-text mb-8">Experience & Education</h2>

              <div ref={expRef} className="relative max-w-3xl">
                <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border-subtle" />

                {experiences.map((item, index) => {
                  const config = typeConfig[item.type];
                  const Icon = config.icon;

                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={expInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.15 }}
                      className="relative pl-12 md:pl-20 pb-12 last:pb-0"
                    >
                      <div className={`absolute left-2 md:left-6 top-1 w-5 h-5 rounded-full border-2 border-bg ${config.bg} flex items-center justify-center`}>
                        <div className={`w-2 h-2 rounded-full ${config.color.replace('text-', 'bg-')}`} />
                      </div>

                      <div className="glass-card rounded-[18px] p-6">
                        <div className="flex items-start gap-4 mb-4">
                          <div className={`w-10 h-10 rounded-[12px] ${config.bg} flex items-center justify-center flex-shrink-0`}>
                            <Icon className={`w-5 h-5 ${config.color}`} />
                          </div>
                          <div>
                            <h3 className="font-sora font-semibold text-text">{item.role}</h3>
                            <p className="text-primary text-sm">{item.organization}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-muted text-sm mb-4">
                          <span>{item.startDate.split('-')[0]}</span>
                          <span>-</span>
                          <span>{item.endDate === 'Present' ? 'Present' : item.endDate.split('-')[0]}</span>
                          <span className="mx-2">&middot;</span>
                          <span>{item.location}</span>
                        </div>

                        <ul className="space-y-2">
                          {item.description.map((desc: string, i: number) => (
                            <li key={i} className="text-muted text-sm leading-relaxed flex gap-2">
                              <span className="text-primary mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-primary" />
                              {desc}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Skills */}
            <div ref={skillsRef} className="mb-20">
              <h2 className="font-sora text-2xl font-bold text-text mb-8">Skills</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {skillCategories.map((category, catIndex) => (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                    className="glass-card rounded-[18px] p-6"
                  >
                    <h3 className="font-sora font-semibold text-text mb-4">{category.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill.name}
                          className="px-3 py-1.5 rounded-[8px] bg-primary/10 text-primary text-sm font-medium"
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div ref={achRef}>
              <h2 className="font-sora text-2xl font-bold text-text mb-8">Achievements & Research</h2>

              <div className="grid md:grid-cols-3 gap-6">
                {achievements.map((ach, index) => (
                  <motion.div
                    key={ach.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={achInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass-card rounded-[18px] p-6 group hover:border-primary/30 transition-all"
                  >
                    <div className="w-12 h-12 rounded-[12px] bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <ach.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-sora font-semibold text-text mb-2">{ach.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{ach.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
