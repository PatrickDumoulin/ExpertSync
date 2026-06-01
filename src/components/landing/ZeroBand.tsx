import { useTranslation } from "react-i18next";

const ZeroBand = () => {
  const { t } = useTranslation();
  const items = t("zeroBand.items", { returnObjects: true }) as string[];

  return (
    <div className="border-y border-border bg-card">
      <div className="container max-w-5xl mx-auto">
        <div className="grid grid-cols-3 divide-x divide-border">
          {items.map((item, i) => (
            <div key={i} className="py-6 px-8 text-center">
              <span className="text-xl md:text-2xl font-bold text-foreground">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ZeroBand;
