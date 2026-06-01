import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="hero" className="section-padding pt-32 md:pt-40 pb-16 md:pb-24" aria-labelledby="hero-title">
      <div className="container max-w-4xl mx-auto text-center">
        <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 text-foreground">
          {t("hero.title")}{" "}
          <span className="text-muted-foreground">{t("hero.titleFaded")}</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          {t("hero.subtitle")}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="text-base px-8 py-6" asChild>
            <a href="https://calendly.com/dumoulinsolutions/sonoria-appel-decouverte" target="_blank" rel="noopener noreferrer">
              {t("hero.cta")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <p className="text-sm text-muted-foreground mt-6">
          {t("hero.reassurance")}
        </p>
      </div>
    </section>
  );
};

export default Hero;
