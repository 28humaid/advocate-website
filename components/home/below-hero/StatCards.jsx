import { stats } from "@/utils/Statcards-data";

export default function StatCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.label}
            className="bg-light1 border border-dark1 p-6 flex flex-col gap-3"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-dark1 uppercase tracking-widest">
                {stat.label}
              </span>
              <div className="flex items-center justify-center">
                <Icon size={24} className="text-dark1" />
              </div>
            </div>

            <p className="text-5xl font-serif font-semibold text-dark1 leading-none">
              {stat.number}+
            </p>

            <p className="text-sm text-dark1 leading-relaxed border-t border-dark1 pt-3">
              {stat.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}