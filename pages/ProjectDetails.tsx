
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { Theme } from '../types';

const ProjectDetails: React.FC<{ theme: Theme }> = ({ theme }) => {
  const { id } = useParams();
  const project = PROJECTS.find(p => p.id === id);
  const [activeImage, setActiveImage] = useState('');

  useEffect(() => {
    if (project) {
      setActiveImage(project.mainImage);
    }
  }, [project]);

  if (!project) return (
    <div className="h-screen flex items-center justify-center font-serif text-3xl">
      Project Not Found
    </div>
  );

  return (
    <div className={`min-h-screen pt-24 transition-colors duration-500 ${theme === 'dark' ? 'bg-[#121212]' : 'bg-[#f8f8f8]'}`}>
      <div className="max-w-[1800px] mx-auto px-6 py-12">
        {/* Breadcrumb & Title Area */}
        <div className="mb-12">
           <Link to="/portfolio" className="text-red-600 uppercase tracking-widest text-xs font-bold mb-4 inline-block hover:underline">
             ← Back to Portfolio
           </Link>
           <h1 className="font-serif text-4xl md:text-5xl mb-2 leading-tight">
             {project.title}
           </h1>
           <p className="text-red-600 opacity-80 uppercase tracking-widest font-sans font-bold">
             Location: {project.location}
           </p>
        </div>

        {/* Main Content Area - Updated for 70% width main image with spacing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative">
          
          {/* Main Large Stage - centered width at 70% within its column span */}
          <div className="lg:col-span-9 relative group flex items-center justify-center bg-black/10">
            <div className="w-[70%] h-full flex flex-col items-center justify-center py-10">
              <div className="w-full aspect-video lg:aspect-auto lg:h-[75vh] overflow-hidden shadow-2xl">
                <img 
                  src={activeImage} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
              </div>
              {/* Image Info Overlay - placed relative to the restricted image width */}
              <div className="w-full mt-4 text-right">
                <span className={`${theme === 'dark' ? 'text-white' : 'text-black'} opacity-50 font-sans text-xs tracking-widest uppercase`}>
                  Image {project.gallery.indexOf(activeImage) + 1} of {project.gallery.length}
                </span>
              </div>
            </div>
          </div>

          {/* Thumbnails Sidebar */}
          <div className="lg:col-span-3 h-full overflow-y-auto no-scrollbar lg:max-h-[85vh] space-y-4">
            {project.gallery.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveImage(img)}
                className={`w-full aspect-video overflow-hidden border-2 transition-all ${
                  activeImage === img ? 'border-red-600 scale-[0.98]' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img 
                  src={img} 
                  alt={`Thumbnail ${idx}`} 
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Project Description & Specs */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-16 max-w-7xl mx-auto">
          <div className="md:col-span-2">
             <h2 className="font-serif text-3xl mb-8 border-b border-red-600/30 pb-4 inline-block">Design Philosophy</h2>
             <h3 className="font-serif text-2xl mb-6 italic">{project.type}</h3>
             <p className={`text-xl font-sans leading-relaxed opacity-80 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
               {project.description}
             </p>
          </div>
          <div className="bg-red-600 p-10 text-white self-start">
             <h3 className="font-serif text-2xl mb-6 italic">Project Specs</h3>
             <ul className="space-y-4 font-sans uppercase text-sm tracking-tighter">
               <li className="flex justify-between border-b border-white/20 pb-2">
                 <span>Year</span> <span>{project.year}</span>
               </li>
               <li className="flex justify-between border-b border-white/20 pb-2">
                 <span>Client</span> <span>Private Investor</span>
               </li>
               <li className="flex justify-between border-b border-white/20 pb-2">
                 <span>Category</span> <span>{project.category}</span>
               </li>
               <li className="flex justify-between border-b border-white/20 pb-2">
                 <span>Status</span> <span>Completed</span>
               </li>
             </ul>
          </div>
        </div>
      </div>
      
      {/* Dynamic Theme Floating Button */}
      <div className="fixed bottom-8 right-8 z-40">
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-full shadow-2xl border border-white/10">
           <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center animate-pulse">
             <span className="text-white text-lg">★</span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
