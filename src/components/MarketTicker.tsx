import { useEffect, useState } from "react";

interface PriceData {
  price: number;
  change: number;
  isUp: boolean;
}

interface TickerData {
  [key: string]: PriceData;
}

const initialData: TickerData = {
  aapl: { price: 204.60, change: 2.43, isUp: true },
  tsla: { price: 250.74, change: 5.37, isUp: true },
  gold: { price: 3314.54, change: -1.93, isUp: false },
  wti: { price: 61.80, change: -3.67, isUp: false },
  eurusd: { price: 1.1351, change: -1.06, isUp: false },
  gbpusd: { price: 1.3267, change: -0.96, isUp: false },
  nasdaq100: { price: 18693.26, change: 2.3, isUp: true },
  sp500: { price: 5375.86, change: 1.7, isUp: true }
};

export const MarketTicker = () => {
  const [priceData, setPriceData] = useState(initialData);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate price updates
      const newData = { ...priceData };
      Object.keys(newData).forEach((ticker) => {
        const change = (Math.random() * 2 - 1) * 0.5;
        const currentPrice = newData[ticker].price;
        newData[ticker] = {
          price: Number((currentPrice * (1 + change/100)).toFixed(2)),
          change: Number(change.toFixed(2)),
          isUp: change > 0
        };
      });
      setPriceData(newData);
    }, 60000);

    return () => clearInterval(interval);
  }, [priceData]);

  return (
    <div className="w-full bg-navy-darker/80 backdrop-blur border-t border-white/5">
      <div className="overflow-hidden py-3 relative">
        <div className="flex whitespace-nowrap">
          <div className="animate-ticker inline-flex items-center space-x-8 pr-8">
            {Object.entries(priceData).map(([ticker, data]) => (
              <span key={ticker} className="inline-flex items-center space-x-2">
                <span className="uppercase">{ticker}</span>
                <span className="font-mono">{data.price.toFixed(2)}</span>
                <span className={`${data.isUp ? "text-green-500" : "text-red-500"}`}>
                  {data.isUp ? "+" : ""}{data.change}%
                </span>
                <span className="text-gray-500">•</span>
              </span>
            ))}
          </div>
          <div className="animate-ticker inline-flex items-center space-x-8 pr-8" aria-hidden="true">
            {Object.entries(priceData).map(([ticker, data]) => (
              <span key={ticker} className="inline-flex items-center space-x-2">
                <span className="uppercase">{ticker}</span>
                <span className="font-mono">{data.price.toFixed(2)}</span>
                <span className={`${data.isUp ? "text-green-500" : "text-red-500"}`}>
                  {data.isUp ? "+" : ""}{data.change}%
                </span>
                <span className="text-gray-500">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
