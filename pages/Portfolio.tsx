
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from '../components/ProjectCard';
import { Theme } from '../types';

const Portfolio: React.FC<{ theme: Theme }> = ({ theme }) => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Residential', 'Commercial', 'Public'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="min-h-screen pt-40 px-6 md:px-24 pb-32">
      <header className="mb-20">
        <h1 className="font-serif text-4xl md:text-5xl mb-12">Our <span className="text-red-600 italic">Portfolio</span></h1>
        
        <div className="flex flex-wrap gap-4 md:gap-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-sm uppercase tracking-widest font-bold py-2 border-b-2 transition-all ${
                filter === cat ? 'text-red-600 border-red-600' : 'border-transparent opacity-40 hover:opacity-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
        {filteredProjects.map((project, idx) => (
          <ProjectCard key={project.id} project={project} theme={theme} index={idx} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
