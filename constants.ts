import { Leaf, Users, Scale, GraduationCap, Trophy } from 'lucide-react';
import { AreaOfAction, Board, Project } from './types';

// Palette based on the logo description
export const COLORS = {
  greenLight: '#8CB858',   // Leaves tips
  greenMedium: '#649B42',  // Leaves base
  yellowOchre: '#EAC065',  // Human top
  orangeTerra: '#C88849',  // Human center
  teal: '#6DA89B',         // Waves/Human bottom
  navyBlue: '#2D7CA3',     // Waves
  deepBlue: '#234568',     // Base/Text (Primary Brand Color)
  white: '#FFFFFF',
  grayLight: '#F3F4F6',
};

export const CONTACT_INFO = {
  address: "Rua do Progresso, nº 426, Soledade, Recife - PE, CEP 50070-095",
  cnpj: "07.262.634/0001-61",
  email: "contato@institutoecos.org.br",
  phone: "(81) 3333-0000",
};

export const AREAS: AreaOfAction[] = [
  {
    id: 'sustentabilidade',
    title: 'Sustentabilidade e Meio Ambiente',
    description: 'Projetos que unem preservação ambiental, geração de renda e desenvolvimento sustentável.',
    icon: Leaf,
    color: COLORS.greenMedium,
    details: ['Defesa da biodiversidade', 'Cuidado com espécies ameaçadas', 'Educação ambiental'],
    // Forest with sun rays
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop'
  },
  {
    id: 'cultura',
    title: 'Cultura e Sociedade',
    description: 'Proteção e valorização de culturas locais, patrimônio e inovação socioprodutiva.',
    icon: Users,
    color: COLORS.orangeTerra,
    details: ['Artes cênicas e audiovisuais', 'Preservação de patrimônio', 'Métodos tradicionais'],
    // Aerial view of people sitting in circle on grass
    imageUrl: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 'direitos',
    title: 'Direitos Humanos e Cidadania',
    description: 'Defesa dos direitos universais, com foco na criança, adolescente e ética da paz.',
    icon: Scale,
    color: COLORS.deepBlue,
    details: ['Defesa do ECA', 'Cidadania ativa', 'Liberdade de expressão'],
    // Scale of justice / Law
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 'educacao',
    title: 'Educação e Pesquisa',
    description: 'Formação continuada e apoio à pesquisa científica para o desenvolvimento.',
    icon: GraduationCap,
    color: COLORS.yellowOchre,
    details: ['Cursos e capacitações', 'Formação técnica', 'Estágios'],
    // Student studying / writing
    imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2673&auto=format&fit=crop'
  },
  {
    id: 'esporte',
    title: 'Esporte e Lazer',
    description: 'O esporte como ferramenta fundamental de inclusão e desenvolvimento humano.',
    icon: Trophy,
    color: COLORS.teal,
    details: ['Inclusão social', 'Atividades recreativas', 'Saúde e bem-estar'],
    // Kids playing soccer on grass field
    imageUrl: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=2572&auto=format&fit=crop'
  }
];

export const BOARD: Board = {
  executive: [
    { name: 'Marcelo Paulino Viegas', role: 'Presidente' },
    { name: 'Luana Cristina Alves Escobar', role: 'Secretária Geral' },
    { name: 'Marcela Alves da Silva Ferreira Viegas', role: 'Tesoureira' },
  ],
  fiscal: [
    { name: 'Armando Ramos de Albuquerque Maranhão', role: 'Conselheiro' },
    { name: 'Karen Maria Silva Lima', role: 'Conselheira' },
    { name: 'Elizabete Marcia Alves da Silva', role: 'Conselheira' },
  ]
};

export const PROJECTS: Project[] = [
  {
    title: "Jovens do Futuro Tech",
    description: "Capacitação técnica em tecnologia e inovação para adolescentes de 14 a 18 anos.",
    category: "Educação",
    status: "Em andamento",
    imageUrl: "https://picsum.photos/800/600?random=1"
  },
  {
    title: "Raízes Culturais",
    description: "Projeto de resgate e valorização do artesanato local em comunidades do interior.",
    category: "Cultura",
    status: "Em andamento",
    imageUrl: "https://picsum.photos/800/600?random=2"
  },
  {
    title: "Ecos da Mata",
    description: "Reflorestamento e educação ambiental em áreas de preservação permanente.",
    category: "Meio Ambiente",
    status: "Planejamento",
    imageUrl: "https://picsum.photos/800/600?random=3"
  }
];