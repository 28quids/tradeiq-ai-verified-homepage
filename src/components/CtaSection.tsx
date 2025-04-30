import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CtaSection = () => {
  return (
    <section id="cta" className="py-20 relative overflow-hidden">
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
          <p className="text-xl dark:text-white/80 light:text-navy/80 mb-8">
            Early users lock in lifetime pricing. Be among the first to experience verified AI trading.
          </p>
          <form
            action="https://tradeiqapp.us14.list-manage.com/subscribe/post?u=5e3bada7405349fffbe50aa96&id=8c06b10659&f_id=007f90e1f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            target="_blank"
            className="flex flex-col gap-4 mb-4 max-w-md mx-auto"
          >
            <Input
              type="email"
              name="EMAIL"
              placeholder="Enter your email"
              required
              className="dark:bg-white/5 light:bg-navy/5 dark:border-white/10 light:border-navy/10 dark:text-white light:text-navy placeholder:dark:text-white/50 light:text-navy/50 focus:border-blue-soft"
            />
            <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
              <input
                type="text"
                name="b_5e3bada7405349fffbe50aa96_8c06b10659"
                tabIndex={-1}
                value=""
              />
            </div>
            <Button type="submit" className="bg-blue-soft hover:bg-blue-electric dark:text-white light:text-navy px-8 py-6 text-lg w-full">
              Join Waitlist
            </Button>
          </form>
          <div className="max-w-md mx-auto">
            <Button 
              variant="outline" 
              className="dark:border-white/20 light:border-navy/20 hover:dark:bg-white/5 light:bg-navy/5 dark:text-white light:text-navy px-8 py-6 text-lg w-full mb-8"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Plans
            </Button>
          </div>
          <p className="dark:text-white/60 light:text-navy/60 text-sm">100+ traders already registered</p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
