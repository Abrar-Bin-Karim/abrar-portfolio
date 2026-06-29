import type { ExperienceItem } from '@/types';

export const experiences: ExperienceItem[] = [
  {
    id: 'edu-1',
    role: 'BSc in Software Engineering',
    organization: 'Sichuan University',
    location: 'Chengdu, Sichuan, China',
    startDate: '2022-09-01',
    endDate: 'Present',
    description: [
      'Pursuing undergraduate degree in Software Engineering with focus on Artificial Intelligence and Machine Learning.',
      'International student passionate about solving real-world problems through technology and research.',
      'Coursework includes algorithms, data structures, software architecture, computer vision, and NLP.',
    ],
    type: 'education',
  },
  {
    id: 'res-1',
    role: 'AI Researcher – Medical AI',
    organization: 'Independent Research',
    location: 'Chengdu, China',
    startDate: '2024-01-01',
    endDate: 'Present',
    description: [
      'Developed a hybrid intelligent medical diagnosis system using Three-Way Decision Theory and Explainable AI.',
      'Applied SHAP interpretability for breast cancer classification on the Wisconsin Diagnostic Breast Cancer Dataset.',
      'Implemented an explicit uncertainty region to flag risky predictions for expert review.',
    ],
    type: 'research',
  },
  {
    id: 'work-1',
    role: 'Open Source Contributor',
    organization: 'GitHub Community',
    location: 'Remote',
    startDate: '2023-06-01',
    endDate: 'Present',
    description: [
      'Building privacy-first developer tools and AI-powered applications.',
      'Created Local First AI Dev Assistant – a CLI tool for repository intelligence and local analysis.',
      'Contributing to AI/ML tooling and maintaining open-source repositories.',
    ],
    type: 'work',
  },
];
