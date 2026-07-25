
import { Project, GalleryItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'shearvon-condo',
    title: 'Shearvon Devenish Condo',
    location: 'Saint Lucia, North America',
    year: '2024',
    category: 'Residential',
    description: 'A masterpiece of modern minimalism integrated into the lush landscape of Saint Lucia. This project explores the intersection of brutalist concrete forms and organic wooden textures, creating a living space that feels both fortified and open to the Caribbean breeze.',
    mainImage: '../images/afrika.jpg',
    gallery: [
      '../images/afrika.jpg',
      '../images/afrika1.jpg',
      '../images/afrika3.jpg',
      '../images/afrika4.jpg',
      '../images/afrika6.jpg'
    ]
  },
  {
    id: 'crimson-office',
    title: 'The Crimson Monolith',
    location: 'Berlin, Germany',
    year: '2023',
    category: 'Commercial',
    description: 'An office complex that defies traditional workspace aesthetics. The building features a striking red glass facade that creates a dynamic light show throughout the day.',
    mainImage: '../images/VillaShaka.jpg',
    gallery: [
      '../images/VillaShaka.jpg',
      '../images/VillaShaka2.jpg',
      '../images/VillaShaka6.jpg',
      '../images/VillaShaka4.jpg',
      '../images/VillaShaka5.jpg',
      '../images/VillaShaka7.jpg',
      '../images/VillaShaka8.jpg',
      '../images/VillaShaka9.jpg',
      '../images/VillaShaka10.jpg'
      
    ]
  },
  {
    id: 'stark-pavilion',
    title: 'Stark Cultural Pavilion',
    location: 'Kyoto, Japan',
    year: '2022',
    category: 'Public',
    description: 'A fusion of traditional Japanese spatial concepts and radical modern materials. The pavilion serves as a quiet sanctuary within the bustling city.',
    mainImage: '../images/luxappartment.jpg',
    gallery: [
      '../images/luxappartment.jpg',
      '../images/luxappartment1.jpg',
      '../images/luxappartment3.jpg',
      '../images/luxappartment4.jpg',
      '../images/luxappartment5.jpg',
      '../images/luxappartment6.jpg',
      '../images/luxappartment7.jpg',
      '../images/luxappartment11.jpg',
      '../images/luxappartment12.jpg',
      '../images/luxappartment13.jpg',
      '../images/luxappartment14.jpg',
      '../images/luxappartment16.jpg',
      '../images/luxappartment17.jpg',
      '../images/luxappartment18.jpg',
      '../images/luxappartment19.jpg',
      '../images/luxappartment21.jpg',

    ]
  },
  {
    id: 'void-house',
    title: 'The Void House',
    location: 'Atacama Desert, Chile',
    year: '2025',
    category: 'Residential',
    description: 'Designed around a central courtyard that frames the star-filled desert sky, the Void House uses raw earth materials and stark geometric openings.',
    mainImage: '../images/print1.jpg',
    gallery: [
      '../images/print1.jpg',
      '../images/print2.jpg',
      '../images/print3.jpg',
      '../images/print4.jpg'
    ]
  }
];

export const GALLERY: GalleryItem[] = [
  { id: '1', imageUrl: '../images/afrika.jpg', title: 'Concrete Angles', category: 'Detail' },
  { id: '2', imageUrl: '../images/afrika1.jpg', title: 'Sunset Reflection', category: 'Exterior' },
  { id: '3', imageUrl: '../images/afrika3.jpg', title: 'Spiral Ascend', category: 'Interior' },
  { id: '4', imageUrl: '../images/afrika4.jpg', title: 'Minimal Kitchen', category: 'Residential' },
  { id: '5', imageUrl: '../images/afrika6.jpg', title: 'Glass Facade', category: 'Commercial' },
  { id: '6', imageUrl: '../images/villa1.jpg', title: 'The Red Beam', category: 'Detail' },
  { id: '7', imageUrl: '../images/villa3.jpg', title: 'Shadow Play', category: 'Exterior' },
  { id: '8', imageUrl: '../images/VillaShaka.jpg', title: 'Urban Loft', category: 'Interior' },
  { id: '9', imageUrl: '../images/villaShaka2.jpg', title: 'Concrete Angles', category: 'Detail' },
  { id: '10', imageUrl: '../images/villaShaka4.jpg', title: 'Sunset Reflection', category: 'Exterior' },
  { id: '11', imageUrl: '../images/villaShaka5.jpg', title: 'Spiral Ascend', category: 'Interior' },
  { id: '12', imageUrl: '../images/villaShaka6.jpg', title: 'Minimal Kitchen', category: 'Residential' },
  { id: '13', imageUrl: '../images/villaShaka7.jpg', title: 'Glass Facade', category: 'Commercial' },
  { id: '14', imageUrl: '../images/villaShaka8.jpg', title: 'The Red Beam', category: 'Detail' },
  { id: '15', imageUrl: '../images/villaShaka9.jpg', title: 'Shadow Play', category: 'Exterior' },
  { id: '16', imageUrl: '../images/villaShaka10.jpg', title: 'Urban Loft', category: 'Interior' },
];
