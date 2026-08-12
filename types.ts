
export interface Project {
  id: string;
  title: string;
  location: string;
  year: string;
  category: string;
  description: string;
  mainImage: string;
  gallery: string[];
  type?: string; 
  designStyle?: string;
}

export interface GalleryItem {
  id: string;
  imageUrl: string;
  title: string;
  category: string;
}

export type Theme = 'light' | 'dark';
