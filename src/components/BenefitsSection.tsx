import { cn } from "@/lib/utils";

const benefits = [
  {
    title: "Eliminate Impulsive Trades",
    description:
      "Stop acting on emotion and FOMO. TradeIQ helps you trade with logic, not impulse.",
    icon: "🛑",
  },
  {
    title: "Stick to Your Edge",
    description:
      "Trade consistently with your proven strategies and strengths.",
    icon: "📈",
  },
  {
    title: "Trade with Confidence",
    description:
      "Every recommendation is backed by data and aligned with your personal style.",
    icon: "🔍",
  },
  {
    title: "Improve Discipline Over Time",
    description:
      "Build better habits as the AI coaches you through each decision.",
    icon: "⏱️",
  },
  {
    title: "Know What to Avoid",
    description:
      "Clear warnings help you sidestep low-probability setups and potential losses.",
    icon: "⚠️",
  },
  {
    title: "Maximize Your Potential",
    description:
      "Sharpen your skills and decision-making to unlock better trading outcomes over time.",
    icon: "💰",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="section-padding bg-navy-dark relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-reveal">
            Built to Make You a{" "}
            <span className="gradient-text">Better Trader</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto animate-reveal animate-delay-200">
            Systematically improve your trading performance with AI-powered
            insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={cn(
                "glass-card p-6 flex flex-col items-center text-center transition-all duration-300 animate-reveal hover:border-blue-soft/30",
                `animate-delay-${((index % 3) + 1) * 100}`,
              )}
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-white/70">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
