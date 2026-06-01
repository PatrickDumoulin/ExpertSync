import { Lock, Server, Eye, FileSearch, Settings, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";

const icons = [Lock, Server, Eye, FileSearch, Settings, Shield];

const Safety = () => {
  const { t } = useTranslation();

  const points = t("safety.points", { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  return (
    <section id="securite" className="section-padding" aria-labelledby="safety-title">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 id="safety-title" className="text-3xl md:text-4xl font-bold mb-4">
            {t("safety.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("safety.subtitle")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point, i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className="text-center p-6 rounded-lg border border-border bg-card hover:border-accent/40 transition-colors"
              >
                <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">{point.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Safety;
