import { FileText, CheckCircle2, Link, ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";

const icons = [FileText, CheckCircle2, Link, ShieldCheck];

const Solution = () => {
  const { t } = useTranslation();

  const features = t("solution.features", { returnObjects: true }) as string[];

  return (
    <section id="solution" className="section-padding" aria-labelledby="solution-title">
      <div className="container max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 id="solution-title" className="text-3xl md:text-4xl font-bold mb-6">
              {t("solution.title")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t("solution.subtitle")}
            </p>

            <div className="space-y-4">
              {features.map((text, i) => {
                const Icon = icons[i];
                return (
                  <div key={i} className="flex items-start gap-3">
                    <Icon className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <div className="space-y-4">
              <div className="bg-muted rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-1">Question</p>
                <p className="font-medium">{t("solution.question")}</p>
              </div>
              <div className="bg-primary/5 rounded-lg p-4 border border-accent/20">
                <p className="text-sm text-accent mb-1 font-medium">
                  {t("solution.answerLabel")}
                </p>
                <p className="font-medium mb-3">{t("solution.answer")}</p>
                <p className="text-xs text-muted-foreground border-t border-border pt-2">
                  {t("solution.answerSource")}
                </p>
              </div>
              <div className="bg-muted rounded-lg p-4 border border-destructive/20">
                <p className="text-sm text-muted-foreground mb-1">
                  {t("solution.notDocumentedLabel")}
                </p>
                <p className="font-medium text-muted-foreground italic">
                  {t("solution.notDocumented")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
