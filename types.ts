// FIX: Import ReactNode to resolve type error.
import type { ReactNode } from 'react';

export interface DocPage {
  id: string;
  title: string;
  content: ReactNode;
}

export enum ToolCategory {
    GENERAL_RECON = 'Reconocimiento General',
    SOCIAL_MEDIA = 'Inteligencia de Redes Sociales',
    METADATA_FORENSICS = 'Metadatos y Forense',
    DATA_ANALYSIS = 'Análisis y Visualización de Datos',
    BROWSERS_ANONYMITY = 'Navegadores y Anonimato',
    SYSTEM_SECURITY = 'Utilidades de Sistema y Seguridad',
    VIDEO_MANIPULATION = 'Manipulación de Vídeo',
    WEB_CLONING = 'Clonación y Análisis Web',
    SPECIALIZED_UTILS = 'Utilidades Especializadas',
}

export interface Tool {
  id: string;
  name: string;
  category: ToolCategory;
  description: string;
  command?: string;
  useCase: string;
}
