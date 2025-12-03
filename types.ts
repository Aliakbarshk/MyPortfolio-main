import { LucideIcon } from 'lucide-react';

export interface Skill {
  name: string;
  level: number;
  icon?: string;
  category: 'frontend' | 'backend' | 'ai' | 'creative';
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface FavoriteItem {
  title: string;
  type: 'Game' | 'Movie';
  image: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}