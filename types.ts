
// Import React to resolve 'Cannot find namespace React' when using React.ReactNode
import React from 'react';

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  results: string;
  imageUrl: string;
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
  description: string;
}

export interface ThemeConfig {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  fontFamily: string;
}