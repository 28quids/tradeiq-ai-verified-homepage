
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy/30 to-navy-dark/80 z-0"></div>
      
      {/* Subtle background shapes */}
      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-soft opacity-5 blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-electric opacity-5 blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 text-center animate-reveal">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Join the Next Generation of <span className="gradient-text">Traders</span>
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Early users lock in lifetime pricing. Be among the first to experience verified AI trading.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-blue-soft hover:bg-blue-electric text-white px-8 py-6 text-lg w-full sm:w-auto">
              Join Waitlist
            </Button>
            <Button variant="outline" className="border-white/20 hover:bg-white/5 text-white px-8 py-6 text-lg w-full sm:w-auto">
              Explore Plans
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
