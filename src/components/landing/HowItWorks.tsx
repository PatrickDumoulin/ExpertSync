import { useTranslation } from "react-i18next";

const HowItWorks = () => {
  const { t } = useTranslation();

  const steps = t("howItWorks.steps", { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  const numbers = ["01", "02", "03"];

  return (
    <section id="fonctionnement" className="section-padding section-alt" aria-labelledby="howitworks-title">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 id="howitworks-title" className="text-3xl md:text-4xl font-bold mb-4">
            {t("howItWorks.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("howItWorks.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <span className="text-6xl font-bold text-primary/[0.07] absolute -top-4 -left-2 select-none">
                {numbers[i]}
              </span>
              <div className="relative pt-8">
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
