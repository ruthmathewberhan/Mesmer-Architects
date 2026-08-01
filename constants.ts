
import { Project, GalleryItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'shearvon-condo',
    title: 'Shearvon Devenish Condo',
    location: 'Saint Lucia, North America',
    year: '2024',
    category: 'Residential',
    description: 'A masterpiece of modern minimalism integrated into the lush landscape of Saint Lucia. This project explores the intersection of brutalist concrete forms and organic wooden textures, creating a living space that feels both fortified and open to the Caribbean breeze.',
    mainImage: '/afrika.jpg',
    gallery: [
      '/afrika.jpg',
      '/afrika1.jpg',
      '/afrika3.jpg',
      '/afrika4.jpg',
      '/afrika6.jpg'
    ]
  },
  {
    id: 'crimson-office',
    title: 'The Crimson Monolith',
    location: 'Berlin, Germany',
    year: '2023',
    category: 'Commercial',
    description: 'An office complex that defies traditional workspace aesthetics. The building features a striking red glass facade that creates a dynamic light show throughout the day.',
    mainImage: '/VillaShaka.jpg',
    gallery: [
      '/VillaShaka.jpg',
      '/VillaShaka2.jpg',
      '/VillaShaka6.jpg',
      '/VillaShaka4.jpg',
      '/VillaShaka5.jpg',
      '/VillaShaka7.jpg',
      '/VillaShaka8.jpg',
      '/VillaShaka9.jpg',
      '/VillaShaka10.jpg'
      
    ]
  },
  {
    id: 'stark-pavilion',
    title: 'Stark Cultural Pavilion',
    location: 'Kyoto, Japan',
    year: '2022',
    category: 'Public',
    description: 'A fusion of traditional Japanese spatial concepts and radical modern materials. The pavilion serves as a quiet sanctuary within the bustling city.',
    mainImage: '/luxappartment.jpg',
    gallery: [
      '/luxappartment.jpg',
      '/luxappartment1.jpg',
      '/luxappartment3.jpg',
      '/luxappartment4.jpg',
      '/luxappartment5.jpg',
      '/luxappartment6.jpg',
      '/luxappartment7.jpg',
      '/luxappartment11.jpg',
      '/luxappartment12.jpg',
      '/luxappartment13.jpg',
      '/luxappartment14.jpg',
      '/luxappartment16.jpg',
      '/luxappartment17.jpg',
      '/luxappartment18.jpg',
      '/luxappartment19.jpg',
      '/luxappartment21.jpg',

    ]
  },
  {
    id: 'void-house',
    title: 'The Void House',
    location: 'Atacama Desert, Chile',
    year: '2025',
    category: 'Residential',
    description: 'Designed around a central courtyard that frames the star-filled desert sky, the Void House uses raw earth materials and stark geometric openings.',
    mainImage: '/print1.jpg',
    gallery: [
      '/print1.jpg',
      '/print2.jpg',
      '/print3.jpg',
      '/print4.jpg'
    ]
  }
];

export const GALLERY: GalleryItem[] = [
  { id: '1', imageUrl: '/afrika.jpg', title: 'Concrete Angles', category: 'Detail' },
  { id: '2', imageUrl: '/afrika1.jpg', title: 'Sunset Reflection', category: 'Exterior' },
  { id: '3', imageUrl: '/afrika3.jpg', title: 'Spiral Ascend', category: 'Interior' },
  { id: '4', imageUrl: '/afrika4.jpg', title: 'Minimal Kitchen', category: 'Residential' },
  { id: '5', imageUrl: '/afrika6.jpg', title: 'Glass Facade', category: 'Commercial' },
  { id: '6', imageUrl: '/villa1.jpg', title: 'The Red Beam', category: 'Detail' },
  { id: '7', imageUrl: '/villa3.jpg', title: 'Shadow Play', category: 'Exterior' },
  { id: '8', imageUrl: '/VillaShaka.jpg', title: 'Urban Loft', category: 'Interior' },
  { id: '9', imageUrl: '/villaShaka2.jpg', title: 'Concrete Angles', category: 'Detail' },
  { id: '10', imageUrl: '/villaShaka4.jpg', title: 'Sunset Reflection', category: 'Exterior' },
  { id: '11', imageUrl: '/villaShaka5.jpg', title: 'Spiral Ascend', category: 'Interior' },
  { id: '12', imageUrl: '/villaShaka6.jpg', title: 'Minimal Kitchen', category: 'Residential' },
  { id: '13', imageUrl: '/villaShaka7.jpg', title: 'Glass Facade', category: 'Commercial' },
  { id: '14', imageUrl: '/villaShaka8.jpg', title: 'The Red Beam', category: 'Detail' },
  { id: '15', imageUrl: '/villaShaka9.jpg', title: 'Shadow Play', category: 'Exterior' },
  { id: '16', imageUrl: '/villaShaka10.jpg', title: 'Urban Loft', category: 'Interior' },
];
