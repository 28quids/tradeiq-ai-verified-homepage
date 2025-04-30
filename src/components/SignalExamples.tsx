import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const signals = [
  {
    type: "buy",
    asset: "Gold (XAU/USD)",
    reason:
      "Fundamentals support continued uptrend (aligns with your strategy)",
    details:
      "Central banks buying continues adding fuel to bull cycle fire on XAUUSD. COT data implies continued institutional long positions.",
    chart: "up", // For simplified chart display
  },
  {
    type: "buy",
    asset: "XXX/USD",
    reason: "Lower time frame reversal -> Higher time frame continuation.",
    details:
      "Fundamentals support continued upside for majors, with 1h timeframe signifying LTF reversal and continuation of HTF trend.",
    chart: "breakout", // For simplified chart display
  },
  {
    type: "avoid",
    asset: "NASDAQ",
    reason: "Rangebound, no confirmation",
    details:
      "Trading within consolidation zone with decreasing volume. Multiple failed breakout attempts suggest waiting for clearer direction.",
    chart: "range", // For simplified chart display
  },
  {
    type: "avoid",
    asset: "EUR/GBP",
    reason: "Emotional entry risk",
    details:
      "Your previous trades show a pattern of entering counter-trend on this pair. Current setup doesn't align with your successful strategy.",
    chart: "down", // For simplified chart display
  },
];

const SignalExamples = () => {
  const [expandedSignal, setExpandedSignal] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedSignal(expandedSignal === index ? null : index);
  };

  return (
    <section id="signals" className="section-padding bg-navy-dark relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-reveal">
            Real-Time Signal Examples
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto animate-reveal animate-delay-200">
            See how TradeIQ analyses the market and provides verified trading
            opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {signals.map((signal, index) => (
            <div
              key={index}
              className={cn(
                "glass-card p-5 transition-all duration-300 group hover:border-blue-soft/50",
                "animate-reveal",
                `animate-delay-${(index + 1) * 100}`,
              )}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span
                    className={cn(
                      "inline-block px-3 py-1 rounded-full text-sm font-medium mb-2",
                      signal.type === "buy"
                        ? "bg-blue-soft/20 text-blue-soft"
                        : "bg-red-500/20 text-red-500",
                    )}
                  >
                    {signal.type === "buy" ? "✅ You Should Trade" : "❌ Avoid"}
                  </span>
                  <h3 className="text-xl font-bold">{signal.asset}</h3>
                  <p className="text-white/70">{signal.reason}</p>
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleExpand(index)}
                  className="text-white/50 hover:text-white hover:bg-white/5"
                >
                  {expandedSignal === index ? "Hide" : "Why?"}
                </Button>
              </div>

              {/* Mini chart visualization */}
              <div className="h-20 bg-navy-light rounded-md mb-3 p-2 flex items-center justify-center">
                {signal.chart === "up" && (
                  <svg width="200" height="40" viewBox="0 0 200 40">
                    <path
                      d="M0,35 L30,25 L60,30 L90,20 L120,25 L150,15 L180,20 L200,10"
                      stroke={signal.type === "buy" ? "#1EAEDB" : "#FF4A6E"}
                      strokeWidth="3"
                      fill="none"
                    />
                  </svg>
                )}
                {signal.chart === "down" && (
                  <svg width="200" height="40" viewBox="0 0 200 40">
                    <path
                      d="M0,5 L30,10 L60,8 L90,15 L120,12 L150,20 L180,25 L200,30"
                      stroke={signal.type === "buy" ? "#1EAEDB" : "#FF4A6E"}
                      strokeWidth="3"
                      fill="none"
                    />
                  </svg>
                )}
                {signal.chart === "range" && (
                  <svg width="200" height="40" viewBox="0 0 200 40">
                    <path
                      d="M0,20 L30,25 L60,15 L90,25 L120,15 L150,25 L180,15 L200,20"
                      stroke={signal.type === "buy" ? "#1EAEDB" : "#FF4A6E"}
                      strokeWidth="3"
                      fill="none"
                    />
                  </svg>
                )}
                {signal.chart === "breakout" && (
                  <svg width="200" height="40" viewBox="0 0 200 40">
                    <path
                      d="M0,30 L70,30 L90,25 L110,20 L140,10 L170,5 L200,0"
                      stroke={signal.type === "buy" ? "#1EAEDB" : "#FF4A6E"}
                      strokeWidth="3"
                      fill="none"
                    />
                    <line
                      x1="0"
                      y1="30"
                      x2="70"
                      y2="30"
                      stroke="#FFFFFF"
                      strokeWidth="1"
                      strokeOpacity="0.2"
                      strokeDasharray="2"
                    />
                  </svg>
                )}
              </div>

              {/* Expanded details */}
              {expandedSignal === index && (
                <div className="mt-4 p-3 rounded bg-navy/50 text-sm animate-fade-in">
                  <p className="text-white/80">{signal.details}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignalExamples;
