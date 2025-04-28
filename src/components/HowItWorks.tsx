import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import StepIcon from "./StepIcon";

const steps = [
  {
    number: "01",
    title: "Connect your trading platform",
    description:
      "Seamlessly integrate with your existing broker or trading account.",
    icon: "connect",
  },
  {
    number: "02",
    title: "TradeIQ builds your behavioural profile",
    description:
      "Our AI analyses your trading style from past and live trades as well as personality type and psychological profiling.",
    icon: "profile",
  },
  {
    number: "03",
    title: "Market & fundamental data analysed 24/7",
    description:
      "Continuous monitoring of global markets, news events, and technical patterns.",
    icon: "data",
  },
  {
    number: "04",
    title: "Trades filtered through multi-layer logic",
    description:
      "Potential opportunities are verified against your profile and market conditions.",
    icon: "filter",
  },
  {
    number: "05",
    title: "You receive actionable alerts & coaching",
    description:
      "Get notified only when high-probability setups match your trading style.",
    icon: "alerts",
  },
];

const HowItWorks = () => {
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = steps.map((_, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        },
        { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
      );

      if (stepsRef.current[index]) {
        observer.observe(stepsRef.current[index]!);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (stepsRef.current[index]) {
          observer.unobserve(stepsRef.current[index]!);
        }
      });
    };
  }, []);

  return (
    <section id="how-it-works" className="section-padding pb-20 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-reveal">
            How <span className="gradient-text">TradeIQ</span> Works
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto animate-reveal animate-delay-200">
            Our AI-powered platform follows a systematic approach to help you
            make informed trading decisions.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line connecting steps */}
          <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 transform md:translate-x-px z-0"></div>

          <div className="space-y-20 md:space-y-32 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => (stepsRef.current[index] = el)}
                className={cn(
                  "flex flex-col md:flex-row items-start animate-reveal",
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse",
                )}
              >
                <div
                  className={cn(
                    "w-full md:w-1/2 flex",
                    index % 2 === 0
                      ? "md:justify-end md:pr-8 lg:pr-12"
                      : "md:justify-start md:pl-8 lg:pl-12",
                  )}
                >
                  <div className="flex flex-row md:flex-col items-start">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-soft text-white font-bold z-20 mb-4 mr-4 md:mr-0">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-2">
                        {step.title}
                      </h3>
                      <p className="text-white/70">{step.description}</p>
                    </div>
                  </div>
                </div>

                <div
                  className={cn(
                    "hidden md:flex w-full md:w-1/2",
                    index % 2 === 0 ? "md:pl-12" : "md:pr-12",
                    "items-center justify-center",
                  )}
                >
                  <div className="glass-card p-5 h-[200px] w-full max-w-[300px] flex items-center justify-center relative overflow-hidden">
                    <StepIcon type={step.icon} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;