import { useState, useEffect } from "react";

const brokers = ["MetaTrader", "TradingView", "OANDA", "cTrader"];

const StepIcon = ({ type }: { type: string }) => {
  const [currentBroker, setCurrentBroker] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBroker((prev) => (prev + 1) % brokers.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  if (type === "connect") {
    return (
      <div className="relative flex items-center justify-center w-full h-full overflow-hidden px-4">
        {/* Left label + dot */}
        <div className="flex items-center space-x-2">
          <span className="text-white text-xs md:text-sm font-bold whitespace-nowrap">
            TradeIQ
          </span>
          <div className="relative w-4 h-4 md:w-5 md:h-5">
            <div className="w-full h-full rounded-full bg-blue-soft" />
            <div className="absolute inset-0 rounded-full bg-blue-soft/30 animate-pulse-slow" />
          </div>
        </div>

        {/* Connecting Line */}
        <div className="relative flex-1 h-[2px] bg-blue-soft mx-2 overflow-visible">
          <div className="absolute top-1/2 left-0 w-3 h-3 bg-white rounded-full animate-arrow-move -translate-y-1/2" />
        </div>

        {/* Right dot + broker name */}
        <div className="flex items-center space-x-2">
          <div className="relative w-4 h-4 md:w-5 md:h-5">
            <div className="w-full h-full rounded-full bg-blue-soft" />
            <div className="absolute inset-0 rounded-full bg-blue-soft/30 animate-pulse-slow" />
          </div>
          <div className="relative h-5 overflow-hidden text-blue-soft text-xs md:text-sm font-bold whitespace-nowrap">
            <div
              className="transition-transform duration-700 ease-in-out"
              style={{ transform: `translateY(-${currentBroker * 1.25}rem)` }}
            >
              {brokers.map((broker, index) => (
                <div
                  key={index}
                  className="h-5 flex items-center justify-center"
                >
                  {broker}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-12 h-12 rounded-full bg-blue-soft/20 flex items-center justify-center">
      <div className="w-4 h-4 rounded-full bg-blue-soft animate-ping-slow" />
    </div>
  );
};

export default StepIcon;
