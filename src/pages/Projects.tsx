import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Search } from 'lucide-react';
import { GitHubIcon } from '@/components/common/Icons';
import { useInView } from '@hooks/useScrollAnimation';
import PageTransition from '@components/layout/PageTransition';
import SectionHeading from '@components/ui/SectionHeading';
import Badge from '@components/ui/Badge';
import { projects, projectCategories } from '@data/projects';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const { ref, isInView } = useInView<HTMLDivElement>();

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.techStack.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <PageTransition>
      <div className="pt-20 md:pt-28">
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Projects"
              subtitle="A showcase of my work across AI, software engineering, and research."
            />

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center mt-12 mb-8">
              <div className="flex flex-wrap gap-2">
                {projectCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-[12px] text-sm font-medium transition-all ${
                      activeCategory === category
                        ? 'bg-primary text-white'
                        : 'bg-card text-muted hover:text-text border border-border-subtle'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="relative w-full sm:w-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full sm:w-64 pl-10 pr-4 py-2.5 rounded-[12px] bg-card border border-border-subtle text-text placeholder:text-muted focus:outline-none focus:border-primary/30 transition-colors"
                />
              </div>
            </div>

            {/* Projects Grid */}
            <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ y: -8 }}
                    className="group glass-card rounded-[24px] overflow-hidden hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="relative h-52 bg-surface overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-sora text-5xl font-bold text-primary/30">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                      <div className="absolute top-4 left-4">
                        <Badge>{project.category}</Badge>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="font-sora font-semibold text-text text-lg mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-[8px] bg-primary/10 text-primary text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm text-muted hover:text-text transition-colors"
                        >
                          <GitHubIcon className="w-4 h-4" />
                          Source
                        </a>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-sm text-muted hover:text-text transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted text-lg">No projects found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
