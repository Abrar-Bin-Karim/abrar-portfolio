import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { GitHubIcon } from '@/components/common/Icons';
import { useInView } from '@hooks/useScrollAnimation';
import SectionHeading from '@components/ui/SectionHeading';
import Badge from '@components/ui/Badge';
import { projects } from '@data/projects';

export default function FeaturedProjects() {
  const { ref, isInView } = useInView<HTMLDivElement>();
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of my most impactful work across AI, software engineering, and research."
        />

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group glass-card rounded-[24px] overflow-hidden hover:border-primary/30 transition-all duration-300"
            >
              {/* Project image placeholder */}
              <div className="relative h-48 bg-surface overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-sora text-4xl font-bold text-primary/30">
                    {project.title.charAt(0)}
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge variant="primary">{project.category}</Badge>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-sora font-semibold text-text text-lg mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-[8px] bg-primary/10 text-primary text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-muted hover:text-text transition-colors"
                  >
                          <GitHubIcon className="w-4 h-4" />
                    Code
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-muted hover:text-text transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
