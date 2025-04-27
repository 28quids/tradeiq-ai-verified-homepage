
import React, { useState } from 'react';

const ProblemCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const problems = [
    {
      title: "Lack of Feedback on Trades",
      description: "Most traders don't know what went right or wrong. TradeIQ breaks down every trade with personalised feedback tailored to you."
    },
    {
      title: "No Accountability or Consistency",
      description: "We track your habits, strategy adherence, and psychological state to help you stay focused."
    },
    {
      title: "Overtrading & Emotional Mistakes",
      description: "Our AI flags impulsive, revenge, or fear-based entries in real time."
    },
    {
      title: "Missed Setups Across Markets",
      description: "Get alerted when trade setups based on your plan form across different assets."
    },
    {
      title: "Strategy Drift",
      description: "We detect when you stray from your plan and show the move you should have taken."
    }
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? problems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === problems.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="problem-carousel-wrapper">
      <h2>Top Problems TradeIQ Solves</h2>
      <div className="problem-carousel">
        {problems.map((problem, index) => (
          <div
            key={index}
            className="problem-slide"
            style={{
              transform: `translateX(${(index - currentSlide) * 100}%)`
            }}
          >
            <h3>{problem.title}</h3>
            <p>{problem.description}</p>
          </div>
        ))}
      </div>
      <div className="carousel-controls">
        <button id="carousel-prev" onClick={handlePrev}>
          Prev
        </button>
        <button id="carousel-next" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ProblemCarousel;
