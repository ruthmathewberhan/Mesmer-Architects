
import { Project, GalleryItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'shearvon-condo',
    title: 'Shearvon Devenish Condo',
    location: 'Saint Lucia, North America',
    year: '2024',
    category: 'Residential',
    description: 'A masterpiece of modern minimalism integrated into the lush landscape of Saint Lucia. This project explores the intersection of brutalist concrete forms and organic wooden textures, creating a living space that feels both fortified and open to the Caribbean breeze.',
    mainImage: '../assets/images/afrika.jpg',
    gallery: [
      '../assets/images/afrika.jpg',
      '../assets/images/afrika1.jpg',
      '../assets/images/afrika3.jpg',
      '../assets/images/afrika4.jpg',
      '../assets/images/afrika6.jpg'
    ]
  },
  {
    id: 'crimson-office',
    title: 'The Crimson Monolith',
    location: 'Berlin, Germany',
    year: '2023',
    category: 'Commercial',
    description: 'An office complex that defies traditional workspace aesthetics. The building features a striking red glass facade that creates a dynamic light show throughout the day.',
    mainImage: '../assets/images/VillaShaka.jpg',
    gallery: [
      '../assets/images/VillaShaka.jpg',
      '../assets/images/VillaShaka2.jpg',
      '../assets/images/VillaShaka6.jpg',
      '../assets/images/VillaShaka4.jpg',
      '../assets/images/VillaShaka5.jpg',
      '../assets/images/VillaShaka7.jpg',
      '../assets/images/VillaShaka8.jpg',
      '../assets/images/VillaShaka9.jpg',
      '../assets/images/VillaShaka10.jpg'
      
    ]
  },
  {
    id: 'stark-pavilion',
    title: 'Stark Cultural Pavilion',
    location: 'Kyoto, Japan',
    year: '2022',
    category: 'Public',
    description: 'A fusion of traditional Japanese spatial concepts and radical modern materials. The pavilion serves as a quiet sanctuary within the bustling city.',
    mainImage: '../assets/images/luxappartment.jpg',
    gallery: [
      '../assets/images/luxappartment.jpg',
      '../assets/images/luxappartment1.jpg',
      '../assets/images/luxappartment3.jpg',
      '../assets/images/luxappartment4.jpg',
      '../assets/images/luxappartment5.jpg',
      '../assets/images/luxappartment6.jpg',
      '../assets/images/luxappartment7.jpg',
      '../assets/images/luxappartment11.jpg',
      '../assets/images/luxappartment12.jpg',
      '../assets/images/luxappartment13.jpg',
      '../assets/images/luxappartment14.jpg',
      '../assets/images/luxappartment16.jpg',
      '../assets/images/luxappartment17.jpg',
      '../assets/images/luxappartment18.jpg',
      '../assets/images/luxappartment19.jpg',
      '../assets/images/luxappartment21.jpg',

    ]
  },
  {
    id: 'void-house',
    title: 'The Void House',
    location: 'Atacama Desert, Chile',
    year: '2025',
    category: 'Residential',
    description: 'Designed around a central courtyard that frames the star-filled desert sky, the Void House uses raw earth materials and stark geometric openings.',
    mainImage: '../assets/images/print1.jpg',
    gallery: [
      '../assets/images/print1.jpg',
      '../assets/images/print2.jpg',
      '../assets/images/print3.jpg',
      '../assets/images/print4.jpg'
    ]
  }
];

export const GALLERY: GalleryItem[] = [
  { id: '1', imageUrl: '../assets/images/afrika.jpg', title: 'Concrete Angles', category: 'Detail' },
  { id: '2', imageUrl: '../assets/images/afrika1.jpg', title: 'Sunset Reflection', category: 'Exterior' },
  { id: '3', imageUrl: '../assets/images/afrika3.jpg', title: 'Spiral Ascend', category: 'Interior' },
  { id: '4', imageUrl: '../assets/images/afrika4.jpg', title: 'Minimal Kitchen', category: 'Residential' },
  { id: '5', imageUrl: '../assets/images/afrika6.jpg', title: 'Glass Facade', category: 'Commercial' },
  { id: '6', imageUrl: '../assets/images/villa1.jpg', title: 'The Red Beam', category: 'Detail' },
  { id: '7', imageUrl: '../assets/images/villa3.jpg', title: 'Shadow Play', category: 'Exterior' },
  { id: '8', imageUrl: '../assets/images/VillaShaka.jpg', title: 'Urban Loft', category: 'Interior' },
  { id: '9', imageUrl: '../assets/images/villaShaka2.jpg', title: 'Concrete Angles', category: 'Detail' },
  { id: '10', imageUrl: '../assets/images/villaShaka4.jpg', title: 'Sunset Reflection', category: 'Exterior' },
  { id: '11', imageUrl: '../assets/images/villaShaka5.jpg', title: 'Spiral Ascend', category: 'Interior' },
  { id: '12', imageUrl: '../assets/images/villaShaka6.jpg', title: 'Minimal Kitchen', category: 'Residential' },
  { id: '13', imageUrl: '../assets/images/villaShaka7.jpg', title: 'Glass Facade', category: 'Commercial' },
  { id: '14', imageUrl: '../assets/images/villaShaka8.jpg', title: 'The Red Beam', category: 'Detail' },
  { id: '15', imageUrl: '../assets/images/villaShaka9.jpg', title: 'Shadow Play', category: 'Exterior' },
  { id: '16', imageUrl: '../assets/images/villaShaka10.jpg', title: 'Urban Loft', category: 'Interior' },
];
