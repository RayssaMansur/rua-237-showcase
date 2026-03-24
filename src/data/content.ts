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
    limitedDropsTitle: string;
    limitedDropsText: string;
    limitedDropsBanner: string;
    limitedDropsBannerText: string;
    signatureSeriesTitle: string;
    backHome: string;
    about: string;
  };
  about: {
    originTitle: string;
    originBlocks: string[];
    designedForIntro: string;
    designedForList: string[];
  };
  categories: string[];
  products: Product[];
  limitedDrops: Product[];
}

const data: Record<Language, SiteData> = {
  fr: {
    brand: {
      slogan: "Brazilian Street Food, Elevated.",
      heroText: "Urban. Structured. Precise.",
      aboutTitle: "Le Concept",
      aboutText: "Rua 237 redéfinit la street food brésilienne par la structure et la précision.\n\nBâti sur des bases solides.\nAffiné pour la rue moderne.\n\nBrazilian street food, elevated.",
      aboutHighlight: "Précision. Structure. Intensité.",
    },
    ui: {
      discover: "Explorer le Menu",
      contact: "Contact",
      allCategories: "Tous",
      ctaTitle: "Passez votre commande 237.",
      ctaText: "Pour événements, commandes privées et collaborations.",
      ctaButton: "Contact",
      contactTitle: "Contact",
      namePlaceholder: "Votre nom",
      messagePlaceholder: "Votre message...",
      sendEmail: "Envoyer par email",
      whatsapp: "Discuter sur WhatsApp",
      instagram: "Suivre sur Instagram",
      footerText: "\u00a9 2026 Rua 237. Tous droits réservés.",
      catalogTitle: "Le Menu",
      limitedDropsTitle: "Limited Drops",
      limitedDropsText: "Disponible cette semaine uniquement.\nQuantités limitées.",
      limitedDropsBanner: "Limited Drops",
      limitedDropsBannerText: "Produit en séries limitées.\nSur pré-commande uniquement.",
      signatureSeriesTitle: "Signature Series",
      backHome: "Retour",
      about: "Notre Histoire",
    },
    about: {
      originTitle: "Notre Origine",
      originBlocks: [
        "J'ai grandi à Rua Felicissimo, au Minas Gerais — un endroit où la nourriture était simple, généreuse, et toujours partagée.",
        "Les snacks brésiliens comme la coxinha et le pão de queijo faisaient partie du quotidien.\nPas comme des plats spéciaux, mais comme des moments — rapides, chaleureux et sociaux.",
        "RUA 237 vient de ce souvenir.",
        "Aujourd'hui, RUA 237 réinterprète la street food brésilienne pour la scène urbaine suisse.",
        "Nous combinons des recettes traditionnelles avec une approche structurée et moderne — en utilisant des ingrédients locaux de qualité et une préparation contrôlée.",
        "Une fondation brésilienne.\nUn niveau de précision suisse.",
        "La street food brésilienne est faite pour être partagée.",
        "Petits, structurés et faciles à servir, nos produits s'intègrent naturellement aux moments de partage.",
      ],
      designedForIntro: "RUA 237 est conçu pour :",
      designedForList: [
        "Événements privés",
        "Anniversaires et réunions à domicile",
        "Événements d'entreprise",
        "Apéritifs et réceptions",
        "Festivals et événements publics",
      ],
    },
    categories: ["Signature", "Classiques", "Event", "Limited Drops"],
    products: [
      { id: "coxinha-237", name: "The 237 Coxinha", description: "Crisp shell. Slow-cooked chicken.", image: "", category: "Signature" },
      { id: "swiss-heat-bolinha", name: "Swiss Cheese Dot", description: "Bold flavor. Perfect crunch.", image: "", category: "Signature" },
      { id: "urban-kibe", name: "Urban Kibe", description: "Bold flavor. Perfect crunch.", image: "", category: "Signature" },
      { id: "rua-rissois", name: "237 Patty", description: "Swiss meat. Street crisp format.", image: "", category: "Signature" },
      { id: "pao-237", name: "237 Minas Bread", description: "Soft inside. Melted cheese.", image: "", category: "Classiques" },
      { id: "empada-237", name: "237 Chicken Pie", description: "Rich filling. Golden crust.", image: "", category: "Classiques" },
      { id: "bacalhau-drop", name: "Bacalhau Drop", description: "Crisp. Savory. Authentic.", image: "", category: "Classiques" },
      { id: "237-feast", name: "The 237 Feast — 100 Bites", description: "Signature event box. Structured selection. Built for sharing.", image: "", category: "Event" },
      { id: "coxinha-spicy", name: "Coxinha Spicy Edition", description: "Signature heat. Controlled spice.", image: "", category: "Limited Drops" },
      { id: "kibe-cheese", name: "Kibe Cheese Fusion", description: "Crisp outside. Melted center.", image: "", category: "Limited Drops" },
      { id: "urban-pizza", name: "Urban Pizza Bolinha", description: "Italian-inspired. Brazilian soul.", image: "", category: "Limited Drops" },
    ],
    limitedDrops: [],
  },
  en: {
    brand: {
      slogan: "Brazilian Street Food, Elevated.",
      heroText: "Urban. Structured. Precise.",
      aboutTitle: "The Concept",
      aboutText: "Rua 237 redefines Brazilian street food through structure and precision.\n\nBuilt on strong foundations.\nRefined for the modern street.\n\nBrazilian street food, elevated.",
      aboutHighlight: "Precision. Structure. Heat.",
    },
    ui: {
      discover: "Explore the Menu",
      contact: "Contact",
      allCategories: "All",
      ctaTitle: "Start your 237 order.",
      ctaText: "For events, private orders and collaborations.",
      ctaButton: "Contact",
      contactTitle: "Contact",
      namePlaceholder: "Your name",
      messagePlaceholder: "Your message...",
      sendEmail: "Send email",
      whatsapp: "Chat on WhatsApp",
      instagram: "Follow on Instagram",
      footerText: "\u00a9 2026 Rua 237. All rights reserved.",
      catalogTitle: "The Menu",
      limitedDropsTitle: "Limited Drops",
      limitedDropsText: "Available this week only.\nLimited quantities.",
      limitedDropsBanner: "Limited Drops",
      limitedDropsBannerText: "Produced in limited batches.\nPre-order only.",
      signatureSeriesTitle: "Signature Series",
      backHome: "Back",
      about: "Our Story",
    },
    about: {
      originTitle: "Our Origin",
      originBlocks: [
        "I grew up on Rua Felicissimo, in Minas Gerais — a place where food was simple, generous, and always shared.",
        "Brazilian snacks like coxinha and pão de queijo were part of everyday life.\nNot as special dishes, but as moments — quick, warm, and social.",
        "RUA 237 comes from that memory.",
        "Today, RUA 237 reinterprets Brazilian street food for the Swiss urban scene.",
        "We combine traditional recipes with a structured, modern approach — using quality local ingredients and controlled preparation.",
        "A Brazilian foundation.\nA Swiss level of precision.",
        "Brazilian street food is made to be shared.",
        "Small, structured, and easy to serve, our products naturally fit moments where people gather.",
      ],
      designedForIntro: "RUA 237 is designed for:",
      designedForList: [
        "Private events",
        "Birthdays and home gatherings",
        "Corporate events",
        "Apéritifs and receptions",
        "Festivals and public events",
      ],
    },
    categories: ["Signature", "Classics", "Event", "Limited Drops"],
    products: [
      { id: "coxinha-237", name: "The 237 Coxinha", description: "Crisp shell. Slow-cooked chicken.", image: "", category: "Signature" },
      { id: "swiss-heat-bolinha", name: "Swiss Cheese Dot", description: "Bold flavor. Perfect crunch.", image: "", category: "Signature" },
      { id: "urban-kibe", name: "Urban Kibe", description: "Bold flavor. Perfect crunch.", image: "", category: "Signature" },
      { id: "rua-rissois", name: "237 Patty", description: "Swiss meat. Street crisp format.", image: "", category: "Signature" },
      { id: "pao-237", name: "237 Minas Bread", description: "Soft inside. Melted cheese.", image: "", category: "Classics" },
      { id: "empada-237", name: "237 Chicken Pie", description: "Rich filling. Golden crust.", image: "", category: "Classics" },
      { id: "bacalhau-drop", name: "Bacalhau Drop", description: "Crisp. Savory. Authentic.", image: "", category: "Classics" },
      { id: "237-feast", name: "The 237 Feast — 100 Bites", description: "Signature event box. Structured selection. Built for sharing.", image: "", category: "Event" },
      { id: "coxinha-spicy", name: "Coxinha Spicy Edition", description: "Signature heat. Controlled spice.", image: "", category: "Limited Drops" },
      { id: "kibe-cheese", name: "Kibe Cheese Fusion", description: "Crisp outside. Melted center.", image: "", category: "Limited Drops" },
      { id: "urban-pizza", name: "Urban Pizza Bolinha", description: "Italian-inspired. Brazilian soul.", image: "", category: "Limited Drops" },
    ],
    limitedDrops: [],
  },
  pt: {
    brand: {
      slogan: "Brazilian Street Food, Elevated.",
      heroText: "Urban. Structured. Precise.",
      aboutTitle: "O Conceito",
      aboutText: "Rua 237 redefine a comida de rua brasileira com estrutura e precisão.\n\nConstruído sobre bases sólidas.\nRefinado para a rua moderna.\n\nBrazilian street food, elevated.",
      aboutHighlight: "Precisão. Estrutura. Intensidade.",
    },
    ui: {
      discover: "Explore the Menu",
      contact: "Contato",
      allCategories: "Todos",
      ctaTitle: "Start your 237 order.",
      ctaText: "Para eventos, encomendas e parcerias.",
      ctaButton: "Contato",
      contactTitle: "Contato",
      namePlaceholder: "Seu nome",
      messagePlaceholder: "Sua mensagem...",
      sendEmail: "Enviar por email",
      whatsapp: "Falar pelo WhatsApp",
      instagram: "Siga no Instagram",
      footerText: "\u00a9 2026 Rua 237. Todos os direitos reservados.",
      catalogTitle: "O Cardápio",
      limitedDropsTitle: "Limited Drops",
      limitedDropsText: "Disponível somente esta semana.\nQuantidades limitadas.",
      limitedDropsBanner: "Limited Drops",
      limitedDropsBannerText: "Produzido em lotes limitados.\nSomente sob encomenda.",
      signatureSeriesTitle: "Signature Series",
      backHome: "Voltar",
      about: "Nossa História",
    },
    about: {
      originTitle: "Nossa Origem",
      originBlocks: [
        "Cresci na Rua Felicissimo, em Minas Gerais — um lugar onde a comida era simples, generosa e sempre compartilhada.",
        "Salgados brasileiros como coxinha e pão de queijo faziam parte do dia a dia.\nNão como pratos especiais, mas como momentos — rápidos, quentes e sociais.",
        "RUA 237 vem dessa memória.",
        "Hoje, RUA 237 reinterpreta a comida de rua brasileira para a cena urbana suíça.",
        "Combinamos receitas tradicionais com uma abordagem estruturada e moderna — usando ingredientes locais de qualidade e preparo controlado.",
        "Uma base brasileira.\nUm nível suíço de precisão.",
        "A comida de rua brasileira é feita para ser compartilhada.",
        "Pequenos, estruturados e fáceis de servir, nossos produtos se encaixam naturalmente em momentos de encontro.",
      ],
      designedForIntro: "RUA 237 é projetado para:",
      designedForList: [
        "Eventos privados",
        "Aniversários e encontros em casa",
        "Eventos corporativos",
        "Aperitivos e recepções",
        "Festivais e eventos públicos",
      ],
    },
    categories: ["Signature", "Clássicos", "Evento", "Limited Drops"],
    products: [
      { id: "coxinha-237", name: "The 237 Coxinha", description: "Casca crocante. Frango desfiado.", image: "", category: "Signature" },
      { id: "swiss-heat-bolinha", name: "Swiss Cheese Dot", description: "Base brasileira. Derretido suíço.", image: "", category: "Signature" },
      { id: "urban-kibe", name: "Urban Kibe", description: "Textura firme. Especiarias controladas.", image: "", category: "Signature" },
      { id: "rua-rissois", name: "237 Patty", description: "Carne suíça. Formato crocante de rua.", image: "", category: "Signature" },
      { id: "pao-237", name: "237 Minas Bread", description: "Pão de queijo tradicional.", image: "", category: "Clássicos" },
      { id: "empada-237", name: "237 Chicken Pie", description: "Recheio rico. Massa dourada.", image: "", category: "Clássicos" },
      { id: "bacalhau-drop", name: "Bacalhau Drop", description: "Bolinho de bacalhau. Crocante e dourado.", image: "", category: "Clássicos" },
      { id: "237-feast", name: "The 237 Feast — 100 Bites", description: "Box signature para eventos. Seleção estruturada. Feito para compartilhar.", image: "", category: "Evento" },
      { id: "coxinha-spicy", name: "Coxinha Spicy Edition", description: "Calor signature. Especiarias controladas.", image: "", category: "Limited Drops" },
      { id: "kibe-cheese", name: "Kibe Cheese Fusion", description: "Crocante por fora. Derretido por dentro.", image: "", category: "Limited Drops" },
      { id: "urban-pizza", name: "Urban Pizza Bolinha", description: "Base brasileira. Recheio italiano.", image: "", category: "Limited Drops" },
    ],
    limitedDrops: [],
  },
};
export default data;
