import type { ResearchItem } from '@/types';

export const researchInterests = [
  {
    title: 'Large Language Models',
    description:
      'Exploring fine-tuning strategies, prompt engineering, and alignment techniques for domain-specific LLM applications. Currently developing a secure local-first AI coding assistant.',
    icon: 'message-square',
  },
  {
    title: 'Computer Vision',
    description:
      'Developing deep learning models for medical imaging, object detection, and visual understanding tasks with a focus on interpretability and clinical safety.',
    icon: 'eye',
  },
  {
    title: 'Medical AI & Explainability',
    description:
      'Building AI-driven diagnostic tools using Three-Way Decision Theory and SHAP to provide uncertainty-aware, explainable predictions that assist healthcare professionals.',
    icon: 'heart-pulse',
  },
  {
    title: 'IoT Security',
    description:
      'Researching secure architectures for IoT systems and exploring how AI can enhance threat detection and anomaly identification in connected device networks.',
    icon: 'cpu',
  },
];

export const researchTimeline: ResearchItem[] = [
  {
    id: 'res-1',
    title: 'Foundation in Software Engineering',
    area: 'Education',
    description:
      'Began BSc in Software Engineering at Sichuan University. Completed foundational coursework in programming, algorithms, and system design.',
    status: 'completed',
    year: '2022',
  },
  {
    id: 'res-2',
    title: 'Introduction to AI & Machine Learning',
    area: 'Foundation',
    description:
      'Self-studied machine learning fundamentals, built first neural networks, and explored computer vision and NLP concepts through coursework and Kaggle competitions.',
    status: 'completed',
    year: '2023',
  },
  {
    id: 'res-3',
    title: 'Hybrid Medical Diagnosis Research',
    area: 'Medical AI',
    description:
      'Developed a Three-Way Decision framework for breast cancer classification using SHAP explainability. Achieved uncertainty-aware predictions with explicit deferral regions.',
    status: 'completed',
    year: '2024',
  },
  {
    id: 'res-4',
    title: 'Local First AI Development Assistant',
    area: 'NLP / Developer Tools',
    description:
      'Building a privacy-focused CLI tool that uses local LLMs to assist developers with repository understanding, Git analysis, and log exploration without cloud dependency.',
    status: 'ongoing',
    year: '2025',
  },
  {
    id: 'res-5',
    title: 'Master\'s Program Applications',
    area: 'Academic',
    description:
      'Preparing applications for Master\'s programs in Computer Science with a focus on AI and Machine Learning research.',
    status: 'ongoing',
    year: '2025',
  },
  {
    id: 'res-6',
    title: 'Multimodal AI & IoT Security',
    area: 'Multimodal AI',
    description:
      'Planning research into multimodal AI systems and their application in IoT security for intelligent threat detection and automated response.',
    status: 'planned',
    year: '2026',
  },
];
