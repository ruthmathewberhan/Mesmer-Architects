
import { Project, GalleryItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'yibe-luxury-apartments',
    title: 'YIBE Luxury Apartments',
    location: 'Addis Ababa, Ethiopia',
    year: '2024',
    category: 'Residential',
    type: 'High-Rise Residential / Mixed-Use',
    designStyle: 'Modern Biophilic & Eco-Contemporary',
    description: 'A vibrant synthesis of modern biophilia and cultural narrative set against the urban skyline of Addis Ababa. This project explores the intersection of warm timber-clad volumes, crisp geometric framing, and cascading vertical greenery—anchored by an articulated louvered podium that celebrates contemporary African identity while remaining seamlessly open to the surrounding city.',
    
    mainImage: '/afrika.jpg',
    gallery: [
      '/afrika.jpg',
      '/afrika1.jpg',
      '/afrika3.jpg',
      '/afrika4.jpg',
      '/afrika6.jpg',
      '/afrika7.jpg',
      '/afrika8.jpg'
    ]
  },
  {
    id: 'villa-shaka',
    title: 'Villa Shaka',
    location: 'Shaka, Oromia, Ethiopia',
    year: '2023',
    category: 'Residential',
    type: 'Private Villa / Luxury Residence',
    description: 'A striking expression of contemporary luxury nestled within a refined urban landscape. This project explores the interplay between bold geometric cantilevers, soaring glass-encased atriums, and warm ambient lighting—creating a grand residence that balances monumental privacy with an effortless, luminous elegance.',
    mainImage: '/VillaShaka.jpg',
    gallery: [
      '/VillaShaka.jpg',
      '/villaShaka2.jpg',
      '/villaShaka5.jpg',
      '/villaShaka4.jpg',
      
    ]
  },
   {
    id: 'lux-appartments-spa',
    title: 'Luxury Apartments & Spa',
    location: 'Addis Ababa, Ethiopia',
    year: '2023',
    category: 'Commercial',
    type: ' Luxury Apartments & Spa',
    description: 'A striking expression of contemporary luxury nestled within a refined urban landscape. This project explores the interplay between bold geometric cantilevers, soaring glass-encased atriums, and warm ambient lighting—creating a grand residence that balances monumental privacy with an effortless, luminous elegance.',
    mainImage: '/luxappartment.jpg',
    gallery: [
      '/luxappartment.jpg',
      '/luxappartment1.jpg',
      '/luxappartment6.jpg',
      '/luxappartment7.jpg'
      
    ]
  },
  {
    id: 'bole-homes',
    title: 'Bole Homes',
    location: 'Addis Ababa, Ethiopia',
    year: '2025',
    category: 'Residential',
    type: 'Multi-Level Luxury Residence / Private Villa',
    description: 'A vibrant study in architectural lighting and bold horizontal geometry, set against a dramatic dusk backdrop. This project explores the intersection of linear illumination, stacked terraced volumes, and textured masonry—creating a sophisticated sanctuary that defines modern luxury through contrast, depth, and ambient warmth.',
    mainImage: '/boleHomes1.jpg',
    gallery: [
      '/boleHomes.jpg',
      '/boleHomes1.jpg',
      '/boleHomes2.jpg',
      

    ]
  },
  
  {
    id: 'joy-lux',
    title: 'Joy Luxury Living',
    location: 'Addis Ababa, Ethiopia',
    year: '2023',
    category: 'Residential',
    type: ' Luxury Residence',
    description: 'A striking expression of contemporary luxury nestled within a refined urban landscape. This project explores the interplay between bold geometric cantilevers, soaring glass-encased atriums, and warm ambient lighting—creating a grand residence that balances monumental privacy with an effortless, luminous elegance.',
    mainImage: '/joyouslux1.jpg',
    gallery: [
      '/joyouslux.jpg',
      '/joyouslux1.jpg'
      
    ]
  },
{
    id: 'complex',
    title: 'Mesmer Complex',
    location: 'Addis Ababa, Ethiopia',
    year: '2025',
    category: 'Public',
    type: 'Multi-Family Complex / Townhouses',
    description: 'A masterclass in rhythmic repetition and urban density, perfectly balancing individual privacy with architectural cohesion. This project explores the interplay between staggered rectilinear frames, dark-brick masonry textures, and open-air rooftop terraces—creating a sophisticated multi-family enclave defined by geometric depth, warm soffit lighting, and integrated greenery.',
    mainImage: '/complex1.jpg',
    gallery: [
      '/complex.jpg',
      '/complex1.jpg',
      '/complex2.jpg',
      

    ]
  },
  {
    id: 'lux-appartments-office',
    title: 'Luxury Apartments & Office',
    location: 'Addis Ababa, Ethiopia',
    year: '2023',
    category: 'Commercial',
    type: ' Luxury Apartments & Office',
    description: 'A striking expression of contemporary luxury nestled within a refined urban landscape. This project explores the interplay between bold geometric cantilevers, soaring glass-encased atriums, and warm ambient lighting—creating a grand residence that balances monumental privacy with an effortless, luminous elegance.',
    mainImage: '/luxappartmentOffice.jpg',
    gallery: [
      '/luxappartmentOffice.jpg',
      '/luxappartmentOffice1.jpg',
      '/luxappartmentOffice2.jpg',
      '/luxappartmentOffice3.jpg',
      '/luxappartmentOffice4.jpg',
      '/luxappartmentOffice5.jpg'
      
    ]
  }
];

export const GALLERY: GalleryItem[] = [
  { id: '1', imageUrl: '/afrika.jpg', title: 'YIBE Luxury Apartments', category: 'Detail' },
  { id: '2', imageUrl: '/afrika1.jpg', title: 'YIBE Luxury Apartments', category: 'Exterior' },
  { id: '6', imageUrl: '/villa1.jpg', title: 'Bole Homes', category: 'Detail' },
  { id: '7', imageUrl: '/villa3.jpg', title: 'Bole Homes', category: 'Exterior' },
  { id: '8', imageUrl: '/VillaShaka.jpg', title: 'Villa Shaka', category: 'Commercial' },
  { id: '9', imageUrl: '/villaShaka2.jpg', title: 'Villa Shaka', category: 'Detail' },
  { id: '10', imageUrl: '/villaShaka4.jpg', title: 'Villa Shaka', category: 'Exterior' },
  { id: '11', imageUrl: '/boleHomes1.jpg', title: 'Bole Homes', category: 'Commercial' },
  { id: '12', imageUrl: '/complex1.jpg', title: 'Lux Complex', category: 'Residential' },
  { id: '13', imageUrl: '/luxappartmentOffice.jpg', title: 'Luxury Apartments & Office', category: 'Commercial' },
  { id: '14', imageUrl: '/b2.jpg', title: 'Luxury Apartments & Office', category: 'Detail' },
  { id: '15', imageUrl: '/boleHomes.jpg', title: 'Bole Homes', category: 'Exterior' },
  { id: '16', imageUrl: '/b.jpg', title: 'Luxury Apartments & Office', category: 'Commercial' },
  { id: '3', imageUrl: '/luxappartmentOffice1.jpg', title: 'Luxury Apartments & Office', category: 'Commercial' },
  { id: '5', imageUrl: '/afrika6.jpg', title: 'YIBE Luxury Apartments', category: 'Commercial' },
  { id: '4', imageUrl: '/luxappartmentOffice2.jpg', title: 'Luxury Apartments & Office', category: 'Residential' },
    { id: '14', imageUrl: '/joyouslux1.jpg', title: 'Joyous Luxury', category: 'Detail' },
  { id: '15', imageUrl: '/boleHomes2.jpg', title: 'Bole Homes', category: 'Exterior' },
  { id: '16', imageUrl: '/complex.jpg', title: 'Lux Complex', category: 'Commercial' },
  { id: '3', imageUrl: '/luxappartment.jpg', title: 'Luxury Apartments & Spa', category: 'Commercial' },
  { id: '4', imageUrl: '/luxappartment6.jpg', title: 'Luxury Apartments & Spa', category: 'Residential' },
  
];
