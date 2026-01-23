
import React from 'react';
import { Theme } from '../types';

const Contact: React.FC<{ theme: Theme }> = ({ theme }) => {
  return (
    <div className="min-h-screen pt-40 px-6 md:px-24 pb-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div>
          <span className="text-red-600 uppercase tracking-widest font-bold text-sm block mb-4">Get In Touch</span>
          <h1 className="font-serif text-6xl md:text-8xl mb-12">Let's <span className="text-red-600 italic">Build</span></h1>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-red-600 uppercase text-xs tracking-[0.5em] font-bold mb-4">Our Offices</h3>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-xl mb-2">Berlin HQ</h4>
                  <p className="opacity-60 text-sm">Alexanderplatz 4, <br />Berlin, Germany</p>
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-2">Tokyo Studio</h4>
                  <p className="opacity-60 text-sm">Minato City, <br />Tokyo, Japan</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-red-600 uppercase text-xs tracking-[0.5em] font-bold mb-4">Digital</h3>
              <p className="font-serif text-2xl">hello@stark-crimson.com</p>
              <p className="font-serif text-2xl">+49 (0) 30 1234 5678</p>
            </div>
          </div>
        </div>

        <div className={`${theme === 'dark' ? 'bg-zinc-900' : 'bg-gray-100'} p-12 relative overflow-hidden`}>
           {/* Asymmetric Red Background Block */}
           <div className="absolute top-0 right-0 w-24 h-24 bg-red-600 rotate-45 translate-x-12 -translate-y-12"></div>
           
           <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold">Your Name</label>
                  <input type="text" className={`w-full bg-transparent border-b ${theme === 'dark' ? 'border-white/20 focus:border-red-600' : 'border-black/20 focus:border-red-600'} py-3 outline-none transition-colors`} />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold">Your Email</label>
                  <input type="email" className={`w-full bg-transparent border-b ${theme === 'dark' ? 'border-white/20 focus:border-red-600' : 'border-black/20 focus:border-red-600'} py-3 outline-none transition-colors`} />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold">Project Category</label>
                <select className={`w-full bg-transparent border-b ${theme === 'dark' ? 'border-white/20 focus:border-red-600' : 'border-black/20 focus:border-red-600'} py-3 outline-none transition-colors`}>
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Landscape</option>
                  <option>Renovation</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold">Your Vision</label>
                <textarea rows={4} className={`w-full bg-transparent border-b ${theme === 'dark' ? 'border-white/20 focus:border-red-600' : 'border-black/20 focus:border-red-600'} py-3 outline-none transition-colors resize-none`}></textarea>
              </div>
              <button className="bg-red-600 text-white w-full py-4 font-bold uppercase tracking-widest hover:bg-black transition-all">
                Send Inquiry
              </button>
           </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
