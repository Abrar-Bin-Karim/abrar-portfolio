export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Research', href: '/research' },
  { label: 'Resume', href: '/resume' },
  { label: 'Contact', href: '/contact' },
] as const;

export const SOCIAL_LINKS = [
  { platform: 'GitHub', url: 'https://github.com/Abrar-Bin-Karim', icon: 'github' },
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/abrar-bin-karim', icon: 'linkedin' },
  { platform: 'X', url: 'https://x.com/Abrar_Bin_Karim', icon: 'x' },
  { platform: 'Email', url: 'mailto:abrarkarim@qq.com', icon: 'mail' },
] as const;

export const GITHUB_USERNAME = 'Abrar-Bin-Karim';

export const CONTACT_INFO = {
  name: 'Abrar Bin Karim',
  title: 'Software Engineering Student | AI Researcher | Open Source Enthusiast',
  email: 'abrarkarim@qq.com',
  location: 'Chengdu, Sichuan, China',
  university: 'Sichuan University',
  phone: '',
} as const;

export const ANIMATION_DURATION = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.6,
} as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;
