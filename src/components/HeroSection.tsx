
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  const chartRef = useRef<SVGSVGElement | null>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (chartRef.current) {
        const scrollPosition = window.scrollY;
        const chartPosition = chartRef.current.getBoundingClientRect().top + window.scrollY;
        
        if (scrollPosition > chartPosition - 500) {
          chartRef.current.classList.add('animate-chart-line');
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    setTimeout(handleScroll, 500); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
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
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg animate-reveal animate-delay-200">
              TradeIQ filters the market using fundamentals, technicals, and your unique trading style — so you only act when it makes sense.
            </p>
            <div className="flex flex-wrap gap-4 animate-reveal animate-delay-300">
              <Button className="bg-blue-soft hover:bg-blue-electric text-white px-6 py-6 text-lg">
                Join the Waitlist
              </Button>
              <Button variant="outline" className="border-white/20 hover:bg-white/5 text-white px-6 py-6 text-lg">
                See How It Works <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <div className="glass-card p-4 md:p-6 rounded-xl animate-reveal animate-delay-400">
              <div className="bg-navy-dark rounded-lg p-4 overflow-hidden">
                <h3 className="text-sm text-white/50 mb-2">GBPUSD - 4H Chart</h3>
                
                {/* Trading Chart SVG animation */}
                <svg 
                  ref={chartRef}
                  width="100%" 
                  height="300" 
                  viewBox="0 0 800 300" 
                  className="stroke-[3]"
                >
                  {/* Grid Lines */}
                  <g className="stroke-white/10">
                    <line x1="0" y1="50" x2="800" y2="50" />
                    <line x1="0" y1="100" x2="800" y2="100" />
                    <line x1="0" y1="150" x2="800" y2="150" />
                    <line x1="0" y1="200" x2="800" y2="200" />
                    <line x1="0" y1="250" x2="800" y2="250" />
                    
                    <line x1="100" y1="0" x2="100" y2="300" />
                    <line x1="200" y1="0" x2="200" y2="300" />
                    <line x1="300" y1="0" x2="300" y2="300" />
                    <line x1="400" y1="0" x2="400" y2="300" />
                    <line x1="500" y1="0" x2="500" y2="300" />
                    <line x1="600" y1="0" x2="600" y2="300" />
                    <line x1="700" y1="0" x2="700" y2="300" />
                  </g>
                  
                  {/* Price Chart Line */}
                  <path 
                    d="M0,200 C50,180 100,190 150,150 C200,110 250,140 300,120 C350,100 400,80 450,60 C500,40 550,80 600,100 C650,120 700,90 750,70 L800,50" 
                    fill="none" 
                    stroke="#1EAEDB" 
                    strokeWidth="3"
                    strokeDasharray="1000"
                    strokeDashoffset="1000"
                    className="transition-all duration-1000"
                  />
                  
                  {/* Buy Zone */}
                  <rect x="400" y="40" width="150" height="60" fill="#1EAEDB" fillOpacity="0.1" rx="4" className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  <text x="450" y="70" fill="#1EAEDB" fontSize="14" textAnchor="middle" className="font-medium opacity-0 group-hover:opacity-100 transition-opacity">BUY ZONE</text>
                  
                  {/* Avoid Zone */}
                  <rect x="200" y="110" width="100" height="60" fill="#FF4A6E" fillOpacity="0.1" rx="4" className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  <text x="250" y="140" fill="#FF4A6E" fontSize="14" textAnchor="middle" className="font-medium opacity-0 group-hover:opacity-100 transition-opacity">AVOID</text>
                </svg>
                
                {/* Trade Decision Indicators */}
                <div className="flex justify-between mt-4">
                  <div className="flex items-center text-sm">
                    <span className="h-2 w-2 rounded-full bg-blue-soft mr-2 animate-ping-slow"></span>
                    <span className="text-white/70">Market Data</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="h-2 w-2 rounded-full bg-blue-electric mr-2 animate-ping-slow"></span>
                    <span className="text-white/70">Personal Profile</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="h-2 w-2 rounded-full bg-white/50 mr-2 animate-ping-slow"></span>
                    <span className="text-white/70">Fundamentals</span>
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
