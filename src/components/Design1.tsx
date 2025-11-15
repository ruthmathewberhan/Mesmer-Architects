import { ImageWithFallback } from './figma/ImageWithFallback';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';

type Page = 'home' | 'about' | 'portfolio' | 'gallery' | 'contact';

interface Design1Props {
  onBackToSelector: () => void;
}

export function Design1({ onBackToSelector }: Design1Props) {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'Urban Residence',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1695067438561-75492f7b6a9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjMwNjU2ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      year: '2024'
    },
    {
      id: 2,
      title: 'Glass Tower',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1715156153744-d5fd2f1f66eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFzcyUyMGJ1aWxkaW5nJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2MzExMDcyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      year: '2024'
    },
    {
      id: 3,
      title: 'Minimal House',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1685537710973-bb88c8452374?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwYXJjaGl0ZWN0dXJlJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzYzMTE3NjY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      year: '2023'
    },
    {
      id: 4,
      title: 'Contemporary Space',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1681216868987-b7268753b81c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBidWlsZGluZyUyMGRlc2lnbnxlbnwxfHx8fDE3NjMxMTc2Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      year: '2023'
    },
    {
      id: 5,
      title: 'Concrete Structure',
      category: 'Industrial',
      image: 'https://images.unsplash.com/photo-1758939378073-0d26737eeb62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMGFyY2hpdGVjdHVyZSUyMGRlc2lnbnxlbnwxfHx8fDE3NjMxMTc2Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      year: '2023'
    },
    {
      id: 6,
      title: 'Modern Villa',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1667375721269-448f78e68022?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGFyY2hpdGVjdHVyZSUyMG1vZGVybnxlbnwxfHx8fDE3NjMxMTc2Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      year: '2022'
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
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={onBackToSelector} className="hover:text-red-600 transition-colors">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-600"></div>
              <span>ARCH STUDIO</span>
            </div>
          </button>
          
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => setCurrentPage('home')} className={currentPage === 'home' ? 'text-red-600' : 'hover:text-red-600 transition-colors'}>HOME</button>
            <button onClick={() => setCurrentPage('about')} className={currentPage === 'about' ? 'text-red-600' : 'hover:text-red-600 transition-colors'}>ABOUT</button>
            <button onClick={() => setCurrentPage('portfolio')} className={currentPage === 'portfolio' ? 'text-red-600' : 'hover:text-red-600 transition-colors'}>PORTFOLIO</button>
            <button onClick={() => setCurrentPage('gallery')} className={currentPage === 'gallery' ? 'text-red-600' : 'hover:text-red-600 transition-colors'}>GALLERY</button>
            <button onClick={() => setCurrentPage('contact')} className={currentPage === 'contact' ? 'text-red-600' : 'hover:text-red-600 transition-colors'}>CONTACT</button>
          </nav>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-black">
            <nav className="flex flex-col p-6 gap-4">
              <button onClick={() => { setCurrentPage('home'); setMenuOpen(false); }} className={currentPage === 'home' ? 'text-red-600 text-left' : 'text-left hover:text-red-600 transition-colors'}>HOME</button>
              <button onClick={() => { setCurrentPage('about'); setMenuOpen(false); }} className={currentPage === 'about' ? 'text-red-600 text-left' : 'text-left hover:text-red-600 transition-colors'}>ABOUT</button>
              <button onClick={() => { setCurrentPage('portfolio'); setMenuOpen(false); }} className={currentPage === 'portfolio' ? 'text-red-600 text-left' : 'text-left hover:text-red-600 transition-colors'}>PORTFOLIO</button>
              <button onClick={() => { setCurrentPage('gallery'); setMenuOpen(false); }} className={currentPage === 'gallery' ? 'text-red-600 text-left' : 'text-left hover:text-red-600 transition-colors'}>GALLERY</button>
              <button onClick={() => { setCurrentPage('contact'); setMenuOpen(false); }} className={currentPage === 'contact' ? 'text-red-600 text-left' : 'text-left hover:text-red-600 transition-colors'}>CONTACT</button>
            </nav>
          </div>
        )}
      </header>

      {/* Content */}
      <main className="pt-20">
        {currentPage === 'home' && (
          <div>
            {/* Hero Section */}
            <section className="relative h-[80vh] overflow-hidden">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1695067438561-75492f7b6a9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjMwNjU2ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Hero"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center text-white max-w-4xl px-6">
                  <div className="w-16 h-1 bg-red-600 mx-auto mb-8"></div>
                  <h1 className="mb-6">DESIGNING SPACES<br/>BUILDING DREAMS</h1>
                  <p className="mb-8 max-w-2xl mx-auto">We transform architectural visions into reality through innovative design and precise execution</p>
                  <button onClick={() => setCurrentPage('portfolio')} className="bg-red-600 text-white px-8 py-3 hover:bg-red-700 transition-colors flex items-center gap-2 mx-auto">
                    VIEW PROJECTS <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 border-b border-black">
              <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="text-red-600 mb-2">15+</div>
                    <p>YEARS EXPERIENCE</p>
                  </div>
                  <div className="text-center">
                    <div className="text-red-600 mb-2">200+</div>
                    <p>PROJECTS COMPLETED</p>
                  </div>
                  <div className="text-center">
                    <div className="text-red-600 mb-2">50+</div>
                    <p>AWARDS WON</p>
                  </div>
                  <div className="text-center">
                    <div className="text-red-600 mb-2">30+</div>
                    <p>TEAM MEMBERS</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Services Section */}
            <section className="py-20">
              <div className="container mx-auto px-6">
                <div className="mb-12">
                  <div className="w-16 h-1 bg-red-600 mb-4"></div>
                  <h2>OUR SERVICES</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="border border-black p-8 hover:bg-black hover:text-white transition-all group">
                    <div className="w-12 h-1 bg-red-600 mb-4"></div>
                    <h3 className="mb-4">ARCHITECTURE DESIGN</h3>
                    <p>Comprehensive architectural design solutions from concept to completion</p>
                  </div>
                  <div className="border border-black p-8 hover:bg-black hover:text-white transition-all group">
                    <div className="w-12 h-1 bg-red-600 mb-4"></div>
                    <h3 className="mb-4">INTERIOR DESIGN</h3>
                    <p>Creating functional and aesthetically pleasing interior spaces</p>
                  </div>
                  <div className="border border-black p-8 hover:bg-black hover:text-white transition-all group">
                    <div className="w-12 h-1 bg-red-600 mb-4"></div>
                    <h3 className="mb-4">PROJECT MANAGEMENT</h3>
                    <p>End-to-end project management ensuring timely delivery</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {currentPage === 'about' && (
          <div>
            {/* About Hero */}
            <section className="py-20 border-b border-black">
              <div className="container mx-auto px-6">
                <div className="w-16 h-1 bg-red-600 mb-4"></div>
                <h1 className="mb-8">ABOUT US</h1>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <p className="mb-6">Founded in 2009, Arch Studio has been at the forefront of innovative architectural design, creating spaces that blend functionality with aesthetic excellence.</p>
                    <p className="mb-6">Our multidisciplinary team brings together expertise in architecture, interior design, and urban planning to deliver exceptional projects across residential, commercial, and institutional sectors.</p>
                    <p>We believe in sustainable design practices and creating buildings that not only serve their purpose but also enhance the environment and community they inhabit.</p>
                  </div>
                  <div className="h-[500px]">
                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1681216868987-b7268753b81c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBidWlsZGluZyUyMGRlc2lnbnxlbnwxfHx8fDE3NjMxMTc2Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="About"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* History Timeline */}
            <section className="py-20">
              <div className="container mx-auto px-6">
                <div className="w-16 h-1 bg-red-600 mb-4"></div>
                <h2 className="mb-12">OUR HISTORY</h2>
                <div className="space-y-12">
                  <div className="grid md:grid-cols-12 gap-6">
                    <div className="md:col-span-2">
                      <div className="text-red-600">2009</div>
                    </div>
                    <div className="md:col-span-10 border-l-2 border-black pl-6">
                      <h3 className="mb-2">FOUNDATION</h3>
                      <p>Arch Studio was founded by a group of passionate architects with a vision to redefine modern architecture.</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-12 gap-6">
                    <div className="md:col-span-2">
                      <div className="text-red-600">2013</div>
                    </div>
                    <div className="md:col-span-10 border-l-2 border-black pl-6">
                      <h3 className="mb-2">EXPANSION</h3>
                      <p>Opened our second office and expanded our team to 20 professionals, taking on larger commercial projects.</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-12 gap-6">
                    <div className="md:col-span-2">
                      <div className="text-red-600">2017</div>
                    </div>
                    <div className="md:col-span-10 border-l-2 border-black pl-6">
                      <h3 className="mb-2">RECOGNITION</h3>
                      <p>Received our first international design award for the Urban Residence project, establishing our reputation globally.</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-12 gap-6">
                    <div className="md:col-span-2">
                      <div className="text-red-600">2024</div>
                    </div>
                    <div className="md:col-span-10 border-l-2 border-black pl-6">
                      <h3 className="mb-2">PRESENT DAY</h3>
                      <p>Today, we are a team of 30+ professionals, having completed over 200 projects worldwide with numerous accolades.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {currentPage === 'portfolio' && (
          <div>
            <section className="py-20">
              <div className="container mx-auto px-6">
                <div className="w-16 h-1 bg-red-600 mb-4"></div>
                <h1 className="mb-12">PORTFOLIO</h1>
                <div className="grid md:grid-cols-2 gap-8">
                  {projects.map((project) => (
                    <div key={project.id} className="group cursor-pointer">
                      <div className="relative h-[400px] overflow-hidden mb-4">
                        <ImageWithFallback 
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all"></div>
                      </div>
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="mb-1">{project.title}</h3>
                          <p>{project.category}</p>
                        </div>
                        <div className="text-red-600">{project.year}</div>
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
            <section className="py-20">
              <div className="container mx-auto px-6">
                <div className="w-16 h-1 bg-red-600 mb-4"></div>
                <h1 className="mb-12">GALLERY</h1>
                <div className="grid md:grid-cols-3 gap-4">
                  {galleryImages.map((image, index) => (
                    <div key={index} className="aspect-square overflow-hidden group cursor-pointer">
                      <ImageWithFallback 
                        src={image}
                        alt={`Gallery ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
            <section className="py-20">
              <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <div className="w-16 h-1 bg-red-600 mb-4"></div>
                    <h1 className="mb-8">GET IN TOUCH</h1>
                    <div className="space-y-6">
                      <div>
                        <h3 className="mb-2">ADDRESS</h3>
                        <p>123 Architecture Boulevard<br/>Design District, NY 10001</p>
                      </div>
                      <div>
                        <h3 className="mb-2">PHONE</h3>
                        <p>+1 (555) 123-4567</p>
                      </div>
                      <div>
                        <h3 className="mb-2">EMAIL</h3>
                        <p>info@archstudio.com</p>
                      </div>
                      <div>
                        <h3 className="mb-2">HOURS</h3>
                        <p>Monday - Friday: 9:00 - 18:00<br/>Saturday: 10:00 - 14:00<br/>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-black p-8">
                    <h3 className="text-white mb-6">SEND US A MESSAGE</h3>
                    <form className="space-y-4">
                      <input type="text" placeholder="NAME" className="w-full p-3 bg-transparent border border-white text-white placeholder-white/50" />
                      <input type="email" placeholder="EMAIL" className="w-full p-3 bg-transparent border border-white text-white placeholder-white/50" />
                      <input type="text" placeholder="SUBJECT" className="w-full p-3 bg-transparent border border-white text-white placeholder-white/50" />
                      <textarea placeholder="MESSAGE" rows={5} className="w-full p-3 bg-transparent border border-white text-white placeholder-white/50"></textarea>
                      <button type="submit" className="bg-red-600 text-white px-8 py-3 hover:bg-red-700 transition-colors w-full">SEND MESSAGE</button>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t-4 border-red-600">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-red-600"></div>
                <span>ARCH STUDIO</span>
              </div>
              <p>Designing exceptional spaces since 2009</p>
            </div>
            <div>
              <h3 className="mb-4">QUICK LINKS</h3>
              <div className="space-y-2">
                <button onClick={() => setCurrentPage('home')} className="block hover:text-red-600 transition-colors">HOME</button>
                <button onClick={() => setCurrentPage('about')} className="block hover:text-red-600 transition-colors">ABOUT</button>
                <button onClick={() => setCurrentPage('portfolio')} className="block hover:text-red-600 transition-colors">PORTFOLIO</button>
              </div>
            </div>
            <div>
              <h3 className="mb-4">FOLLOW US</h3>
              <div className="space-y-2">
                <p>Instagram</p>
                <p>LinkedIn</p>
                <p>Twitter</p>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-center">
            <p>© 2024 ARCH STUDIO. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
