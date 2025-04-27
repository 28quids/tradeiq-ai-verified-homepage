
import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <section className="container mx-auto mt-20 p-8 max-w-4xl animate-reveal">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-blue-electric to-blue-soft bg-clip-text text-transparent">
        About TradeIQ
      </h1>
      
      <p className="text-xl text-white/70 text-center mb-12 max-w-2xl mx-auto">
        Empowering traders with AI-driven insights and personalized strategies
      </p>

      <div className="space-y-8 text-lg text-white/80 leading-relaxed">
        <p>
          At TradeIQ, we're a small team of professional traders who've lived every stage of the trading journey - the highs, the struggles, and the breakthroughs. We know what it's like to feel stuck just before the next level, and we know what it takes to push through and join the top 1%.
        </p>

        <p>
          TradeIQ was built because we saw a gap: traders don't need more signals or noise; they need sharper feedback, clearer insights, and a system that actually helps them grow. We've combined years of real trading experience with advanced technology to create the tool we always wished existed.
        </p>

        <p>
          Our mission is simple: help serious traders break past their plateaus, refine their edge, and trade with true confidence. Every feature in TradeIQ is designed by real traders, for real traders — with a relentless focus on real-world results.
        </p>
      </div>

      <div className="mt-12 text-center">
        <Button 
          className="bg-blue-soft hover:bg-blue-electric text-white px-8 py-6 text-lg"
          onClick={() => navigate('/plans')}
        >
          Explore Plans
        </Button>
      </div>
    </section>
  );
};

export default About;
