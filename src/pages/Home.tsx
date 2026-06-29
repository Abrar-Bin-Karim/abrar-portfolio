import HeroSection from '@components/sections/HeroSection';
import AboutPreview from '@components/sections/AboutPreview';
import SkillsSection from '@components/sections/SkillsSection';
import FeaturedProjects from '@components/sections/FeaturedProjects';
import ResearchInterests from '@components/sections/ResearchInterests';
import GitHubStats from '@components/sections/GitHubStats';
import ExperienceTimeline from '@components/sections/ExperienceTimeline';
import ContactCTA from '@components/sections/ContactCTA';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <SkillsSection />
      <FeaturedProjects />
      <ResearchInterests />
      <GitHubStats />
      <ExperienceTimeline />
      <ContactCTA />
    </>
  );
}
