
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const signals = [
  {
    type: "buy",
    asset: "Gold (XAU/USD)",
    reason: "Fundamentals align",
    details: "Strong support level at $1,850, bullish momentum confirmed by RSI and MACD. Inflation concerns driving safe-haven demand.",
    chart: "up" // For simplified chart display
  },
  {
    type: "buy",
    asset: "GBP/JPY",
    reason: "Breakout setup detected",
    details: "Clear breakout above 180.50 resistance with increasing volume. Bank of England hawkish stance versus Bank of Japan's continued easing.",
    chart: "breakout" // For simplified chart display
  },
  {
    type: "avoid",
    asset: "NASDAQ",
    reason: "Rangebound, no confirmation",
    details: "Trading within consolidation zone with decreasing volume. Multiple failed breakout attempts suggest waiting for clearer direction.",
    chart: "range" // For simplified chart display
  },
  {
    type: "avoid",
    asset: "EUR/GBP",
    reason: "Emotional entry risk",
    details: "Your previous trades show a pattern of entering counter-trend on this pair. Current setup doesn't align with your successful strategy.",
    chart: "down" // For simplified chart display
  }
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
            See how TradeIQ analyzes the market and provides verified trading opportunities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {signals.map((signal, index) => (
            <div 
              key={index}
              className={cn(
                "glass-card p-5 transition-all duration-300 group hover:border-blue-soft/50",
                "animate-reveal",
                `animate-delay-${(index + 1) * 100}`
              )}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className={cn(
                    "inline-block px-3 py-1 rounded-full text-sm font-medium mb-2",
                    signal.type === "buy" ? "bg-blue-soft/20 text-blue-soft" : "bg-red-500/20 text-red-500"
                  )}>
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
                  <svg width="100" height="40" viewBox="0 0 100 40">
                    <path d="M0,30 C10,28 20,25 30,20 C40,15 50,10 60,8 C70,6 80,5 90,5 L100,5" 
                      stroke={signal.type === "buy" ? "#1EAEDB" : "#FF4A6E"} 
                      strokeWidth="2" 
                      fill="none" />
                  </svg>
                )}
                {signal.chart === "down" && (
                  <svg width="100" height="40" viewBox="0 0 100 40">
                    <path d="M0,5 C10,7 20,10 30,15 C40,20 50,25 60,28 C70,30 80,32 90,35 L100,35" 
                      stroke={signal.type === "buy" ? "#1EAEDB" : "#FF4A6E"} 
                      strokeWidth="2" 
                      fill="none" />
                  </svg>
                )}
                {signal.chart === "range" && (
                  <svg width="100" height="40" viewBox="0 0 100 40">
                    <path d="M0,20 C10,25 20,15 30,20 C40,25 50,15 60,20 C70,25 80,15 90,20 L100,20" 
                      stroke={signal.type === "buy" ? "#1EAEDB" : "#FF4A6E"} 
                      strokeWidth="2" 
                      fill="none" />
                  </svg>
                )}
                {signal.chart === "breakout" && (
                  <svg width="100" height="40" viewBox="0 0 100 40">
                    <path d="M0,20 C10,20 20,20 30,20 C40,20 50,20 60,20 C70,20 75,5 85,5 L100,5" 
                      stroke={signal.type === "buy" ? "#1EAEDB" : "#FF4A6E"} 
                      strokeWidth="2" 
                      fill="none" />
                    <line x1="0" y1="20" x2="70" y2="20" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="2" />
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
