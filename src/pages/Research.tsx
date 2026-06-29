import { motion } from 'framer-motion';
import { FlaskConical, Clock, CheckCircle2, Circle, BookOpen } from 'lucide-react';
import { useInView } from '@hooks/useScrollAnimation';
import PageTransition from '@components/layout/PageTransition';
import SectionHeading from '@components/ui/SectionHeading';
import { researchInterests, researchTimeline } from '@data/research';

const statusConfig = {
  completed: { icon: CheckCircle2, color: 'text-green-400', bg: 'bg-green-400/10', label: 'Completed' },
  ongoing: { icon: Clock, color: 'text-primary', bg: 'bg-primary/10', label: 'In Progress' },
  planned: { icon: Circle, color: 'text-muted', bg: 'bg-muted/10', label: 'Planned' },
};

const interestIcons: Record<string, React.ElementType> = {
  'message-square': BookOpen,
  eye: BookOpen,
  'heart-pulse': BookOpen,
  cpu: BookOpen,
};

export default function Research() {
  const { ref: interestsRef, isInView: interestsInView } = useInView<HTMLDivElement>();
  const { ref: timelineRef, isInView: timelineInView } = useInView<HTMLDivElement>();

  return (
    <PageTransition>
      <div className="pt-20 md:pt-28">
        {/* Research Interests */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Research Interests"
              subtitle="Areas where I focus my academic curiosity and technical expertise."
            />

            <div ref={interestsRef} className="grid md:grid-cols-2 gap-6 mt-12">
              {researchInterests.map((interest, index) => {
                const Icon = interestIcons[interest.icon] || FlaskConical;
                return (
                  <motion.div
                    key={interest.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={interestsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
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
          </div>
        </section>

        {/* Research Timeline */}
        <section className="py-16 md:py-24 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <SectionHeading
              title="Research Timeline"
              subtitle="My journey through the world of AI and machine learning research."
            />

            <div ref={timelineRef} className="max-w-3xl mx-auto mt-12">
              <div className="relative">
                <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border-subtle" />

                {researchTimeline.map((item, index) => {
                  const config = statusConfig[item.status];
                  const Icon = config.icon;

                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.15 }}
                      className="relative pl-12 md:pl-20 pb-12 last:pb-0"
                    >
                      <div className={`absolute left-2 md:left-6 top-1 w-5 h-5 rounded-full border-2 border-bg ${config.bg} flex items-center justify-center`}>
                        <div className={`w-2 h-2 rounded-full ${config.color.replace('text-', 'bg-')}`} />
                      </div>

                      <div className="glass-card rounded-[18px] p-6 hover:border-primary/30 transition-all">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <span className="font-sora font-semibold text-text">{item.title}</span>
                          <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${config.bg} ${config.color}`}>
                            <Icon className="w-3 h-3" />
                            {config.label}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-muted text-sm mb-3">
                          <span className="text-primary">{item.area}</span>
                          <span>&middot;</span>
                          <span>{item.year}</span>
                        </div>
                        <p className="text-muted text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Future Goals */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-card rounded-[24px] p-8 md:p-12 text-center">
              <div className="w-16 h-16 rounded-[18px] bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <FlaskConical className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-sora text-2xl md:text-3xl font-bold text-text mb-4">
                Future Research Goals
              </h2>
              <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                I aim to pursue graduate studies in Machine Learning, focusing on multimodal AI
                systems and their applications in healthcare. My long-term goal is to contribute
                to research that makes AI more accessible, interpretable, and beneficial to society.
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
