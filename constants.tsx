
import React from 'react';
import { 
  BarChart3, 
  Settings, 
  Search, 
  Zap, 
  Target,
  Layout,
  Repeat,
  TrendingUp
} from 'lucide-react';
import { Project, Skill } from './types';

export const SKILLS: Skill[] = [
  {
    name: 'Integrated Platform Optimization',
    icon: <Settings className="w-6 h-6" />,
    description: 'Combining Paid reach with Organic authority to create a self-sustaining growth loop on any digital platform.'
  },
  {
    name: 'Paid & Organic Synergy',
    icon: <Repeat className="w-6 h-6" />,
    description: 'Using paid campaigns to fuel organic data, allowing for smarter, cheaper, and more effective long-term visibility.'
  },
  {
    name: 'Hybrid Content Strategy',
    icon: <TrendingUp className="w-6 h-6" />,
    description: 'Developing content that performs equally well as a sponsored ad and an organic social post.'
  },
  {
    name: 'SEM & SEO Alignment',
    icon: <Search className="w-6 h-6" />,
    description: 'Aligning search engine marketing with organic SEO to dominate the entire search results page (SERP).'
  },
  {
    name: 'Conversion Optimization',
    icon: <Target className="w-6 h-6" />,
    description: 'Optimizing landing pages for both cold paid traffic and warm organic leads to maximize total ROI.'
  },
  {
    name: 'Data-Driven Attribution',
    icon: <BarChart3 className="w-6 h-6" />,
    description: 'Analyzing how paid touchpoints influence organic conversions to understand the true customer journey.'
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Multi-Channel Growth Engine',
    category: 'Hybrid Strategy',
    description: 'Integrated Google Ads with Technical SEO to triple the total platform traffic in 90 days.',
    results: '300% Total Growth | 45% Organic Lift',
    imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Paid-to-Organic Pipeline',
    category: 'Optimization',
    description: 'Built a system where initial paid traffic accelerated organic social proof, lowering overall CPL.',
    results: '2.5x ROI | -40% Ad Spend',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'Brand Authority Scale',
    category: 'Digital Marketing',
    description: 'Leveraged high-performing organic content as social ads to build rapid brand trust and authority.',
    results: '1M+ Reach | 5.8x ROAS',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  }
];

export const GROWTH_DATA = [
  { name: 'Month 1', organic: 1200, paid: 2500 },
  { name: 'Month 2', organic: 1800, paid: 3200 },
  { name: 'Month 3', organic: 2900, paid: 4100 },
  { name: 'Month 4', organic: 4500, paid: 3800 },
  { name: 'Month 5', organic: 6800, paid: 3500 },
  { name: 'Month 6', organic: 9200, paid: 3200 },
];
