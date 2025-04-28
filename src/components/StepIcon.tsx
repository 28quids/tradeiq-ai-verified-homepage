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

  // Connection animation
  if (type === "connect") {
    return (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Central connecting hub */}
        <circle cx="50" cy="50" r="8" className="fill-blue-soft">
          <animate
            attributeName="r"
            values="8;10;8"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Orbiting nodes */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
          <g key={i} transform={`rotate(${angle}, 50, 50)`}>
            <circle cx="50" cy="20" r="4" className="fill-blue-soft/60">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from={`0 50 50`}
                to={`360 50 50`}
                dur={`${4 + i}s`}
                repeatCount="indefinite"
              />
            </circle>

            {/* Connection lines */}
            <line
              x1="50"
              y1="28"
              x2="50"
              y2="42"
              className="stroke-blue-soft/30"
              strokeWidth="1"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from={`0 50 50`}
                to={`360 50 50`}
                dur={`${4 + i}s`}
                repeatCount="indefinite"
              />
            </line>
          </g>
        ))}

        {/* Pulse effect */}
        <circle
          cx="50"
          cy="50"
          r="20"
          className="fill-none stroke-blue-soft/20"
          strokeWidth="1"
        >
          <animate
            attributeName="r"
            values="20;35;20"
            dur="3s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-opacity"
            values="0.2;0;0.2"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Broker text */}
        <text
          x="50"
          y="90"
          className="text-[8px] fill-blue-soft font-bold text-center transition-opacity duration-500 ease-in-out"
          textAnchor="middle"
          opacity={currentBroker === 0 ? "1" : "0"}
        >
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            dur="1s"
            begin="0s"
            repeatCount="indefinite"
          />
          {brokers[currentBroker]}
        </text>
      </svg>
    );
  }

  // Profile/Behavioral analysis animation
  if (type === "profile") {
    return (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle
          cx="50"
          cy="50"
          r="45"
          className="stroke-blue-soft/30 fill-none stroke-2"
        />
        <path
          d="M50 5 A45 45 0 0 1 95 50"
          className="stroke-blue-soft fill-none stroke-2"
          strokeLinecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur="2s"
            repeatCount="indefinite"
          />
        </path>
        <circle cx="50" cy="35" r="12" className="fill-blue-soft/50" />
        <path
          d="M30 70 Q50 85 70 70"
          className="stroke-blue-soft fill-none stroke-2"
        >
          <animate
            attributeName="d"
            values="M30 70 Q50 85 70 70;M30 70 Q50 75 70 70;M30 70 Q50 85 70 70"
            dur="2s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    );
  }

  // Market data analysis animation
  if (type === "data") {
    return (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path
          d="M10 50 L30 30 L50 60 L70 20 L90 40"
          className="stroke-blue-soft fill-none stroke-2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <animate
            attributeName="d"
            values="M10 50 L30 30 L50 60 L70 20 L90 40;M10 40 L30 60 L50 20 L70 50 L90 30;M10 50 L30 30 L50 60 L70 20 L90 40"
            dur="3s"
            repeatCount="indefinite"
          />
        </path>
        <g className="animate-pulse">
          <circle cx="30" cy="30" r="3" className="fill-blue-soft" />
          <circle cx="50" cy="60" r="3" className="fill-blue-soft" />
          <circle cx="70" cy="20" r="3" className="fill-blue-soft" />
        </g>
      </svg>
    );
  }

  // Filter/Logic animation
  if (type === "filter") {
    return (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <clipPath id="filterClip">
            <path d="M20 20 L80 20 L60 60 L60 80 L40 80 L40 60 Z" />
          </clipPath>
        </defs>
        <path
          d="M20 20 L80 20 L60 60 L60 80 L40 80 L40 60 Z"
          className="stroke-blue-soft fill-none stroke-2"
        />
        <rect
          x="20"
          y="0"
          width="60"
          height="100"
          className="fill-blue-soft/20"
          clipPath="url(#filterClip)"
        >
          <animate
            attributeName="y"
            values="0;100;0"
            dur="2s"
            repeatCount="indefinite"
          />
        </rect>
      </svg>
    );
  }

  // Alerts/Coaching animation
  if (type === "alerts") {
    return (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <g className="animate-bounce-slow">
          <path
            d="M50 20 L70 60 L30 60 Z"
            className="fill-blue-soft/50 stroke-blue-soft stroke-2"
          />
          <circle cx="50" cy="75" r="5" className="fill-blue-soft">
            <animate
              attributeName="r"
              values="5;6;5"
              dur="1s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
        <circle
          cx="50"
          cy="50"
          r="40"
          className="stroke-blue-soft/20 fill-none stroke-2"
          strokeDasharray="8 8"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur="8s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    );
  }

  return (
    <div className="w-12 h-12 rounded-full bg-blue-soft/20 flex items-center justify-center">
      <div className="w-4 h-4 rounded-full bg-blue-soft animate-ping-slow" />
    </div>
  );
};

export default StepIcon;
