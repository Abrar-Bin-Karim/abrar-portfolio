import type { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', icon: 'code' },
      { name: 'C++', icon: 'code' },
      { name: 'TypeScript', icon: 'code' },
      { name: 'JavaScript', icon: 'code' },
      { name: 'Java', icon: 'code' },
      { name: 'SQL', icon: 'database' },
    ],
  },
  {
    title: 'AI & Machine Learning',
    skills: [
      { name: 'Scikit-learn', icon: 'bar-chart' },
      { name: 'TensorFlow', icon: 'brain' },
      { name: 'PyTorch', icon: 'flame' },
      { name: 'OpenCV', icon: 'eye' },
      { name: 'SHAP', icon: 'bar-chart' },
      { name: 'Pandas', icon: 'database' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'React', icon: 'layout' },
      { name: 'Streamlit', icon: 'globe' },
      { name: 'Node.js', icon: 'server' },
      { name: 'FastAPI', icon: 'zap' },
      { name: 'Tailwind CSS', icon: 'paintbrush' },
      { name: 'Typer', icon: 'terminal' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'Docker', icon: 'container' },
      { name: 'Git', icon: 'git-branch' },
      { name: 'GitHub Actions', icon: 'git-branch' },
      { name: 'Linux', icon: 'terminal' },
      { name: 'AWS', icon: 'cloud' },
      { name: 'Vercel', icon: 'triangle' },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'VS Code', icon: 'code' },
      { name: 'Jupyter', icon: 'book-open' },
      { name: 'Pytest', icon: 'check-circle' },
      { name: 'Postman', icon: 'send' },
      { name: 'Figma', icon: 'pen-tool' },
      { name: 'Notion', icon: 'file-text' },
    ],
  },
];
