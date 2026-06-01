import { AlertTriangle, Clock, BookOpen, DollarSign } from "lucide-react";
import { useTranslation } from "react-i18next";

const icons = [AlertTriangle, Clock, BookOpen, DollarSign];

const Problem = () => {
  const { t } = useTranslation();

  const items = t("problem.items", { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  return (
    <section id="probleme" className="section-padding section-alt" aria-labelledby="problem-title">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 id="problem-title" className="text-3xl md:text-4xl font-bold mb-4">
            {t("problem.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("problem.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((problem, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={i}
                className="bg-card rounded-lg border border-border p-6 hover:border-accent/40 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-primary/5 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{problem.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Problem;
