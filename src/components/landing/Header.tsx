import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import logoExpertSync from "@/assets/logo-expertsync.png";

const Header = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "fr" ? "en" : "fr");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/60">
      <nav className="container max-w-6xl mx-auto flex items-center justify-between h-16 px-6" aria-label="Navigation principale">
        <a href="/" aria-label="ExpertSync, Accueil">
          <img src={logoExpertSync} alt="ExpertSync" className="h-8 w-auto" />
        </a>
        <div className="flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded border border-border"
            aria-label={i18n.language === "fr" ? "Switch to English" : "Passer en français"}
          >
            {i18n.language === "fr" ? "EN" : "FR"}
          </button>
          <Button size="sm" asChild>
            <a href="https://calendly.com/dumoulinsolutions/sonoria-appel-decouverte" target="_blank" rel="noopener noreferrer">
              {t("header.cta")}
            </a>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
