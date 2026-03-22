import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

import coxinhaImg from "@/assets/coxinha.jpg";
import paoImg from "@/assets/pao-de-queijo.jpg";
import empadaImg from "@/assets/empada.jpg";
import brigadeiroImg from "@/assets/brigadeiro.jpg";
import acaiImg from "@/assets/acai.jpg";
import limonadaImg from "@/assets/limonada.jpg";

const imageMap: Record<string, string> = {
  "1": coxinhaImg,
  "2": paoImg,
  "3": empadaImg,
  "4": brigadeiroImg,
  "5": acaiImg,
  "6": limonadaImg,
};

const Catalog = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? t.products.filter((p) => p.category === activeCategory)
    : t.products;

  return (
    <section id="menu" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground text-center mb-10">
          {t.ui.catalogTitle}
        </h2>

        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 text-sm font-medium rounded-sm transition-colors ${
              activeCategory === null
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-muted-foreground hover:text-foreground"
            }`}
          >
            {t.ui.allCategories}
          </button>
          {t.categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-sm font-medium rounded-sm transition-colors ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary/40 transition-colors"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={imageMap[product.id]}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {product.name}
                  </h3>
                  {product.price && (
                    <span className="text-primary font-body text-sm font-semibold whitespace-nowrap">
                      {product.price}
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
