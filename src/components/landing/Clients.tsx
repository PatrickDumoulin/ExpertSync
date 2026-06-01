import { useTranslation } from "react-i18next";
import logoMerkur from "@/assets/logo-merkur.png";
import logoBrb from "@/assets/logo-brb.png";
import logoDeepsight from "@/assets/logo-deepsight.png";
import logoOlofee from "@/assets/logo-olofee.png";
import logoUdem from "@/assets/logo-udem.png";

const logos = [
  { src: logoMerkur, alt: "Merkur", invert: false },
  { src: logoBrb, alt: "Les Productions BRB", invert: false },
  { src: logoDeepsight, alt: "DeepSight", invert: false },
  { src: logoOlofee, alt: "Ferme Olofée", invert: false },
  { src: logoUdem, alt: "Université de Montréal", invert: false },
];

const Clients = () => {
  const { t } = useTranslation();
  const loop = [...logos, ...logos];

  return (
    <section id="clients" className="section-padding section-alt" aria-labelledby="clients-title">
      <div className="container max-w-5xl mx-auto text-center">
        <h2 id="clients-title" className="text-3xl md:text-4xl font-bold mb-4">
          {t("clients.title")}
        </h2>
        <p className="text-lg text-muted-foreground mb-12">
          {t("clients.subtitle")}
        </p>

        <div className="marquee-mask overflow-hidden">
          <div className="flex w-max items-center gap-16 md:gap-24 animate-marquee">
            {loop.map((logo, i) => (
              <img
                key={i}
                src={logo.src}
                alt={`Logo ${logo.alt} — client ExpertSync`}
                className={`h-12 md:h-16 w-auto object-contain shrink-0 ${logo.invert ? "invert dark:invert-0" : ""}`}
                loading="lazy"
                width="160"
                height="64"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
