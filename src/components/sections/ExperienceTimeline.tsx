import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, FlaskConical } from 'lucide-react';
import { useInView } from '@hooks/useScrollAnimation';
import SectionHeading from '@components/ui/SectionHeading';
import { experiences } from '@data/experience';

const typeConfig = {
  work: { icon: Briefcase, color: 'text-primary', bg: 'bg-primary/10' },
  education: { icon: GraduationCap, color: 'text-accent', bg: 'bg-accent/10' },
  research: { icon: FlaskConical, color: 'text-green-400', bg: 'bg-green-400/10' },
};

export default function ExperienceTimeline() {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <section className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Experience & Education"
          subtitle="My academic journey, research experiences, and professional growth."
        />

        <div ref={ref} className="mt-12 max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border-subtle" />

            {experiences.map((item, index) => {
              const config = typeConfig[item.type];
              const Icon = config.icon;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative pl-12 md:pl-20 pb-12 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-2 md:left-6 top-1 w-5 h-5 rounded-full border-2 border-bg ${config.bg} flex items-center justify-center`}
                  >
                    <div className={`w-2 h-2 rounded-full ${config.color.replace('text-', 'bg-')}`} />
                  </div>

                  <div className="glass-card rounded-[18px] p-6 hover:border-primary/30 transition-all">
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className={`w-10 h-10 rounded-[12px] ${config.bg} flex items-center justify-center flex-shrink-0`}
                      >
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
                      {item.description.map((desc, i) => (
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
      </div>
    </section>
  );
}
