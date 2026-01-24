
import React from 'react';
import { GALLERY } from '../constants';
import { Theme } from '../types';

const Gallery: React.FC<{ theme: Theme }> = ({ theme }) => {
  return (
    <div className="min-h-screen pt-40 px-6 md:px-24 pb-32">
      <header className="mb-20">
        <span className="text-red-600 uppercase tracking-widest font-bold text-sm block mb-4">Fragments</span>
        <h1 className="font-serif text-4xl md:text-5xl">The <span className="text-red-600 italic">Gallery</span></h1>
      </header>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {GALLERY.map((item) => (
          <div key={item.id} className="relative group overflow-hidden break-inside-avoid">
            <img 
              src={item.imageUrl} 
              alt={item.title} 
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
            />
            {/* Hover Info */}
            <div className="absolute inset-0 bg-red-600/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-10">
              <div className="text-center text-white">
                <span className="uppercase text-xs tracking-widest font-bold block mb-2">{item.category}</span>
                <h3 className="font-serif text-3xl italic">{item.title}</h3>
                <div className="mt-4 w-12 h-1 bg-white mx-auto"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
