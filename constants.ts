
import { Project, GalleryItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'shearvon-condo',
    title: 'Shearvon Devenish Condo',
    location: 'Saint Lucia, North America',
    year: '2024',
    category: 'Residential',
    description: 'A masterpiece of modern minimalism integrated into the lush landscape of Saint Lucia. This project explores the intersection of brutalist concrete forms and organic wooden textures, creating a living space that feels both fortified and open to the Caribbean breeze.',
    mainImage: 'https://picsum.photos/seed/arch1/1200/800',
    gallery: [
      'https://picsum.photos/seed/arch1/1200/800',
      'https://picsum.photos/seed/arch1-2/1200/800',
      'https://picsum.photos/seed/arch1-3/1200/800',
      'https://picsum.photos/seed/arch1-4/1200/800',
      'https://picsum.photos/seed/arch1-5/1200/800'
    ]
  },
  {
    id: 'crimson-office',
    title: 'The Crimson Monolith',
    location: 'Berlin, Germany',
    year: '2023',
    category: 'Commercial',
    description: 'An office complex that defies traditional workspace aesthetics. The building features a striking red glass facade that creates a dynamic light show throughout the day.',
    mainImage: 'https://picsum.photos/seed/arch2/1200/800',
    gallery: [
      'https://picsum.photos/seed/arch2/1200/800',
      'https://picsum.photos/seed/arch2-2/1200/800',
      'https://picsum.photos/seed/arch2-3/1200/800'
    ]
  },
  {
    id: 'stark-pavilion',
    title: 'Stark Cultural Pavilion',
    location: 'Kyoto, Japan',
    year: '2022',
    category: 'Public',
    description: 'A fusion of traditional Japanese spatial concepts and radical modern materials. The pavilion serves as a quiet sanctuary within the bustling city.',
    mainImage: 'https://picsum.photos/seed/arch3/1200/800',
    gallery: [
      'https://picsum.photos/seed/arch3/1200/800',
      'https://picsum.photos/seed/arch3-2/1200/800',
      'https://picsum.photos/seed/arch3-3/1200/800'
    ]
  },
  {
    id: 'void-house',
    title: 'The Void House',
    location: 'Atacama Desert, Chile',
    year: '2025',
    category: 'Residential',
    description: 'Designed around a central courtyard that frames the star-filled desert sky, the Void House uses raw earth materials and stark geometric openings.',
    mainImage: 'https://picsum.photos/seed/arch4/1200/800',
    gallery: [
      'https://picsum.photos/seed/arch4/1200/800',
      'https://picsum.photos/seed/arch4-2/1200/800',
      'https://picsum.photos/seed/arch4-3/1200/800'
    ]
  }
];

export const GALLERY: GalleryItem[] = [
  { id: '1', imageUrl: 'https://picsum.photos/seed/g1/800/1000', title: 'Concrete Angles', category: 'Detail' },
  { id: '2', imageUrl: 'https://picsum.photos/seed/g2/1000/800', title: 'Sunset Reflection', category: 'Exterior' },
  { id: '3', imageUrl: 'https://picsum.photos/seed/g3/800/800', title: 'Spiral Ascend', category: 'Interior' },
  { id: '4', imageUrl: 'https://picsum.photos/seed/g4/900/1200', title: 'Minimal Kitchen', category: 'Residential' },
  { id: '5', imageUrl: 'https://picsum.photos/seed/g5/1200/800', title: 'Glass Facade', category: 'Commercial' },
  { id: '6', imageUrl: 'https://picsum.photos/seed/g6/800/1000', title: 'The Red Beam', category: 'Detail' },
  { id: '7', imageUrl: 'https://picsum.photos/seed/g7/1000/1000', title: 'Shadow Play', category: 'Exterior' },
  { id: '8', imageUrl: 'https://picsum.photos/seed/g8/1100/700', title: 'Urban Loft', category: 'Interior' },
];
