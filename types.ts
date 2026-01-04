import { LucideIcon } from 'lucide-react';

export interface PlanFeature {
  text: string;
  highlight?: boolean;
}

export interface Plan {
  id: string;
  name: string;
  price: number;
  description: string;
  features: PlanFeature[];
  recommended: boolean;
  ctaText: string;
  checkoutUrl?: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: LucideIcon;
}