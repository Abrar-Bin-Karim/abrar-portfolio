import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'local-first-ai-dev-assistant',
    title: 'Local First AI Dev Assistant',
    description:
      'A privacy-first, command-line AI coding assistant designed to run locally. Helps developers understand repositories, inspect Git history, analyze logs, and explain shell commands without ever sending code to the cloud.',
    image: '',
    techStack: ['Python', 'Typer', 'Rich', 'PyYAML', 'Pytest', 'Git'],
    githubUrl: 'https://github.com/Abrar-Bin-Karim/local-first-ai-dev-assistant',
    liveUrl: '',
    category: 'AI/ML',
  },
  {
    id: 'hybrid-med-dx-3wd',
    title: 'Hybrid Medical Diagnosis System',
    description:
      'A hybrid intelligent medical decision-support system for breast cancer diagnosis using Machine Learning, Three-Way Decision Theory, and Explainable AI with SHAP interpretability. Features an interactive Streamlit dashboard.',
    image: '',
    techStack: ['Python', 'Streamlit', 'SHAP', 'Scikit-learn', 'Jupyter', 'Pandas'],
    githubUrl: 'https://github.com/Abrar-Bin-Karim/Hybrid_med_dx_3wd',
    liveUrl: '',
    category: 'AI/ML',
  },
  {
    id: 'sudoku-solver',
    title: 'Sudoku Solver',
    description:
      'Efficient Sudoku solving algorithms implemented in C++, demonstrating backtracking and constraint satisfaction techniques for computational problem solving.',
    image: '',
    techStack: ['C++', 'Algorithms', 'Backtracking'],
    githubUrl: 'https://github.com/Abrar-Bin-Karim',
    liveUrl: '',
    category: 'Backend',
  },
  {
    id: 'portfolio-website',
    title: 'Personal Portfolio Website',
    description:
      'A premium, high-performance personal portfolio built with React 19, TypeScript, Tailwind CSS v4, and Framer Motion. Features GitHub API integration, light/dark mode, and responsive design.',
    image: '',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    githubUrl: 'https://github.com/Abrar-Bin-Karim',
    liveUrl: '',
    category: 'Frontend',
  },
];

export const projectCategories = ['All', 'AI/ML', 'Frontend', 'Backend'] as const;
