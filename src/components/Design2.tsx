import { ImageWithFallback } from './figma/ImageWithFallback';
import { Menu, X, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

type Page = 'home' | 'about' | 'portfolio' | 'gallery' | 'contact';

interface Design2Props {
  onBackToSelector: () => void;
}

export function Design2({ onBackToSelector }: Design2Props) {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'Urban Residence',
      location: 'New York, USA',
      description: 'Modern residential complex',
      image: 'https://images.unsplash.com/photo-1695067438561-75492f7b6a9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjMwNjU2ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 2,
      title: 'Glass Tower',
      location: 'London, UK',
      description: 'Commercial high-rise',
      image: 'https://images.unsplash.com/photo-1715156153744-d5fd2f1f66eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFzcyUyMGJ1aWxkaW5nJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2MzExMDcyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 3,
      title: 'Minimal House',
      location: 'Tokyo, Japan',
      description: 'Private residence',
      image: 'https://images.unsplash.com/photo-1685537710973-bb88c8452374?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwYXJjaGl0ZWN0dXJlJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzYzMTE3NjY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 4,
      title: 'Contemporary Space',
      location: 'Paris, France',
      description: 'Mixed-use development',
      image: 'https://images.unsplash.com/photo-1681216868987-b7268753b81c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBidWlsZGluZyUyMGRlc2lnbnxlbnwxfHx8fDE3NjMxMTc2Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 5,
      title: 'Concrete Structure',
      location: 'Berlin, Germany',
      description: 'Industrial design',
      image: 'https://images.unsplash.com/photo-1758939378073-0d26737eeb62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMGFyY2hpdGVjdHVyZSUyMGRlc2lnbnxlbnwxfHx8fDE3NjMxMTc2Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 6,
      title: 'Modern Villa',
      location: 'Barcelona, Spain',
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
    'https://images.unsplash.com/photo-1685537710973-bb88c8452374?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwYXJjaGl0ZWN0dXJlJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzYzMTE3NjY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1715156153744-d5fd2f1f66eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFzcyUyMGJ1aWxkaW5nJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2MzExMDcyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1758939378073-0d26737eeb62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMGFyY2hpdGVjdHVyZSUyMGRlc2lnbnxlbnwxfHx8fDE3NjMxMTc2Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1667375721269-448f78e68022?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGFyY2hpdGVjdHVyZSUyMG1vZGVybnxlbnwxfHx8fDE3NjMxMTc2Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm"></div>
        <div className="relative container mx-auto px-6 py-6 flex items-center justify-between">
          <button onClick={onBackToSelector} className="flex items-center gap-3 hover:opacity-70 transition-opacity">
            <span className="text-white tracking-widest">MESMER</span>
          </button>
          
          <nav className="hidden md:flex items-center gap-12">
            <button onClick={() => setCurrentPage('home')} className={`relative text-white ${currentPage === 'home' ? 'after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[1px] after:bg-red-600' : ''} hover:opacity-70 transition-opacity`}>Home</button>
            <button onClick={() => setCurrentPage('about')} className={`relative text-white ${currentPage === 'about' ? 'after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[1px] after:bg-red-600' : ''} hover:opacity-70 transition-opacity`}>About</button>
            <button onClick={() => setCurrentPage('portfolio')} className={`relative text-white ${currentPage === 'portfolio' ? 'after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[1px] after:bg-red-600' : ''} hover:opacity-70 transition-opacity`}>Portfolio</button>
            <button onClick={() => setCurrentPage('gallery')} className={`relative text-white ${currentPage === 'gallery' ? 'after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[1px] after:bg-red-600' : ''} hover:opacity-70 transition-opacity`}>Gallery</button>
            <button onClick={() => setCurrentPage('contact')} className={`relative text-white ${currentPage === 'contact' ? 'after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[1px] after:bg-red-600' : ''} hover:opacity-70 transition-opacity`}>Contact</button>
          </nav>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-black/10">
            <nav className="flex flex-col p-8 gap-6">
              <button onClick={() => { setCurrentPage('home'); setMenuOpen(false); }} className="text-left text-black hover:opacity-70 transition-opacity">Home</button>
              <button onClick={() => { setCurrentPage('about'); setMenuOpen(false); }} className="text-left text-black hover:opacity-70 transition-opacity">About</button>
              <button onClick={() => { setCurrentPage('portfolio'); setMenuOpen(false); }} className="text-left text-black hover:opacity-70 transition-opacity">Portfolio</button>
              <button onClick={() => { setCurrentPage('gallery'); setMenuOpen(false); }} className="text-left text-black hover:opacity-70 transition-opacity">Gallery</button>
              <button onClick={() => { setCurrentPage('contact'); setMenuOpen(false); }} className="text-left text-black hover:opacity-70 transition-opacity">Contact</button>
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
                      <span className="text-white">Mesmer Architects</span>
                    </div>
                    <h1 className="mb-6 text-white">Mesmerizing<br/>Line</h1>
                    <p className="max-w-xl mb-8 text-white">Since 2009, creating architectural statements that transform cityscapes and redefine what's possible in modern design</p>
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
                    <h2 className="mb-6">Mesmerizing Design Excellence</h2>
                    <p className="mb-6">Mesmer Architects & Engineers plc is a forward-thinking architectural firm established in 2009, specializing in contemporary design that pushes boundaries while respecting context and community.</p>
                    <p className="mb-8">Our "Mesmerizing Line" philosophy combines cutting-edge technology with timeless design principles, creating spaces that are both innovative and enduring.</p>
                    <button onClick={() => setCurrentPage('about')} className="bg-red-600 text-white px-8 py-3 hover:bg-red-700 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Stats */}
            <section className="py-20 bg-red-600 text-white">
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
            <section className="py-32 bg-black text-white">
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
          <div className="pt-24">
            {/* About Hero */}
            <section className="container mx-auto px-8 py-20 mb-32">
              <div className="max-w-4xl">
                <p className="text-red-600 mb-6">About Us</p>
                <h1 className="mb-12">We are a design-led architectural practice committed to creating exceptional spaces</h1>
                <div className="space-y-6">
                  <p>Established in 2009, our studio has grown from a small team of passionate architects into a multidisciplinary practice known for innovative design solutions and sustainable approaches.</p>
                  <p>Our work spans residential, commercial, and institutional projects, each approached with the same dedication to excellence and attention to detail. We believe that great architecture emerges from a deep understanding of context, function, and human experience.</p>
                  <p>Collaboration is at the heart of our process. We work closely with clients, consultants, and contractors to bring visions to life while maintaining the highest standards of design quality and project delivery.</p>
                </div>
              </div>
            </section>

            {/* Large Image */}
            <section className="container mx-auto px-8 mb-32">
              <div className="h-[80vh]">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1602872029708-84d970d3382b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBpbnRlcmlvciUyMG1vZGVybnxlbnwxfHx8fDE3NjMxMTc2Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="About"
                  className="w-full h-full object-cover"
                />
              </div>
            </section>

            {/* History */}
            <section className="container mx-auto px-8 py-20 mb-32">
              <div className="max-w-4xl">
                <p className="text-red-600 mb-6">Our Journey</p>
                <h2 className="mb-16">History</h2>
                <div className="space-y-16">
                  <div className="grid md:grid-cols-4 gap-8">
                    <div className="text-red-600">2009</div>
                    <div className="md:col-span-3">
                      <h3 className="mb-3">Foundation</h3>
                      <p>Atelier was founded by three architects who shared a vision of creating meaningful, contextual architecture that would stand the test of time.</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-4 gap-8">
                    <div className="text-red-600">2013</div>
                    <div className="md:col-span-3">
                      <h3 className="mb-3">Growth & Recognition</h3>
                      <p>The practice expanded with the opening of a second studio and received its first major design award for the Urban Residence project.</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-4 gap-8">
                    <div className="text-red-600">2018</div>
                    <div className="md:col-span-3">
                      <h3 className="mb-3">International Expansion</h3>
                      <p>Completed our first international project and established partnerships with leading design firms across Europe and Asia.</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-4 gap-8">
                    <div className="text-red-600">2024</div>
                    <div className="md:col-span-3">
                      <h3 className="mb-3">Present</h3>
                      <p>Today, we are a team of over 30 professionals working on diverse projects worldwide, continuing to push boundaries in architectural design.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {currentPage === 'portfolio' && (
          <div className="pt-24">
            <section className="container mx-auto px-8 py-20">
              <div className="mb-16">
                <p className="text-red-600 mb-4">Our Work</p>
                <h1>Portfolio</h1>
              </div>
              <div className="space-y-32">
                {projects.map((project, index) => (
                  <div key={project.id} className="grid md:grid-cols-2 gap-12 items-center">
                    {index % 2 === 0 ? (
                      <>
                        <div className="h-[500px]">
                          <ImageWithFallback 
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h2 className="mb-4">{project.title}</h2>
                          <p className="text-red-600 mb-6">{project.location}</p>
                          <p className="mb-8">A contemporary architectural solution that seamlessly blends form and function, creating spaces that inspire and endure.</p>
                          <button className="group inline-flex items-center gap-3 hover:gap-5 transition-all">
                            View Project
                            <ArrowUpRight className="group-hover:rotate-45 transition-transform" />
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="order-2 md:order-1">
                          <h2 className="mb-4">{project.title}</h2>
                          <p className="text-red-600 mb-6">{project.location}</p>
                          <p className="mb-8">A contemporary architectural solution that seamlessly blends form and function, creating spaces that inspire and endure.</p>
                          <button className="group inline-flex items-center gap-3 hover:gap-5 transition-all">
                            View Project
                            <ArrowUpRight className="group-hover:rotate-45 transition-transform" />
                          </button>
                        </div>
                        <div className="h-[500px] order-1 md:order-2">
                          <ImageWithFallback 
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {currentPage === 'gallery' && (
          <div className="pt-24">
            <section className="container mx-auto px-8 py-20">
              <div className="mb-16">
                <p className="text-red-600 mb-4">Visual Archive</p>
                <h1>Gallery</h1>
              </div>
              <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
                {galleryImages.map((image, index) => (
                  <div key={index} className="mb-6 break-inside-avoid">
                    <ImageWithFallback 
                      src={image}
                      alt={`Gallery ${index + 1}`}
                      className="w-full"
                    />
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {currentPage === 'contact' && (
          <div className="pt-24">
            <section className="container mx-auto px-8 py-20">
              <div className="grid md:grid-cols-2 gap-20">
                <div>
                  <p className="text-red-600 mb-6">Get in Touch</p>
                  <h1 className="mb-16">Let's create something exceptional together</h1>
                  <div className="space-y-8">
                    <div className="flex gap-4">
                      <MapPin className="text-red-600 flex-shrink-0" />
                      <div>
                        <h3 className="mb-2">Studio</h3>
                        <p>123 Architecture Boulevard<br/>Design District<br/>New York, NY 10001</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Phone className="text-red-600 flex-shrink-0" />
                      <div>
                        <h3 className="mb-2">Phone</h3>
                        <p>+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Mail className="text-red-600 flex-shrink-0" />
                      <div>
                        <h3 className="mb-2">Email</h3>
                        <p>studio@atelier.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <form className="space-y-6">
                    <div>
                      <label className="block mb-2">Name</label>
                      <input type="text" className="w-full p-4 border border-black/20 focus:border-red-600 focus:outline-none transition-colors" />
                    </div>
                    <div>
                      <label className="block mb-2">Email</label>
                      <input type="email" className="w-full p-4 border border-black/20 focus:border-red-600 focus:outline-none transition-colors" />
                    </div>
                    <div>
                      <label className="block mb-2">Project Type</label>
                      <input type="text" className="w-full p-4 border border-black/20 focus:border-red-600 focus:outline-none transition-colors" />
                    </div>
                    <div>
                      <label className="block mb-2">Message</label>
                      <textarea rows={6} className="w-full p-4 border border-black/20 focus:border-red-600 focus:outline-none transition-colors"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-black text-white py-4 hover:bg-red-600 transition-colors">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-black/10 py-16 mt-32">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <p className="tracking-widest mb-4">ATELIER</p>
              <p className="max-w-md">Creating timeless architectural excellence since 2009</p>
            </div>
            <div>
              <h3 className="mb-4">Navigation</h3>
              <div className="space-y-2">
                <button onClick={() => setCurrentPage('home')} className="block hover:text-red-600 transition-colors">Home</button>
                <button onClick={() => setCurrentPage('about')} className="block hover:text-red-600 transition-colors">About</button>
                <button onClick={() => setCurrentPage('portfolio')} className="block hover:text-red-600 transition-colors">Portfolio</button>
                <button onClick={() => setCurrentPage('contact')} className="block hover:text-red-600 transition-colors">Contact</button>
              </div>
            </div>
            <div>
              <h3 className="mb-4">Connect</h3>
              <div className="space-y-2">
                <p className="hover:text-red-600 transition-colors cursor-pointer">Instagram</p>
                <p className="hover:text-red-600 transition-colors cursor-pointer">LinkedIn</p>
                <p className="hover:text-red-600 transition-colors cursor-pointer">Pinterest</p>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-black/10">
            <p>© 2024 Atelier Architecture. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
