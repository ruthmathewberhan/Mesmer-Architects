
import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { Theme } from '../types';

const Home: React.FC<{ theme: Theme }> = ({ theme }) => {
  const featured = PROJECTS[0];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Matching Screenshot 1 */}
      <section className="relative h-screen flex items-end px-6 md:px-24 pb-32">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1547669205-39038d0a1df1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGFyY2hpdGVjdHVyZSUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2MzAzNjUwN3ww&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="Urban Architecture" 
            className="w-full h-full object-cover brightness-50"
          />
          {/* <div className="absolute inset-0 "></div> */}
        </div>

        <div className="z-10 relative max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-1 bg-red-600"></div>
            <span className="text-white uppercase tracking-widest font-bold text-sm">Architecture Studio</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] tracking-tight mb-8 text-white">
            Redefining <br />
            Urban Spaces
          </h1>
          <p className="max-w-xl text-lg md:text-xl font-sans text-white/80 leading-relaxed">
            Bold architectural statements that transform cityscapes and redefine what's possible in modern design
          </p>
        </div>
      </section>

      {/* Who We Are Section - Matching Screenshot 2 */}
      <section className={`py-32 px-6 md:px-24 ${theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" 
                alt="Who We Are Architecture" 
                className={`w-full h-full object-cover ${theme === 'dark' ? 'grayscale' : ''}`}
              />
            </div>
          </div>

          {/* Text Side */}
          <div className="space-y-8">
            <div>
              <span className="text-red-600 uppercase tracking-[0.3em] font-bold text-sm block mb-6">Who We Are</span>
              <h2 className={`font-serif text-4xl md:text-5xl leading-tight ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                Pioneering Design Excellence
              </h2>
            </div>
            
            <div className={`space-y-6 text-lg font-sans leading-relaxed ${theme === 'dark' ? 'text-white/60' : 'text-black/70'}`}>
              <p>
                MESMER is a forward-thinking architectural firm specializing in contemporary design that pushes boundaries while respecting context and community.
              </p>
              <p>
                Our approach combines cutting-edge technology with timeless design principles, creating spaces that are both innovative and enduring.
              </p>
            </div>

            <Link 
              to="/about" 
              className="inline-block bg-red-600 text-white px-12 py-4 font-bold uppercase tracking-widest hover:bg-black transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Stats */}
      <section className={`py-32 px-6 md:px-24 border-y ${theme === 'dark' ? 'border-white/10 bg-black' : 'border-black/5 bg-gray-50'}`}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {[
            { label: 'Completed Projects', value: '124+' },
            { label: 'Awards Won', value: '38' },
            { label: 'Global Offices', value: '03' },
            { label: 'Year Experience', value: '16' },
          ].map((stat) => (
            <div key={stat.label}>
              <h4 className="text-red-600 font-serif text-5xl mb-2">{stat.value}</h4>
              <p className={`uppercase tracking-widest text-xs opacity-50 font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Project Section (Restored) */}
      <section className={`py-32 px-6 md:px-24 ${theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-white'}`}>
        <div className="flex flex-col md:flex-row gap-20 items-end mb-20">
          <h2 className={`font-serif text-5xl md:text-7xl flex-1 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            LATEST <span className="text-red-600">INNOVATION</span>
          </h2>
          <Link to="/portfolio" className="text-red-600 font-bold uppercase tracking-widest flex items-center gap-2 group">
            See Portfolio <span className="group-hover:translate-x-2 transition-transform">→</span>
          </Link>
        </div>
        
        <div className="group relative overflow-hidden">
          <Link to={`/portfolio/${featured.id}`}>
            <div className="aspect-[21/9] overflow-hidden">
              <img 
                src={featured.mainImage} 
                alt={featured.title} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
              />
            </div>
            <div className="absolute bottom-10 left-10 md:left-20 bg-black/80 backdrop-blur-md p-10 border-l-8 border-red-600 max-w-xl">
              <h3 className="font-serif text-4xl mb-4 text-white">{featured.title}</h3>
              <p className="text-white/60 mb-6">{featured.description.substring(0, 150)}...</p>
              <span className="text-red-600 font-bold uppercase tracking-tighter">View Details</span>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
