import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import ServiceCentralisation from "@/components/landing/ServiceCentralisation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";

const Industriel = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="section-padding pt-32 md:pt-40 pb-16 md:pb-24">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 text-foreground">
              {t("industriel.hero.title")}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              {t("industriel.hero.subtitle")}
            </p>
            <Button size="lg" className="text-base px-8 py-6" asChild>
              <a href="https://calendly.com/dumoulinsolutions/sonoria-appel-decouverte" target="_blank" rel="noopener noreferrer">
                {t("industriel.hero.cta")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-6">
              {t("industriel.hero.reassurance")}
            </p>
          </div>
        </section>

        {/* Problem */}
        <section className="section-padding section-alt">
          <div className="container max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t("industriel.problem.title")}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">{t("industriel.problem.subtitle")}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {(t("industriel.problem.items", { returnObjects: true }) as { title: string; description: string }[]).map((item, i) => (
                <div key={i} className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="section-padding">
          <div className="container max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t("industriel.solution.title")}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">{t("industriel.solution.subtitle")}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {(t("industriel.solution.features", { returnObjects: true }) as string[]).map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
            <div className="max-w-2xl mx-auto space-y-4">
              <div className="bg-card rounded-xl p-6 border border-border">
                <p className="text-foreground font-medium">{t("industriel.solution.question")}</p>
              </div>
              <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                <p className="text-sm text-primary mb-1 font-medium">{t("industriel.solution.answerLabel")}</p>
                <p className="text-foreground">{t("industriel.solution.answer")}</p>
                <p className="text-xs text-muted-foreground mt-2">{t("industriel.solution.answerSource")}</p>
              </div>
              <div className="bg-muted/50 rounded-xl p-6 border border-border">
                <p className="text-sm text-muted-foreground mb-1 font-medium">{t("industriel.solution.notDocumentedLabel")}</p>
                <p className="text-sm text-muted-foreground">{t("industriel.solution.notDocumented")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Centralisation service */}
        <ServiceCentralisation />

        {/* How it works */}
        <section className="section-padding section-alt">
          <div className="container max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t("industriel.howItWorks.title")}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">{t("industriel.howItWorks.subtitle")}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {(t("industriel.howItWorks.steps", { returnObjects: true }) as { title: string; description: string }[]).map((step, i) => (
                <div key={i} className="text-center">
                  <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold mx-auto mb-4">
                    {i + 1}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety */}
        <section className="section-padding">
          <div className="container max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t("industriel.safety.title")}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">{t("industriel.safety.subtitle")}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(t("industriel.safety.points", { returnObjects: true }) as { title: string; description: string }[]).map((point, i) => (
                <div key={i} className="bg-card rounded-xl p-6 border border-border">
                  <Shield className="h-5 w-5 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">{point.title}</h3>
                  <p className="text-sm text-muted-foreground">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* FAQ */}
        <section className="section-padding">
          <div className="container max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">{t("industriel.faq.title")}</h2>
            <div className="space-y-4">
              {(t("industriel.faq.items", { returnObjects: true }) as { question: string; answer: string }[]).map((item, i) => (
                <details key={i} className="bg-card rounded-xl border border-border p-6 group">
                  <summary className="font-semibold text-foreground cursor-pointer list-none flex items-center justify-between">
                    {item.question}
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-open:rotate-90 transition-transform" />
                  </summary>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding section-alt">
          <div className="container max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("industriel.finalCta.title")}{" "}
              <span className="text-muted-foreground">{t("industriel.finalCta.titleFaded")}</span>
            </h2>
            <p className="text-muted-foreground mb-8">{t("industriel.finalCta.subtitle")}</p>
            <Button size="lg" className="text-base px-8 py-6" asChild>
              <a href="https://calendly.com/dumoulinsolutions/sonoria-appel-decouverte" target="_blank" rel="noopener noreferrer">
                {t("industriel.finalCta.cta")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Industriel;
