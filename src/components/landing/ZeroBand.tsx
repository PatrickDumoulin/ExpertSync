import { useTranslation } from "react-i18next";
import { SearchX, Zap, GraduationCap } from "lucide-react";

const ICONS = [SearchX, Zap, GraduationCap];

const ZeroBand = () => {
  const { t } = useTranslation();
  const items = t("zeroBand.items", { returnObjects: true }) as string[];

  return (
    <div className="relative bg-slate-900 py-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/50 via-slate-900 to-blue-950/50" />
      <div className="relative container max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {items.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={i}
                className={`flex flex-col items-center text-center py-6 px-8 gap-4 ${
                  i < items.length - 1
                    ? "border-b sm:border-b-0 sm:border-r border-slate-700/50"
                    : ""
                }`}
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-blue-500/15 border border-blue-500/25 shrink-0">
                  <Icon className="h-5 w-5 text-blue-400" />
                </div>
                <span className="text-base md:text-lg font-bold text-white leading-snug">
                  {item}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ZeroBand;
