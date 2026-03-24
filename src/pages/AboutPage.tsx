import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const AboutContent = () => {
  const [contactOpen, setContactOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header onContactClick={() => setContactOpen(true)} />

      <main className="pt-24 pb-20">
        {/* Back link */}
        <div className="max-w-3xl mx-auto px-6 mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-body tracking-wide uppercase"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.ui.backHome}
          </Link>
        </div>

        {/* Origin section */}
        <section className="max-w-3xl mx-auto px-6">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-12">
            {t.about.originTitle}
          </h1>

          <div className="font-body text-muted-foreground text-base md:text-lg leading-relaxed space-y-6">
            {t.about.originBlocks.map((block, i) => (
              <p key={i} className="whitespace-pre-line">{block}</p>
            ))}
          </div>

          {/* Use cases */}
          <div className="mt-12 border-t border-border pt-10">
            <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
              {t.about.designedForIntro}
            </p>
            <ul className="space-y-2 font-body text-foreground text-base md:text-lg">
              {t.about.designedForList.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-primary mt-1">–</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Highlight */}
          <div className="mt-16 text-center">
            <p className="text-primary font-body text-sm font-semibold tracking-[0.35em] uppercase">
              {t.brand.aboutHighlight}
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
};

export default AboutContent;
