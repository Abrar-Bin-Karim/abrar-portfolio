import { motion } from 'framer-motion';
import { Star, GitFork, Users, BookOpen } from 'lucide-react';
import { GitHubIcon } from '@/components/common/Icons';
import { useInView } from '@hooks/useScrollAnimation';
import { useGitHubStats } from '@hooks/useGitHub';
import SectionHeading from '@components/ui/SectionHeading';
import AnimatedCounter from '@components/ui/AnimatedCounter';

export default function GitHubStats() {
  const { stats, loading } = useGitHubStats();
  const { ref, isInView } = useInView<HTMLDivElement>();

  const statItems = [
    { label: 'Repositories', value: stats.repos, icon: BookOpen },
    { label: 'Stars Earned', value: stats.stars, icon: Star },
    { label: 'Followers', value: stats.followers, icon: Users },
    { label: 'Following', value: stats.following, icon: GitFork },
  ];

  return (
    <section className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="GitHub Presence"
          subtitle="My open-source contributions and community engagement."
        />

        <div ref={ref} className="mt-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {statItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-[24px] p-6 md:p-8 text-center group hover:border-primary/30 transition-all"
              >
                <div className="w-12 h-12 rounded-[12px] bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="font-sora text-3xl md:text-4xl font-bold text-text mb-2">
                  {loading ? (
                    <span className="animate-pulse">--</span>
                  ) : (
                    <AnimatedCounter end={item.value} />
                  )}
                </div>
                <p className="text-muted text-sm">{item.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <a
              href="https://github.com/Abrar-Bin-Karim"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-[12px] glass-card text-muted hover:text-text hover:border-primary/30 transition-all"
            >
              <GitHubIcon className="w-5 h-5" />
              View GitHub Profile
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
