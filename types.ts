import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface AreaOfAction {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  details: string[];
  imageUrl: string;
}

export interface TeamMember {
  name: string;
  role: string;
}

export interface Board {
  executive: TeamMember[];
  fiscal: TeamMember[];
}

export interface Project {
  title: string;
  description: string;
  category: string;
  status: 'Em andamento' | 'Concluído' | 'Planejamento';
  imageUrl: string;
}