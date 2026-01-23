
import React from 'react';
import { Link } from 'react-router-dom';
import { Project, Theme } from '../types';

interface ProjectCardProps {
  project: Project;
  theme: Theme;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, theme, index }) => {
  const isOdd = index % 2 !== 0;

  return (
    <Link 
      to={`/portfolio/${project.id}`}
      className={`group relative overflow-hidden block ${isOdd ? 'md:mt-24' : ''}`}
    >
      <div className="aspect-[4/5] overflow-hidden relative">
        <img 
          src={project.mainImage} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
        
        {/* Red Accent Block - Asymmetric */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-red-600 translate-x-full group-hover:translate-x-0 transition-transform duration-500 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">→</span>
        </div>
      </div>

      <div className="mt-6">
        <span className="text-red-600 font-sans text-xs uppercase tracking-widest font-bold block mb-2">
          {project.category} / {project.year}
        </span>
        <h3 className={`font-serif text-3xl md:text-4xl mb-2 transition-colors ${theme === 'dark' ? 'group-hover:text-red-600' : 'group-hover:text-red-600'}`}>
          {project.title}
        </h3>
        <p className={`font-sans text-sm opacity-60 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
          {project.location}
        </p>
      </div>
    </Link>
  );
};

export default ProjectCard;
