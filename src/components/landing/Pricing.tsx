import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { useTranslation } from "react-i18next";

const Pricing = () => {
  const { t } = useTranslation();

  const included = t("pricing.included", { returnObjects: true }) as string[];

  return (
    <section id="tarification" className="section-padding section-alt" aria-labelledby="pricing-title">
      <div className="container max-w-3xl mx-auto text-center">
        <h2 id="pricing-title" className="text-3xl md:text-4xl font-bold mb-4">
          {t("pricing.title")}
        </h2>
        <p className="text-lg text-muted-foreground mb-12">
          {t("pricing.subtitle")}
        </p>

        <div className="bg-card border border-border rounded-xl p-8 md:p-10 text-left">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 pb-8 border-b border-border">
            <div>
              <p className="text-sm font-medium text-accent mb-1">{t("pricing.plan")}</p>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-bold">{t("pricing.price")}</span>
                <span className="text-muted-foreground">{t("pricing.period")}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                {t("pricing.implementation")}
              </p>
              <p className="text-sm font-medium text-primary mt-2">
                {t("pricing.timeline")}
              </p>
            </div>
            <Button size="lg" className="text-base px-8 py-6 shrink-0" asChild>
              <a href="https://calendly.com/dumoulinsolutions/sonoria-appel-decouverte" target="_blank" rel="noopener noreferrer">
                {t("pricing.cta")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="space-y-3">
            {included.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <Check className="h-4 w-4 text-accent flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <p className="text-sm text-muted-foreground mt-8 pt-6 border-t border-border">
            {t("pricing.noCommitment")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
