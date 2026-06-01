import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, FolderOpen } from "lucide-react";

const ServiceCentralisation = () => {
  const { t } = useTranslation();
  const included = t("centralisationService.included", { returnObjects: true }) as string[];

  return (
    <section className="section-padding section-alt">
      <div className="container max-w-5xl mx-auto">
        <div className="rounded-2xl border-2 border-dashed border-border bg-background p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground mb-5">
                <FolderOpen className="h-3 w-3" />
                {t("centralisationService.badge")}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {t("centralisationService.title")}
              </h2>
              <p className="text-muted-foreground mb-3 leading-relaxed">
                {t("centralisationService.subtitle")}
              </p>
              <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                {t("centralisationService.description")}
              </p>
              <Button variant="outline" size="lg" className="text-base" asChild>
                <a
                  href="https://calendly.com/dumoulinsolutions/sonoria-appel-decouverte"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("centralisationService.cta")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="bg-card rounded-xl border border-border p-6">
              <p className="font-semibold text-foreground mb-5">
                {t("centralisationService.includedTitle")}
              </p>
              <ul className="space-y-3">
                {included.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCentralisation;
