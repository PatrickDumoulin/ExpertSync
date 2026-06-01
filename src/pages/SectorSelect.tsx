import { Factory, Building2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logoExpertSync from "@/assets/logo-expertsync.png";

const SectorSelect = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "fr" ? "en" : "fr");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Minimal header */}
      <header className="w-full py-6 px-6">
        <div className="container max-w-6xl mx-auto flex items-center justify-between">
          <img src={logoExpertSync} alt="ExpertSync" className="h-8 w-auto" />
          <button
            onClick={toggleLanguage}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded border border-border"
            aria-label={i18n.language === "fr" ? "Switch to English" : "Passer en français"}
          >
            {i18n.language === "fr" ? "EN" : "FR"}
          </button>
        </div>
      </header>

      {/* Sector selection */}
      <main className="flex-1 flex items-center justify-center px-6 pb-16">
        <div className="max-w-4xl w-full text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t("sectorSelect.title")}
          </h1>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t("sectorSelect.subtitle")}
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Industrial */}
            <Link
              to="/industriel"
              className="group relative flex flex-col items-center gap-5 p-8 md:p-10 rounded-2xl border border-border bg-card hover:border-primary hover:shadow-lg transition-all duration-300"
            >
              <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Factory className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  {t("sectorSelect.industrial.title")}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t("sectorSelect.industrial.description")}
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                {t("sectorSelect.discover")}
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>

            {/* Financial */}
            <Link
              to="/financier"
              className="group relative flex flex-col items-center gap-5 p-8 md:p-10 rounded-2xl border border-border bg-card hover:border-primary hover:shadow-lg transition-all duration-300"
            >
              <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  {t("sectorSelect.financial.title")}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t("sectorSelect.financial.description")}
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                {t("sectorSelect.discover")}
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SectorSelect;
