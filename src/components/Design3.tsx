import { ImageWithFallback } from './figma/ImageWithFallback';
import { Menu, X, Send } from 'lucide-react';
import { useState } from 'react';

type Page = 'home' | 'about' | 'portfolio' | 'gallery' | 'contact';

interface Design3Props {
  onBackToSelector: () => void;
}

export function Design3({ onBackToSelector }: Design3Props) {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'Urban Residence',
      description: 'Modern residential complex',
      image: 'https://images.unsplash.com/photo-1695067438561-75492f7b6a9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjMwNjU2ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 2,
      title: 'Glass Tower',
      description: 'Commercial high-rise',
      image: 'https://images.unsplash.com/photo-1715156153744-d5fd2f1f66eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFzcyUyMGJ1aWxkaW5nJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2MzExMDcyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 3,
      title: 'Minimal House',
      description: 'Private residence',
      image: 'https://images.unsplash.com/photo-1685537710973-bb88c8452374?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwYXJjaGl0ZWN0dXJlJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzYzMTE3NjY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 4,
      title: 'Contemporary Space',
      description: 'Mixed-use development',
      image: 'https://images.unsplash.com/photo-1681216868987-b7268753b81c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBidWlsZGluZyUyMGRlc2lnbnxlbnwxfHx8fDE3NjMxMTc2Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 5,
      title: 'Concrete Structure',
      description: 'Industrial design',
      image: 'https://images.unsplash.com/photo-1758939378073-0d26737eeb62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMGFyY2hpdGVjdHVyZSUyMGRlc2lnbnxlbnwxfHx8fDE3NjMxMTc2Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 6,
      title: 'Modern Villa',
      description: 'Luxury residential',
      image: 'https://images.unsplash.com/photo-1667375721269-448f78e68022?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGFyY2hpdGVjdHVyZSUyMG1vZGVybnxlbnwxfHx8fDE3NjMxMTc2Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1547669205-39038d0a1df1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGFyY2hpdGVjdHVyZSUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2MzAzNjUwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1602872029708-84d970d3382b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBpbnRlcmlvciUyMG1vZGVybnxlbnwxfHx8fDE3NjMxMTc2Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1651510351672-620d8dc31b72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYnVpbGRpbmclMjBmYWNhZGV8ZW58MXx8fHwxNzYzMTE3NjY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1627141234469-24711efb373c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBob3VzZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjMwNDkzMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1695067438561-75492f7b6a9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjMwNjU2ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1685537710973-bb88c8452374?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwYXJjaGl0ZWN0dXJlJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzYzMTE3NjY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm"></div>
        <div className="relative container mx-auto px-6 py-6 flex items-center justify-between">
          <button onClick={onBackToSelector} className="flex items-center gap-3 hover:opacity-70 transition-opacity">
            <div className="w-8 h-8 bg-red-600"></div>
            <span>MESMER</span>
          </button>
          
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => setCurrentPage('home')} className={currentPage === 'home' ? 'text-red-600' : 'hover:text-red-600 transition-colors'}>Home</button>
            <button onClick={() => setCurrentPage('about')} className={currentPage === 'about' ? 'text-red-600' : 'hover:text-red-600 transition-colors'}>About</button>
            <button onClick={() => setCurrentPage('portfolio')} className={currentPage === 'portfolio' ? 'text-red-600' : 'hover:text-red-600 transition-colors'}>Portfolio</button>
            <button onClick={() => setCurrentPage('gallery')} className={currentPage === 'gallery' ? 'text-red-600' : 'hover:text-red-600 transition-colors'}>Gallery</button>
            <button onClick={() => setCurrentPage('contact')} className="bg-red-600 px-6 py-2 hover:bg-red-700 transition-colors">Contact</button>
          </nav>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="relative md:hidden bg-black/95 backdrop-blur-md">
            <nav className="flex flex-col p-6 gap-4">
              <button onClick={() => { setCurrentPage('home'); setMenuOpen(false); }} className={currentPage === 'home' ? 'text-red-600 text-left' : 'text-left hover:text-red-600 transition-colors'}>Home</button>
              <button onClick={() => { setCurrentPage('about'); setMenuOpen(false); }} className={currentPage === 'about' ? 'text-red-600 text-left' : 'text-left hover:text-red-600 transition-colors'}>About</button>
              <button onClick={() => { setCurrentPage('portfolio'); setMenuOpen(false); }} className={currentPage === 'portfolio' ? 'text-red-600 text-left' : 'text-left hover:text-red-600 transition-colors'}>Portfolio</button>
              <button onClick={() => { setCurrentPage('gallery'); setMenuOpen(false); }} className={currentPage === 'gallery' ? 'text-red-600 text-left' : 'text-left hover:text-red-600 transition-colors'}>Gallery</button>
              <button onClick={() => { setCurrentPage('contact'); setMenuOpen(false); }} className={currentPage === 'contact' ? 'text-red-600 text-left' : 'text-left hover:text-red-600 transition-colors'}>Contact</button>
            </nav>
          </div>
        )}
      </header>

      {/* Content */}
      <main>
        {currentPage === 'home' && (
          <div>
            {/* Hero Section */}
            <section className="relative h-screen">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1547669205-39038d0a1df1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGFyY2hpdGVjdHVyZSUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2MzAzNjUwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Hero"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
                <div className="container mx-auto">
                  <div className="max-w-3xl">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-1 bg-red-600"></div>
                      <span>Mesmer Architects</span>
                    </div>
                    <h1 className="mb-6">Mesmerizing<br/>Line</h1>
                    <p className="max-w-xl mb-8">Since 2009, creating bold architectural statements that transform cityscapes and redefine what's possible in modern design</p>
                  </div>
                </div>
              </div>
            </section>

            {/* About Preview */}
            <section className="py-32 bg-white text-black">
              <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                  <div className="relative">
                    <div className="absolute -top-8 -left-8 w-32 h-32 bg-red-600 -z-10"></div>
                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1685537710973-bb88c8452374?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwYXJjaGl0ZWN0dXJlJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzYzMTE3NjY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="About"
                      className="w-full aspect-square object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-red-600 mb-4">Who We Are</p>
                    <h2 className="mb-6">Pioneering Design Excellence</h2>
                    <p className="mb-6">Element is a forward-thinking architectural firm specializing in contemporary design that pushes boundaries while respecting context and community.</p>
                    <p className="mb-8">Our approach combines cutting-edge technology with timeless design principles, creating spaces that are both innovative and enduring.</p>
                    <button onClick={() => setCurrentPage('about')} className="bg-red-600 text-white px-8 py-3 hover:bg-red-700 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Stats */}
            <section className="py-20 bg-red-600">
              <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="mb-2">15</div>
                    <p>Years</p>
                  </div>
                  <div>
                    <div className="mb-2">200+</div>
                    <p>Projects</p>
                  </div>
                  <div>
                    <div className="mb-2">50+</div>
                    <p>Awards</p>
                  </div>
                  <div>
                    <div className="mb-2">30+</div>
                    <p>Team</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Featured Projects */}
            <section className="py-32">
              <div className="container mx-auto px-6">
                <div className="flex items-center gap-4 mb-12">
                  <div className="w-16 h-1 bg-red-600"></div>
                  <h2>Featured Projects</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  {projects.slice(0, 3).map((project) => (
                    <div key={project.id} className="group cursor-pointer">
                      <div className="relative h-[400px] overflow-hidden mb-4">
                        <ImageWithFallback 
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500 flex items-center justify-center">
                          <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center">
                            <h3 className="mb-2">{project.title}</h3>
                            <p>{project.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-12">
                  <button onClick={() => setCurrentPage('portfolio')} className="border border-white px-8 py-3 hover:bg-white hover:text-black transition-colors">
                    View All Projects
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {currentPage === 'about' && (
          <div>
            {/* About Hero */}
            <section className="pt-32 pb-20 bg-white text-black">
              <div className="container mx-auto px-6">
                <div className="max-w-4xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-1 bg-red-600"></div>
                    <span className="text-red-600">About Element</span>
                  </div>
                  <h1 className="mb-8">We design the future of architecture</h1>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <p className="mb-6">Founded in 2009, Element has established itself as a leader in contemporary architecture, creating bold structures that define skylines and communities.</p>
                      <p>Our multidisciplinary team brings together diverse expertise in architecture, engineering, and sustainable design to deliver projects that exceed expectations.</p>
                    </div>
                    <div>
                      <p className="mb-6">We believe architecture has the power to transform lives and shape the future. Every project is an opportunity to innovate, inspire, and create lasting value.</p>
                      <p>From concept to completion, we collaborate closely with clients to bring their visions to life while maintaining our commitment to design excellence and sustainability.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Large Image */}
            <section className="h-[70vh]">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1681216868987-b7268753b81c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBidWlsZGluZyUyMGRlc2lnbnxlbnwxfHx8fDE3NjMxMTc2Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="About Visual"
                className="w-full h-full object-cover"
              />
            </section>

            {/* History */}
            <section className="py-32 bg-white text-black">
              <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                  <div className="flex items-center gap-4 mb-12">
                    <div className="w-16 h-1 bg-red-600"></div>
                    <h2>Our Journey</h2>
                  </div>
                  <div className="space-y-12">
                    <div className="flex gap-8">
                      <div className="text-red-600 flex-shrink-0">2009</div>
                      <div className="border-l-2 border-red-600 pl-8">
                        <h3 className="mb-3">The Beginning</h3>
                        <p>Element was born from a shared vision of three architects who wanted to challenge conventional design norms and create architecture that truly matters.</p>
                      </div>
                    </div>
                    <div className="flex gap-8">
                      <div className="text-red-600 flex-shrink-0">2014</div>
                      <div className="border-l-2 border-red-600 pl-8">
                        <h3 className="mb-3">Breaking Through</h3>
                        <p>Our Urban Residence project won the International Design Award, putting Element on the global architectural map and opening doors to major projects.</p>
                      </div>
                    </div>
                    <div className="flex gap-8">
                      <div className="text-red-600 flex-shrink-0">2019</div>
                      <div className="border-l-2 border-red-600 pl-8">
                        <h3 className="mb-3">Global Expansion</h3>
                        <p>Opened offices in three continents, expanding our reach and bringing our design philosophy to diverse markets and cultures worldwide.</p>
                      </div>
                    </div>
                    <div className="flex gap-8">
                      <div className="text-red-600 flex-shrink-0">2024</div>
                      <div className="border-l-2 border-red-600 pl-8">
                        <h3 className="mb-3">Today</h3>
                        <p>A team of 30+ professionals working on cutting-edge projects worldwide, continuing to push the boundaries of what's possible in architecture.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {currentPage === 'portfolio' && (
          <div>
            <section className="pt-32 pb-20">
              <div className="container mx-auto px-6">
                <div className="flex items-center gap-4 mb-12">
                  <div className="w-16 h-1 bg-red-600"></div>
                  <h1>Our Portfolio</h1>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.map((project) => (
                    <div key={project.id} className="group cursor-pointer">
                      <div className="relative h-[450px] overflow-hidden mb-4">
                        <ImageWithFallback 
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-100 group-hover:opacity-100 transition-opacity"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="mb-2">{project.title}</h3>
                          <p>{project.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {currentPage === 'gallery' && (
          <div>
            <section className="pt-32 pb-20">
              <div className="container mx-auto px-6">
                <div className="flex items-center gap-4 mb-12">
                  <div className="w-16 h-1 bg-red-600"></div>
                  <h1>Gallery</h1>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {galleryImages.map((image, index) => (
                    <div key={index} className="aspect-square overflow-hidden group cursor-pointer">
                      <ImageWithFallback 
                        src={image}
                        alt={`Gallery ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {currentPage === 'contact' && (
          <div>
            <section className="pt-32 pb-20 bg-white text-black">
              <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-1 bg-red-600"></div>
                      <span className="text-red-600">Get In Touch</span>
                    </div>
                    <h1 className="mb-12">Let's Build Something Extraordinary</h1>
                    <div className="space-y-8">
                      <div>
                        <h3 className="mb-2 text-red-600">Visit Us</h3>
                        <p>123 Architecture Boulevard<br/>Design District, NY 10001<br/>United States</p>
                      </div>
                      <div>
                        <h3 className="mb-2 text-red-600">Call Us</h3>
                        <p>+1 (555) 123-4567<br/>+1 (555) 987-6543</p>
                      </div>
                      <div>
                        <h3 className="mb-2 text-red-600">Email Us</h3>
                        <p>hello@element.studio<br/>projects@element.studio</p>
                      </div>
                      <div>
                        <h3 className="mb-2 text-red-600">Office Hours</h3>
                        <p>Monday - Friday: 9:00 - 18:00<br/>Saturday: 10:00 - 14:00<br/>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-black text-white p-8">
                    <h3 className="mb-8">Send a Message</h3>
                    <form className="space-y-6">
                      <div>
                        <input type="text" placeholder="Your Name" className="w-full p-4 bg-white/5 border border-white/20 focus:border-red-600 focus:outline-none transition-colors" />
                      </div>
                      <div>
                        <input type="email" placeholder="Your Email" className="w-full p-4 bg-white/5 border border-white/20 focus:border-red-600 focus:outline-none transition-colors" />
                      </div>
                      <div>
                        <input type="text" placeholder="Project Type" className="w-full p-4 bg-white/5 border border-white/20 focus:border-red-600 focus:outline-none transition-colors" />
                      </div>
                      <div>
                        <textarea placeholder="Tell us about your project" rows={5} className="w-full p-4 bg-white/5 border border-white/20 focus:border-red-600 focus:outline-none transition-colors"></textarea>
                      </div>
                      <button type="submit" className="w-full bg-red-600 text-white px-8 py-4 hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
                        Send Message <Send size={20} />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white text-black py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-600"></div>
                <span>ELEMENT</span>
              </div>
              <p>Redefining architecture since 2009</p>
            </div>
            <div>
              <h3 className="mb-4 text-red-600">Quick Links</h3>
              <div className="space-y-2">
                <button onClick={() => setCurrentPage('home')} className="block hover:text-red-600 transition-colors">Home</button>
                <button onClick={() => setCurrentPage('about')} className="block hover:text-red-600 transition-colors">About</button>
                <button onClick={() => setCurrentPage('portfolio')} className="block hover:text-red-600 transition-colors">Portfolio</button>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-red-600">Services</h3>
              <div className="space-y-2">
                <p>Architecture</p>
                <p>Interior Design</p>
                <p>Urban Planning</p>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-red-600">Follow</h3>
              <div className="space-y-2">
                <p className="hover:text-red-600 transition-colors cursor-pointer">Instagram</p>
                <p className="hover:text-red-600 transition-colors cursor-pointer">LinkedIn</p>
                <p className="hover:text-red-600 transition-colors cursor-pointer">Behance</p>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-black/10">
            <p>© 2024 Element Architecture Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
