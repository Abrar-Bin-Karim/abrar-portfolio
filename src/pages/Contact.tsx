import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { GitHubIcon, LinkedInIcon, XIcon } from '@/components/common/Icons';
import { useInView } from '@hooks/useScrollAnimation';
import PageTransition from '@components/layout/PageTransition';
import SectionHeading from '@components/ui/SectionHeading';
import Button from '@components/ui/Button';
import { CONTACT_INFO } from '@/constants';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { ref, isInView } = useInView<HTMLDivElement>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: '', email: '', subject: '', message: '' });

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <PageTransition>
      <div className="pt-20 md:pt-28">
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Get In Touch"
              subtitle="Have a project in mind or want to collaborate? I would love to hear from you."
            />

            <div ref={ref} className="grid lg:grid-cols-5 gap-12 mt-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2 space-y-8"
              >
                <div>
                  <h3 className="font-sora text-xl font-semibold text-text mb-6">
                    Contact Information
                  </h3>
                  <p className="text-muted leading-relaxed mb-8">
                    Feel free to reach out for collaborations, research opportunities,
                    Master's program discussions, or just to say hello. I am always open
                    to discussing new projects and ideas.
                  </p>
                </div>

                <div className="space-y-4">
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="flex items-center gap-4 p-4 rounded-[18px] glass-card hover:border-primary/30 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-[12px] bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted">Email</p>
                      <p className="text-text font-medium">{CONTACT_INFO.email}</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-[18px] glass-card">
                    <div className="w-12 h-12 rounded-[12px] bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted">Location</p>
                      <p className="text-text font-medium">{CONTACT_INFO.location}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-sora font-semibold text-text mb-4">Follow Me</h4>
                  <div className="flex gap-3">
                    <a
                      href="https://github.com/Abrar-Bin-Karim"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-[12px] glass-card text-muted hover:text-text hover:border-primary/30 transition-all"
                      aria-label="GitHub"
                    >
                      <GitHubIcon className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/abrar-bin-karim"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-[12px] glass-card text-muted hover:text-text hover:border-primary/30 transition-all"
                      aria-label="LinkedIn"
                    >
                      <LinkedInIcon className="w-5 h-5" />
                    </a>
                    <a
                      href="https://x.com/Abrar_Bin_Karim"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-[12px] glass-card text-muted hover:text-text hover:border-primary/30 transition-all"
                      aria-label="X"
                    >
                      <XIcon className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-3"
              >
                <form onSubmit={handleSubmit} className="glass-card rounded-[24px] p-6 md:p-8">
                  <h3 className="font-sora text-xl font-semibold text-text mb-6">
                    Send a Message
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-sm text-muted mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-[12px] bg-card border border-border-subtle text-text placeholder:text-muted focus:outline-none focus:border-primary/30 transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm text-muted mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-[12px] bg-card border border-border-subtle text-text placeholder:text-muted focus:outline-none focus:border-primary/30 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm text-muted mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-[12px] bg-card border border-border-subtle text-text placeholder:text-muted focus:outline-none focus:border-primary/30 transition-colors"
                      placeholder="What is this about?"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm text-muted mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-[12px] bg-card border border-border-subtle text-text placeholder:text-muted focus:outline-none focus:border-primary/30 transition-colors resize-none"
                      placeholder="Tell me about your project or idea..."
                    />
                  </div>

                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-green-400 mb-4"
                    >
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Message sent successfully!</span>
                    </motion.div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
