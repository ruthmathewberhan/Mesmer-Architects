
import React from 'react';
import { Theme } from '../types';

const About: React.FC<{ theme: Theme }> = ({ theme }) => {
  return (
    <div className="min-h-screen pt-40">
      <section className="px-6 md:px-24 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-red-600 uppercase tracking-widest font-bold text-sm block mb-4">Our Legacy</span>
            <h1 className="font-serif text-4xl md:text-7xl leading-[0.9] mb-12">
              BUILDING <br /> THE <span className="text-red-600">FUTURE</span>
            </h1>
            <div className="space-y-8 text-xl font-sans opacity-80 max-w-xl">
              <p>
                Established in 2008 by Bruck Asrat Haile, our firm was born out of a desire to break away from the ornament-heavy designs of the past. 
              </p>
              <p>
                We believe that architecture is a dialogue between light, shadow, and raw materials. Every line we draw is a statement of intent.
              </p>
              <p className="text-red-600 font-serif italic text-2xl">
                "We don't just design buildings; we choreograph human experiences."
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/founders/800/1000" 
              alt="Founders" 
              className="w-full h-[70vh] object-cover grayscale"
            />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-red-600 hidden md:flex items-end p-8">
              <span className="text-white font-serif text-4xl leading-tight">16 Years of Pushing Boundaries</span>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className={`py-32 px-6 md:px-24 ${theme === 'dark' ? 'bg-zinc-900' : 'bg-gray-100'}`}>
        <h2 className="font-serif text-5xl mb-20 text-center">Creative <span className="text-red-600">Mindset</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { name: 'Bruck Asrat Haile', role: 'Principal Architect & General Manager', img: 'https://picsum.photos/seed/m1/400/500' },
            { name: 'Elena Crimson', role: 'Lead Designer', img: 'https://picsum.photos/seed/m2/400/500' },
            { name: 'Sven Nordling', role: 'Structural Director', img: 'https://picsum.photos/seed/m3/400/500' },
          ].map((member) => (
            <div key={member.name} className="group cursor-pointer">
              <div className="overflow-hidden aspect-[4/5] mb-6 relative">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale" />
                <div className="absolute inset-0 bg-red-600/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="font-serif text-2xl mb-1">{member.name}</h3>
              <p className="text-red-600 text-xs uppercase tracking-widest font-bold">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
