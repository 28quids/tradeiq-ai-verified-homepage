import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const PricingSelection = () => {
  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy/30 to-navy-dark/80 z-0"></div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-reveal">
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto animate-reveal animate-delay-200">
            Choose the plan that fits your trading needs. All plans include core
            features with premium options for advanced traders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="glass-card p-8 animate-reveal animate-delay-300">
            <h3 className="text-2xl font-bold mb-4">Basic Plan</h3>
            <div className="text-3xl font-bold mb-6 text-blue-soft">
              $30 <span className="text-lg text-white/60">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              {[
                "Trade validation alerts",
                "Basic strategy monitoring",
                "Market condition alerts",
                "Opportunity detection",
                "Base analytics dashboard",
                "Entry/exit optimisation",
                "Position sizing recommendations",
                "Psychological assessment",
                "Custom strategy parameters",
              ].map((feature) => (
                <li key={feature} className="flex items-center text-white/80">
                  <span className="text-blue-soft mr-2">✓</span> {feature}
                </li>
              ))}
            </ul>
            <Button 
              className="w-full bg-blue-soft hover:bg-blue-electric text-white py-6"
              onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started
            </Button>
          </Card>

          <Card className="glass-card p-8 animate-reveal animate-delay-400">
            <h3 className="text-2xl font-bold mb-4">Premium Plan</h3>
            <div className="text-3xl font-bold mb-6 text-blue-electric">
              $60 <span className="text-lg text-white/60">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              {[
                "All Basic Plan features",
                "Advanced entry/exit optimisation",
                "Visualised Suggestions on Charts",
                "Psychological check ups",
                "Psychological assessment Reports",
                "Live AI Mentor",
                "Priority support",
                "Advanced analytics dashboard",
                "Custom alert thresholds",
                "Weekly performance reports",
              ].map((feature) => (
                <li key={feature} className="flex items-center text-white/80">
                  <span className="text-blue-electric mr-2">✓</span> {feature}
                </li>
              ))}
            </ul>
            <Button 
              className="w-full bg-blue-electric hover:bg-blue-soft text-white py-6"
              onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Premium
            </Button>
          </Card>
        </div>

        <div className="text-center mt-12 animate-reveal animate-delay-500">
          <p className="text-lg text-white/80">
            💙🩵 First 500 users lock these prices for life 🩵💙
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSelection;
