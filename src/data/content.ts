export type Language = "fr" | "en" | "pt";

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price?: string;
  category: string;
}

export interface SiteData {
  brand: {
    slogan: string;
    heroText: string;
    aboutTitle: string;
    aboutText: string;
    aboutHighlight: string;
  };
  ui: {
    discover: string;
    contact: string;
    allCategories: string;
    ctaTitle: string;
    ctaText: string;
    ctaButton: string;
    contactTitle: string;
    namePlaceholder: string;
    messagePlaceholder: string;
    sendEmail: string;
    whatsapp: string;
    instagram: string;
    footerText: string;
    catalogTitle: string;
  };
  categories: string[];
  products: Product[];
}

const data: Record<Language, SiteData> = {
  fr: {
    brand: {
      slogan: "Brazilian Bites, Elevated.",
      heroText: "Structured. Controlled. Precise.",
      aboutTitle: "The Concept",
      aboutText: "Rua 237 redefines Brazilian street food through structure and precision.\n\nBuilt on strong foundations.\nRefined for the modern street.\n\nBrazilian bites, elevated.",
      aboutHighlight: "Precision. Structure. Heat.",
    },
    ui: {
      discover: "Explore the Menu",
      contact: "Contact",
      allCategories: "All",
      ctaTitle: "Start your order.",
      ctaText: "For events, private orders and collaborations.",
      ctaButton: "Contact",
      contactTitle: "Contact",
      namePlaceholder: "Your name",
      messagePlaceholder: "Your message...",
      sendEmail: "Send email",
      whatsapp: "Chat on WhatsApp",
      instagram: "Follow on Instagram",
      footerText: "© 2026 Rua 237. All rights reserved.",
      catalogTitle: "The Menu",
    },
    categories: ["Signature", "Classiques", "Event"],
    products: [
      { id: "coxinha-237", name: "237 Coxinha", description: "Crisp shell. Slow-cooked chicken.", image: "", category: "Signature" },
      { id: "swiss-heat-bolinha", name: "Swiss Heat Bolinha", description: "Brazilian base. Swiss melt.", image: "", category: "Signature" },
      { id: "urban-kibe", name: "Urban Kibe", description: "Firm texture. Controlled spice.", image: "", category: "Signature" },
      { id: "rua-rissois", name: "Rua Rissois", description: "Swiss meat. Street crisp format.", image: "", category: "Signature" },
      { id: "pao-237", name: "Pão 237", description: "Traditional cheese bread.", image: "", category: "Classiques" },
      { id: "empada-237", name: "237 Empada", description: "Chicken empada. Classic recipe.", image: "", category: "Classiques" },
      { id: "bacalhau-drop", name: "Bacalhau Drop", description: "Codfish fritter. Crisp and golden.", image: "", category: "Classiques" },
      { id: "237-feast", name: "The 237 Feast — 100 Bites", description: "Signature event box. Structured selection. Built for sharing.", image: "", category: "Event" },
    ],
  },
  en: {
    brand: {
      slogan: "Brazilian Bites, Elevated.",
      heroText: "Structured. Controlled. Precise.",
      aboutTitle: "The Concept",
      aboutText: "Rua 237 redefines Brazilian street food through structure and precision.\n\nBuilt on strong foundations.\nRefined for the modern street.\n\nBrazilian bites, elevated.",
      aboutHighlight: "Precision. Structure. Heat.",
    },
    ui: {
      discover: "Explore the Menu",
      contact: "Contact",
      allCategories: "All",
      ctaTitle: "Start your order.",
      ctaText: "For events, private orders and collaborations.",
      ctaButton: "Contact",
      contactTitle: "Contact",
      namePlaceholder: "Your name",
      messagePlaceholder: "Your message...",
      sendEmail: "Send email",
      whatsapp: "Chat on WhatsApp",
      instagram: "Follow on Instagram",
      footerText: "© 2026 Rua 237. All rights reserved.",
      catalogTitle: "The Menu",
    },
    categories: ["Signature", "Classics", "Event"],
    products: [
      { id: "coxinha-237", name: "237 Coxinha", description: "Crisp shell. Slow-cooked chicken.", image: "", category: "Signature" },
      { id: "swiss-heat-bolinha", name: "Swiss Heat Bolinha", description: "Brazilian base. Swiss melt.", image: "", category: "Signature" },
      { id: "urban-kibe", name: "Urban Kibe", description: "Firm texture. Controlled spice.", image: "", category: "Signature" },
      { id: "rua-rissois", name: "Rua Rissois", description: "Swiss meat. Street crisp format.", image: "", category: "Signature" },
      { id: "pao-237", name: "Pão 237", description: "Traditional cheese bread.", image: "", category: "Classics" },
      { id: "empada-237", name: "237 Empada", description: "Chicken empada. Classic recipe.", image: "", category: "Classics" },
      { id: "bacalhau-drop", name: "Bacalhau Drop", description: "Codfish fritter. Crisp and golden.", image: "", category: "Classics" },
      { id: "237-feast", name: "The 237 Feast — 100 Bites", description: "Signature event box. Structured selection. Built for sharing.", image: "", category: "Event" },
    ],
  },
  pt: {
    brand: {
      slogan: "Brazilian Bites, Elevated.",
      heroText: "Structured. Controlled. Precise.",
      aboutTitle: "O Conceito",
      aboutText: "Rua 237 redefine a comida de rua brasileira com estrutura e precisão.\n\nConstruído sobre bases sólidas.\nRefinado para a rua moderna.\n\nBrazilian bites, elevated.",
      aboutHighlight: "Precisão. Estrutura. Intensidade.",
    },
    ui: {
      discover: "Explore the Menu",
      contact: "Contato",
      allCategories: "Todos",
      ctaTitle: "Start your order.",
      ctaText: "Para eventos, encomendas e parcerias.",
      ctaButton: "Contato",
      contactTitle: "Contato",
      namePlaceholder: "Seu nome",
      messagePlaceholder: "Sua mensagem...",
      sendEmail: "Enviar por email",
      whatsapp: "Falar pelo WhatsApp",
      instagram: "Siga no Instagram",
      footerText: "© 2026 Rua 237. Todos os direitos reservados.",
      catalogTitle: "O Cardápio",
    },
    categories: ["Signature", "Clássicos", "Evento"],
    products: [
      { id: "coxinha-237", name: "237 Coxinha", description: "Casca crocante. Frango desfiado.", image: "", category: "Signature" },
      { id: "swiss-heat-bolinha", name: "Swiss Heat Bolinha", description: "Base brasileira. Derretido suíço.", image: "", category: "Signature" },
      { id: "urban-kibe", name: "Urban Kibe", description: "Textura firme. Especiarias controladas.", image: "", category: "Signature" },
      { id: "rua-rissois", name: "Rua Rissois", description: "Carne suíça. Formato crocante de rua.", image: "", category: "Signature" },
      { id: "pao-237", name: "Pão 237", description: "Pão de queijo tradicional.", image: "", category: "Clássicos" },
      { id: "empada-237", name: "237 Empada", description: "Empada de frango. Receita clássica.", image: "", category: "Clássicos" },
      { id: "bacalhau-drop", name: "Bacalhau Drop", description: "Bolinho de bacalhau. Crocante e dourado.", image: "", category: "Clássicos" },
      { id: "237-feast", name: "The 237 Feast — 100 Bites", description: "Box signature para eventos. Seleção estruturada. Feito para compartilhar.", image: "", category: "Evento" },
    ],
  },
};
export default data;
