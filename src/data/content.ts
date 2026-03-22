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
    categories: ["Salé", "Sucré", "Boissons"],
    products: [
      { id: "1", name: "Coxinha Classique", description: "Croquette de poulet effilé, façon traditionnelle brésilienne.", image: "", price: "€4.50", category: "Salé" },
      { id: "2", name: "Pão de Queijo", description: "Petit pain au fromage, croustillant et moelleux.", image: "", price: "€3.00", category: "Salé" },
      { id: "3", name: "Empada de Palmito", description: "Tourte feuilletée garnie de cœur de palmier.", image: "", price: "€4.00", category: "Salé" },
      { id: "4", name: "Brigadeiro Gourmet", description: "Truffe brésilienne au chocolat noir intense.", image: "", price: "€2.50", category: "Sucré" },
      { id: "5", name: "Açaí Bowl", description: "Bol d'açaí pur avec granola et fruits frais.", image: "", price: "€7.00", category: "Sucré" },
      { id: "6", name: "Limonada Suíça", description: "Limonade crémeuse à la brésilienne.", image: "", price: "€4.00", category: "Boissons" },
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
    categories: ["Savory", "Sweet", "Drinks"],
    products: [
      { id: "1", name: "Classic Coxinha", description: "Shredded chicken croquette, traditional Brazilian style.", image: "", price: "€4.50", category: "Savory" },
      { id: "2", name: "Pão de Queijo", description: "Cheese bread, crispy outside and chewy inside.", image: "", price: "€3.00", category: "Savory" },
      { id: "3", name: "Empada de Palmito", description: "Flaky pastry filled with heart of palm.", image: "", price: "€4.00", category: "Savory" },
      { id: "4", name: "Gourmet Brigadeiro", description: "Brazilian truffle with intense dark chocolate.", image: "", price: "€2.50", category: "Sweet" },
      { id: "5", name: "Açaí Bowl", description: "Pure açaí bowl with granola and fresh fruits.", image: "", price: "€7.00", category: "Sweet" },
      { id: "6", name: "Limonada Suíça", description: "Brazilian-style creamy lemonade.", image: "", price: "€4.00", category: "Drinks" },
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
    categories: ["Salgados", "Doces", "Bebidas"],
    products: [
      { id: "1", name: "Coxinha Clássica", description: "Croquete de frango desfiado, receita tradicional brasileira.", image: "", price: "€4.50", category: "Salgados" },
      { id: "2", name: "Pão de Queijo", description: "Pãozinho de queijo, crocante por fora e macio por dentro.", image: "", price: "€3.00", category: "Salgados" },
      { id: "3", name: "Empada de Palmito", description: "Massa folhada recheada com palmito.", image: "", price: "€4.00", category: "Salgados" },
      { id: "4", name: "Brigadeiro Gourmet", description: "Trufa brasileira de chocolate amargo intenso.", image: "", price: "€2.50", category: "Doces" },
      { id: "5", name: "Açaí Bowl", description: "Tigela de açaí puro com granola e frutas frescas.", image: "", price: "€7.00", category: "Doces" },
      { id: "6", name: "Limonada Suíça", description: "Limonada cremosa à moda brasileira.", image: "", price: "€4.00", category: "Bebidas" },
    ],
  },
};

export default data;
