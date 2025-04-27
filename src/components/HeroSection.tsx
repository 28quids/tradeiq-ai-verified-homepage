import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useIntersectionObserver } from "@/lib/useIntersectionObserver";

const HeroSection = () => {
  const { targetRef: sectionRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
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
            <div className="glass-card p-6 rounded-xl animate-reveal animate-delay-400 bg-navy-dark/50 backdrop-blur-xl">
              <div className="space-y-8">
                {/* Trading Score Section */}
                <div>
                  <h2 className="text-2xl font-semibold text-white mb-4">Trading Score</h2>
                  <p className="text-white/60 mb-4">Session Analysis</p>
                  <div className="grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-4">
                    <div className="bg-white/5 rounded-lg p-2 md:p-4">
                      <div className="flex flex-row items-center justify-between space-x-2">
                        <span className="text-white/80 text-sm md:text-base">Entry Precision</span>
                        <span className="text-cyan-400 font-bold text-lg md:text-2xl whitespace-nowrap">94%</span>
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-2 md:p-4">
                      <div className="flex flex-row items-center justify-between space-x-2">
                        <span className="text-white/80 text-sm md:text-base">Risk Management</span>
                        <span className="text-amber-400 font-bold text-lg md:text-2xl whitespace-nowrap">61%</span>
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-2 md:p-4">
                      <div className="flex flex-row items-center justify-between space-x-2">
                        <span className="text-white/80 text-sm md:text-base">Rule Following</span>
                        <span className="text-green-400 font-bold text-lg md:text-2xl whitespace-nowrap">82%</span>
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-2 md:p-4">
                      <div className="flex flex-row items-center justify-between space-x-2">
                        <span className="text-white/80 text-sm md:text-base">Emotional State</span>
                        <span className="text-amber-400 font-bold text-lg md:text-2xl whitespace-nowrap">73%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Recommendations Section */}
                <div>
                  <h2 className="text-2xl font-semibold text-white mb-4">AI Recommendations</h2>
                  <p className="text-white/60 mb-4">Personalized trade alerts</p>
                  <div className="space-y-4">
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-semibold">NASDAQ: Short Setup</span>
                        <span className="bg-cyan-400/20 text-cyan-400 px-2 py-1 rounded text-sm">LIVE</span>
                      </div>
                      <p className="text-rose-400/80 text-sm">Showing same patterns as your last 3 losing NQ trades</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-semibold">EUR/JPY: Buy Zone</span>
                      </div>
                      <p className="text-white/60 text-sm">4/5 of your strategy confluences met</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-semibold">Gold (XAU/USD): Exit Signal</span>
                        <span className="text-amber-400 text-xl">⚠️</span>
                      </div>
                      <p className="text-white/60 text-sm">Your TP conditions are met - take partials here and move SL to breakeven</p>
                    </div>
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