import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToPlans = () => {
    navigate('/');
    setTimeout(() => {
      document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy to-navy-dark relative overflow-hidden animate-fade-in">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-electric/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-soft/20 rounded-full blur-3xl" />
      </div>

      <Navbar isScrolled={true} />
      
      <div className="container mx-auto px-4 py-20 text-white relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-electric via-blue-soft to-blue-electric bg-clip-text text-transparent animate-fade-in">
              About TradeIQ
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-electric to-blue-soft mx-auto mb-8" />
            <p className="text-lg md:text-xl lg:text-2xl text-white/70 max-w-2xl mx-auto animate-fade-in-up leading-relaxed transition-all duration-300 ease-in-out">
              Empowering traders with AI-driven insights and personalized strategies
            </p>
          </div>

          <div className="space-y-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transform hover:scale-[1.02] transition-all duration-300 animate-fade-in-up">
              <p className="text-lg text-white/80 leading-relaxed">
                At TradeIQ, we're a small team of professional traders who've lived every stage of the trading journey - the highs, the struggles, and the breakthroughs. We know what it's like to feel stuck just before the next level, and we know what it takes to push through and join the top 1%.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transform hover:scale-[1.02] transition-all duration-300 animate-fade-in-up delay-100">
              <p className="text-lg text-white/80 leading-relaxed">
                TradeIQ was built because we saw a gap: traders don't need more signals or noise; they need sharper feedback, clearer insights, and a system that actually helps them grow. We've combined years of real trading experience with advanced technology to create the tool we always wished existed.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transform hover:scale-[1.02] transition-all duration-300 animate-fade-in-up delay-200">
              <p className="text-lg text-white/80 leading-relaxed">
                Our mission is simple: help serious traders break past their plateaus, refine their edge, and trade with true confidence. Every feature in TradeIQ is designed by real traders, for real traders — with a relentless focus on real-world results.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button 
              className="bg-gradient-to-r from-blue-electric to-blue-soft hover:from-blue-soft hover:to-blue-electric text-white px-8 py-6 text-lg rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-electric/20 animate-fade-in-up delay-300"
              onClick={scrollToPlans}
            >
              Explore Plans
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
