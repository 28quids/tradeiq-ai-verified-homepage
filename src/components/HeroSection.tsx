
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useIntersectionObserver } from "@/lib/useIntersectionObserver";
import gsap from "gsap";

const HeroSection = () => {
  const chartRef = useRef<SVGSVGElement | null>(null);
  const { targetRef: sectionRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  });
  const [chartAnimated, setChartAnimated] = useState(false);
  
  // Candlestick data - up candles (open, close, high, low) where close > open
  const upCandles = [
    { x: 50, o: 150, c: 120, h: 160, l: 110 },
    { x: 150, o: 130, c: 100, h: 140, l: 90 },
    { x: 250, o: 110, c: 80, h: 120, l: 70 },
    { x: 350, o: 100, c: 60, h: 110, l: 50 },
    { x: 450, o: 70, c: 45, h: 80, l: 40 },
    { x: 550, o: 60, c: 90, h: 100, l: 50 }, // Buy signal
    { x: 650, o: 90, c: 110, h: 120, l: 80 },
    { x: 750, o: 110, c: 130, h: 140, l: 100 },
  ];
  
  // Candlestick data - down candles (open, close, high, low) where close < open
  const downCandles = [
    { x: 100, o: 110, c: 130, h: 140, l: 100 },
    { x: 200, o: 90, c: 110, h: 120, l: 80 },
    { x: 300, o: 80, c: 90, h: 100, l: 70 },
    { x: 400, o: 60, c: 70, h: 80, l: 50 },
    { x: 500, o: 50, c: 60, h: 70, l: 40 },
    { x: 600, o: 80, c: 100, h: 110, l: 70 }, 
    { x: 700, o: 130, c: 110, h: 140, l: 100 }, // Sell signal
  ];
  
  useEffect(() => {
    if (isIntersecting && !chartAnimated && chartRef.current) {
      setChartAnimated(true);
      
      const tl = gsap.timeline({ defaults: { ease: "power1.inOut" } });
      
      // Animate grid lines
      tl.fromTo(".grid-line", 
        { opacity: 0 },
        { opacity: 1, stagger: 0.05, duration: 0.5 },
        0
      );
      
      // Animate candles
      tl.fromTo(".candle", 
        { scaleY: 0, opacity: 0 },
        { scaleY: 1, opacity: 1, stagger: 0.1, duration: 0.5 },
        0.5
      );
      
      // Animate candle wicks
      tl.fromTo(".candle-wick", 
        { scaleY: 0, opacity: 0 },
        { scaleY: 1, opacity: 1, stagger: 0.1, duration: 0.5 },
        0.5
      );
      
      // Animate buy signal
      tl.fromTo("#buy-zone",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.7 },
        2.2
      );
      
      tl.fromTo("#buy-signal",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5 },
        2.4
      );
      
      // Animate sell signal
      tl.fromTo("#sell-zone",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.7 },
        3.2
      );
      
      tl.fromTo("#sell-signal",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5 },
        3.4
      );
      
      // Animate indicators
      tl.fromTo(".indicator",
        { opacity: 0, x: -10 },
        { opacity: 1, x: 0, stagger: 0.2, duration: 0.5 },
        4
      );
    }
  }, [isIntersecting, chartAnimated]);
  
  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Background grid effect */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBzdHJva2U9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkiIHN0cm9rZS13aWR0aD0iLjUiLz48cGF0aCBkPSJNMCAzMGgzMHYzMEgweiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9Ii41Ii8+PHBhdGggZD0iTTAgMGgzMHYzMEgweiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9Ii41Ii8+PHBhdGggZD0iTTMwIDBoMzB2MzBIMzB6IiBzdHJva2U9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkiIHN0cm9rZS13aWR0aD0iLjUiLz48L2c+PC9zdmc+')]" />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-reveal">
              Every Trade, <br />
              <span className="gradient-text">Verified by AI.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg animate-reveal animate-delay-200 dark:text-white/80 light:text-navy/80">
              TradeIQ filters the market using fundamentals, technicals, and your unique trading style — so you only act when it makes sense.
            </p>
            <div className="flex flex-wrap gap-4 animate-reveal animate-delay-300">
              <Button className="bg-blue-soft hover:bg-blue-electric text-white px-6 py-6 text-lg">
                Join the Waitlist
              </Button>
              <Button variant="outline" className="border-white/20 hover:bg-white/5 text-white px-6 py-6 text-lg dark:border-white/20 light:border-navy/20">
                See How It Works <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <div className="glass-card p-4 md:p-6 rounded-xl animate-reveal animate-delay-400">
              <div className="bg-navy-dark rounded-lg p-4 overflow-hidden dark:bg-navy-dark light:bg-white/90">
                <h3 className="text-sm text-white/50 mb-2 dark:text-white/50 light:text-navy/50">GBPUSD - 4H Chart</h3>
                
                {/* Trading Chart SVG animation */}
                <svg 
                  ref={chartRef}
                  width="100%" 
                  height="300" 
                  viewBox="0 0 800 300" 
                  className="stroke-[3]"
                >
                  {/* Grid Lines */}
                  <g>
                    <line className="grid-line stroke-white/10 dark:stroke-white/10 light:stroke-navy/10" x1="0" y1="50" x2="800" y2="50" />
                    <line className="grid-line stroke-white/10 dark:stroke-white/10 light:stroke-navy/10" x1="0" y1="100" x2="800" y2="100" />
                    <line className="grid-line stroke-white/10 dark:stroke-white/10 light:stroke-navy/10" x1="0" y1="150" x2="800" y2="150" />
                    <line className="grid-line stroke-white/10 dark:stroke-white/10 light:stroke-navy/10" x1="0" y1="200" x2="800" y2="200" />
                    <line className="grid-line stroke-white/10 dark:stroke-white/10 light:stroke-navy/10" x1="0" y1="250" x2="800" y2="250" />
                    
                    <line className="grid-line stroke-white/10 dark:stroke-white/10 light:stroke-navy/10" x1="100" y1="0" x2="100" y2="300" />
                    <line className="grid-line stroke-white/10 dark:stroke-white/10 light:stroke-navy/10" x1="200" y1="0" x2="200" y2="300" />
                    <line className="grid-line stroke-white/10 dark:stroke-white/10 light:stroke-navy/10" x1="300" y1="0" x2="300" y2="300" />
                    <line className="grid-line stroke-white/10 dark:stroke-white/10 light:stroke-navy/10" x1="400" y1="0" x2="400" y2="300" />
                    <line className="grid-line stroke-white/10 dark:stroke-white/10 light:stroke-navy/10" x1="500" y1="0" x2="500" y2="300" />
                    <line className="grid-line stroke-white/10 dark:stroke-white/10 light:stroke-navy/10" x1="600" y1="0" x2="600" y2="300" />
                    <line className="grid-line stroke-white/10 dark:stroke-white/10 light:stroke-navy/10" x1="700" y1="0" x2="700" y2="300" />
                  </g>
                  
                  {/* Buy Zone */}
                  <g id="buy-zone">
                    <rect x="530" y="40" width="80" height="100" fill="#1EAEDB" fillOpacity="0.1" rx="4" />
                    <text x="570" y="70" fill="#1EAEDB" fontSize="12" textAnchor="middle" className="font-medium">BUY SIGNAL</text>
                    <text x="570" y="90" fill="#1EAEDB" fontSize="10" textAnchor="middle" className="font-medium">Aligns with your</text>
                    <text x="570" y="105" fill="#1EAEDB" fontSize="10" textAnchor="middle" className="font-medium">trading strategy</text>
                  </g>
                  
                  {/* Sell Zone */}
                  <g id="sell-zone">
                    <rect x="680" y="40" width="80" height="100" fill="#4CAF50" fillOpacity="0.1" rx="4" />
                    <text x="720" y="70" fill="#4CAF50" fontSize="12" textAnchor="middle" className="font-medium">SELL SIGNAL</text>
                    <text x="720" y="90" fill="#4CAF50" fontSize="10" textAnchor="middle" className="font-medium">Meets your set</text>
                    <text x="720" y="105" fill="#4CAF50" fontSize="10" textAnchor="middle" className="font-medium">profit goals</text>
                    <text x="720" y="125" fill="#4CAF50" fontSize="12" textAnchor="middle" className="font-medium">+12.5%</text>
                  </g>
                  
                  {/* Up Candles */}
                  {upCandles.map((candle, i) => (
                    <g key={`up-${i}`} className={`${candle.x === 550 ? "buy-signal" : ""}`}>
                      {/* Candle Body */}
                      <rect 
                        className="candle" 
                        x={candle.x - 6} 
                        y={candle.c}
                        width={12} 
                        height={candle.o - candle.c}
                        fill="#4CAF50"
                        ry={1}
                      />
                      {/* Candle Wick */}
                      <line 
                        className="candle-wick" 
                        x1={candle.x} 
                        y1={candle.h} 
                        x2={candle.x} 
                        y2={candle.l}
                        stroke="#4CAF50"
                        strokeWidth={1}
                      />
                    </g>
                  ))}
                  
                  {/* Down Candles */}
                  {downCandles.map((candle, i) => (
                    <g key={`down-${i}`} className={`${candle.x === 700 ? "sell-signal" : ""}`}>
                      {/* Candle Body */}
                      <rect 
                        className="candle" 
                        x={candle.x - 6} 
                        y={candle.o}
                        width={12} 
                        height={candle.c - candle.o}
                        fill="#FF4A6E"
                        ry={1}
                      />
                      {/* Candle Wick */}
                      <line 
                        className="candle-wick" 
                        x1={candle.x} 
                        y1={candle.h} 
                        x2={candle.x} 
                        y2={candle.l}
                        stroke="#FF4A6E"
                        strokeWidth={1}
                      />
                    </g>
                  ))}
                  
                  {/* Buy Signal Marker */}
                  <circle 
                    id="buy-signal"
                    cx="550" 
                    cy="75" 
                    r="8"
                    fill="#1EAEDB"
                    opacity="0.7"
                    className="animate-ping-slow"
                  />
                  
                  {/* Sell Signal Marker */}
                  <circle 
                    id="sell-signal"
                    cx="700" 
                    cy="115" 
                    r="8"
                    fill="#4CAF50"
                    opacity="0.7"
                    className="animate-ping-slow"
                  />
                </svg>
                
                {/* Trade Decision Indicators */}
                <div className="flex justify-between mt-4">
                  <div className="flex items-center text-sm indicator">
                    <span className="h-2 w-2 rounded-full bg-blue-soft mr-2 animate-ping-slow"></span>
                    <span className="text-white/70 dark:text-white/70 light:text-navy/70">Market Data</span>
                  </div>
                  <div className="flex items-center text-sm indicator">
                    <span className="h-2 w-2 rounded-full bg-blue-electric mr-2 animate-ping-slow"></span>
                    <span className="text-white/70 dark:text-white/70 light:text-navy/70">Personal Profile</span>
                  </div>
                  <div className="flex items-center text-sm indicator">
                    <span className="h-2 w-2 rounded-full bg-white/50 mr-2 animate-ping-slow dark:bg-white/50 light:bg-navy/50"></span>
                    <span className="text-white/70 dark:text-white/70 light:text-navy/70">Fundamentals</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
