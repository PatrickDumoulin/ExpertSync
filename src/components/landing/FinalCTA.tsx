import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const FinalCTA = () => {
  const { t } = useTranslation();

  return (
    <section className="section-padding section-alt">
      <div className="container max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {t("finalCta.title")}{" "}
          <span className="text-muted-foreground">
            {t("finalCta.titleFaded")}
          </span>
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
          {t("finalCta.subtitle")}
        </p>
        <Button size="lg" className="text-base px-8 py-6" asChild>
          <a href="https://calendly.com/dumoulinsolutions/sonoria-appel-decouverte" target="_blank" rel="noopener noreferrer">
            {t("finalCta.cta")}
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default FinalCTA;
