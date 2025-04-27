
import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      title: "Real-Time Notification Systems",
      points: [
        "Trade validation alerts",
        "Strategy adherence monitoring",
        "Market condition identification",
        "Opportunity detection"
      ]
    },
    {
      title: "Decision Support Tools",
      points: [
        "Entry/exit point optimisation",
        "Position sizing recommendations",
        "Risk management calculations",
        "Alternative instrument suggestions"
      ]
    },
    {
      title: "Personalisation Framework",
      points: [
        "Custom user profiling",
        "Psychological assessment",
        "Strategy-behaviour correlation",
        "Customised alert parameters"
      ]
    },
    {
      title: "Platform Integration",
      points: [
        "Seamless connection to your favourite tools",
        "Sync with MT5, cTrader, TradeStation",
        "Real-time trade data",
        "Full automation — no manual entry"
      ]
    },
    {
      title: "Trade Strategy Optimiser",
      points: [
        "Turn your strategy into a precision system",
        "Detect inconsistencies",
        "Actionable strategy tightening suggestions",
        "Visual strategy mapping"
      ]
    },
    {
      title: "Psychological Insights",
      points: [
        "Emotional profiling",
        "Weekly mindset reviews",
        "Emotional bias detection",
        "Mindset improvement suggestions"
      ]
    }
  ];

  return (
    <section id="features" className="features section-dark">
      <h2>Powerful Trading Features</h2>
      <p>
        Discover the tools that make TradeIQ your ultimate trading companion,
        designed to optimise performance and sharpen your edge.
      </p>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <h3>{feature.title}</h3>
            <ul>
              {feature.points.map((point, pointIndex) => (
                <li key={pointIndex}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
