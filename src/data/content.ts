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
      heroText: "La street food brésilienne réinventée avec passion et authenticité.",
      aboutTitle: "Notre Concept",
      aboutText: "Rua 237 apporte l'énergie vibrante des rues brésiliennes dans chaque bouchée. Nous sélectionnons des ingrédients de qualité pour transformer les classiques de la street food en une expérience gastronomique unique, accessible et mémorable.",
      aboutHighlight: "Authenticité. Qualité. Saveur.",
    },
    ui: {
      discover: "Découvrir le menu",
      contact: "Nous contacter",
      allCategories: "Tout",
      ctaTitle: "Envie de goûter?",
      ctaText: "Contactez-nous pour vos événements, commandes ou collaborations.",
      ctaButton: "Entrer en contact",
      contactTitle: "Contact",
      namePlaceholder: "Votre nom",
      messagePlaceholder: "Votre message...",
      sendEmail: "Envoyer par email",
      whatsapp: "Contacter par WhatsApp",
      instagram: "Suivez-nous sur Instagram",
      footerText: "© 2026 Rua 237. Tous droits réservés.",
      catalogTitle: "Notre Menu",
    },
    categories: ["Signature", "Classiques", "Événement"],
    products: [
      { id: "coxinha-237", name: "237 Coxinha", description: "Icône signature. Poulet effilé, texture croustillante structurée.", image: "", category: "Signature" },
      { id: "swiss-heat-bolinha", name: "Swiss Heat Bolinha", description: "Fromage brésilien & Gruyère suisse. Fusion stratégique.", image: "", category: "Signature" },
      { id: "urban-kibe", name: "Urban Kibe", description: "Texture ferme. Profil épicé maîtrisé.", image: "", category: "Signature" },
      { id: "rua-rissois", name: "Rua Rissois", description: "Viande suisse. Croustillant de rue, format élégant.", image: "", category: "Signature" },
      { id: "pao-237", name: "Pão 237", description: "Pão de queijo traditionnel brésilien.", image: "", category: "Classiques" },
      { id: "empada-237", name: "237 Empada", description: "Empada au poulet. Recette traditionnelle.", image: "", category: "Classiques" },
      { id: "bacalhau-drop", name: "Bacalhau Drop", description: "Beignet de morue. Croustillant, doré, authentique.", image: "", category: "Classiques" },
      { id: "237-feast", name: "The 237 Feast — 100 Bites", description: "Box signature pour événements. Sélection structurée. Conçu pour le partage.", image: "", category: "Événement" },
    ],
  },
  en: {
    brand: {
      slogan: "Brazilian Bites, Elevated.",
      heroText: "Brazilian street food reimagined with passion and authenticity.",
      aboutTitle: "Our Concept",
      aboutText: "Rua 237 brings the vibrant energy of Brazilian streets into every bite. We select quality ingredients to transform street food classics into a unique, accessible, and memorable gastronomic experience.",
      aboutHighlight: "Authenticity. Quality. Flavor.",
    },
    ui: {
      discover: "Discover the menu",
      contact: "Contact us",
      allCategories: "All",
      ctaTitle: "Ready to taste?",
      ctaText: "Get in touch for events, orders, or collaborations.",
      ctaButton: "Get in touch",
      contactTitle: "Contact",
      namePlaceholder: "Your name",
      messagePlaceholder: "Your message...",
      sendEmail: "Send email",
      whatsapp: "Chat on WhatsApp",
      instagram: "Follow us on Instagram",
      footerText: "© 2026 Rua 237. All rights reserved.",
      catalogTitle: "Our Menu",
    },
    categories: ["Signature", "Classics", "Event"],
    products: [
      { id: "coxinha-237", name: "237 Coxinha", description: "Signature icon. Shredded chicken, structured crisp texture.", image: "", category: "Signature" },
      { id: "swiss-heat-bolinha", name: "Swiss Heat Bolinha", description: "Brazilian cheese & Swiss Gruyère. Strategic fusion.", image: "", category: "Signature" },
      { id: "urban-kibe", name: "Urban Kibe", description: "Firm texture. Controlled spiced profile.", image: "", category: "Signature" },
      { id: "rua-rissois", name: "Rua Rissois", description: "Swiss meat. Street crisp, elegant format.", image: "", category: "Signature" },
      { id: "pao-237", name: "Pão 237", description: "Traditional Brazilian pão de queijo.", image: "", category: "Classics" },
      { id: "empada-237", name: "237 Empada", description: "Chicken empada. Traditional recipe.", image: "", category: "Classics" },
      { id: "bacalhau-drop", name: "Bacalhau Drop", description: "Codfish fritter. Crisp, golden, authentic.", image: "", category: "Classics" },
      { id: "237-feast", name: "The 237 Feast — 100 Bites", description: "Signature event box. Structured selection. Designed for sharing.", image: "", category: "Event" },
    ],
  },
  pt: {
    brand: {
      slogan: "Brazilian Bites, Elevated.",
      heroText: "A comida de rua brasileira reinventada com paixão e autenticidade.",
      aboutTitle: "Nosso Conceito",
      aboutText: "A Rua 237 traz a energia vibrante das ruas brasileiras em cada mordida. Selecionamos ingredientes de qualidade para transformar clássicos da comida de rua em uma experiência gastronômica única, acessível e memorável.",
      aboutHighlight: "Autenticidade. Qualidade. Sabor.",
    },
    ui: {
      discover: "Descobrir o cardápio",
      contact: "Fale conosco",
      allCategories: "Todos",
      ctaTitle: "Quer experimentar?",
      ctaText: "Entre em contato para eventos, encomendas ou parcerias.",
      ctaButton: "Entrar em contato",
      contactTitle: "Contato",
      namePlaceholder: "Seu nome",
      messagePlaceholder: "Sua mensagem...",
      sendEmail: "Enviar por email",
      whatsapp: "Falar pelo WhatsApp",
      instagram: "Siga-nos no Instagram",
      footerText: "© 2026 Rua 237. Todos os direitos reservados.",
      catalogTitle: "Nosso Cardápio",
    },
    categories: ["Signature", "Clássicos", "Evento"],
    products: [
      { id: "coxinha-237", name: "237 Coxinha", description: "Ícone signature. Frango desfiado, textura crocante estruturada.", image: "", category: "Signature" },
      { id: "urban-kibe", name: "Urban Kibe", description: "Textura firme. Perfil de especiarias controlado.", image: "", category: "Signature" },
      { id: "swiss-heat-bolinha", name: "Swiss Heat Bolinha", description: "Queijo brasileiro & Gruyère suíço. Fusão estratégica.", image: "", category: "Signature" },
      { id: "rua-rissois", name: "Rua Rissois", description: "Carne suíça. Crocante de rua, formato elegante.", image: "", category: "Clássicos" },
      { id: "empada-237", name: "237 Empada", description: "Empada de frango. Receita tradicional.", image: "", category: "Clássicos" },
      { id: "pao-237", name: "Pão 237", description: "Pão de queijo tradicional brasileiro.", image: "", category: "Clássicos" },
      { id: "bacalhau-drop", name: "Bacalhau Drop", description: "Bolinho de bacalhau. Crocante, dourado, autêntico.", image: "", category: "Clássicos" },
      { id: "237-feast", name: "The 237 Feast — 100 Bites", description: "Box signature para eventos. Seleção estruturada. Feito para compartilhar.", image: "", category: "Evento" },
    ],
  },
};

export default data;
