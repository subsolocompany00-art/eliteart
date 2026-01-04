import { Rocket, Clock, DollarSign, Layout, Instagram, Star, TrendingUp, ShieldCheck } from 'lucide-react';
import { Benefit, Plan } from './types';

export const HERO_CONTENT = {
  headline: "TRANSFORME SUA LOJA COM ARTES QUE VENDEM",
  subheadline: "Pare de perder tempo criando do zero. Tenha um perfil profissional, atraente e lucrativo com nossos pacotes exclusivos.",
  cta: "Quero Vender Mais",
};

export const BENEFITS: Benefit[] = [
  {
    title: "Autoridade Imediata",
    description: "Eleve a percepção da sua marca com um visual extremamente profissional.",
    icon: ShieldCheck,
  },
  {
    title: "Economia Real",
    description: "Muito mais barato que contratar um designer ou gastar horas no Canva.",
    icon: DollarSign,
  },
  {
    title: "Agilidade Total",
    description: "Baixou, postou. Conteúdo visual pronto em questão de minutos.",
    icon: Clock,
  },
  {
    title: "Consistência",
    description: "Mantenha seu feed ativo todos os dias sem sofrimento criativo.",
    icon: Layout,
  },
  {
    title: "Multi-Plataforma",
    description: "Ideal para Feed, Stories, Status do WhatsApp e Anúncios.",
    icon: Instagram,
  },
  {
    title: "Foco em Conversão",
    description: "Designs criados estrategicamente para gerar desejo e vendas.",
    icon: TrendingUp,
  }
];

export const PLANS: Plan[] = [
  {
    id: 'basic',
    name: 'PACOTE BASIC',
    price: 19.99,
    description: 'Ideal para quem está começando e quer manter o feed ativo.',
    recommended: false,
    ctaText: 'Garantir Pacote Basic',
    checkoutUrl: 'https://pay.kiwify.com.br/iFvsCb1',
    features: [
      { text: '150 Artes Prontas' },
      { text: 'Alta Resolução' },
      { text: 'Diversos Estilos' },
      { text: 'Acesso Imediato' },
      { text: 'Suporte Básico' },
    ]
  },
  {
    id: 'premium',
    name: 'PACOTE PREMIUM',
    price: 29.99,
    description: 'A escolha dos campeões. Para quem quer escalar e dominar o nicho.',
    recommended: true,
    ctaText: 'Quero o Premium Agora',
    checkoutUrl: 'https://pay.kiwify.com.br/rgtV8hO',
    features: [
      { text: '300 Artes Prontas', highlight: true },
      { text: 'Maior Variedade de Layouts' },
      { text: 'Campanhas & Ofertas' },
      { text: 'Conteúdo para Meses' },
      { text: 'Visual Estratégico' },
      { text: 'Prioridade no Suporte' },
    ]
  }
];

export const WHATSAPP_NUMBER = "5511999999999"; // Example number
export const WHATSAPP_MESSAGE = "Olá! Gostaria de saber mais sobre os pacotes de artes.";