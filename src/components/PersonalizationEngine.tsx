import { cn } from "@/lib/utils";

const personalizationItems = [
  {
    icon: "🚫",
    title: "Detects Emotional Patterns",
    description:
      "Identifies revenge trading, FOMO, and other emotional decision triggers.",
  },
  {
    icon: "⚙️",
    title: "Adapts to Your Preferences",
    description:
      "Continually evolves as you accept or reject AI recommendations.",
  },
  {
    icon: "📊",
    title: "Builds Unique Profile",
    description:
      "Creates a psychological and strategic profile that's uniquely yours.",
  },
];

const PersonalizationEngine = () => {
  return (
    <section
      id="personalization"
      className="section-padding relative overflow-hidden"
    >
      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-reveal">
              <span className="gradient-text">AI</span> That Learns How You
              Trade
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto animate-reveal animate-delay-200">
              TradeIQ adapts to your unique trading style, creating a
              personalized experience that evolves over time.
            </p>
          </div>

          <div className="relative flex flex-col md:flex-row items-center">
            {/* Profile Card */}
            <div className="w-full md:w-1/2 mb-10 md:mb-0 animate-reveal">
              <div className="glass-card p-8 relative max-w-md mx-auto">
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-blue-soft/10 animate-ping-slow"></div>
                <div className="text-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-electric to-blue-soft mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">👤</span>
                  </div>
                  <h3 className="text-xl font-bold">Trading Profile</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 rounded-lg bg-navy-dark">
                    <span className="text-white/70">Entry Precision</span>
                    <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-soft rounded-full"
                        style={{ width: "65%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-3 rounded-lg bg-navy-dark">
                    <span className="text-white/70">Strategy Adherence</span>
                    <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-soft rounded-full"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-3 rounded-lg bg-navy-dark">
                    <span className="text-white/70">Impulse Control</span>
                    <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-soft rounded-full"
                        style={{ width: "30%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-3 rounded-lg bg-navy-dark">
                    <span className="text-white/70">Average Hold Time</span>
                    <span className="text-white text-right">
                      2.4 days
                      <br />
                      <span className="text-xs text-white/50">
                        Intraday-Swing
                      </span>
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-3 rounded-lg bg-navy-dark">
                    <span className="text-white/70">Favorite Pairs</span>
                    <span className="text-white">XAU/USD, Nas100</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="w-full md:w-1/2 md:pl-10">
              <div className="space-y-6">
                {personalizationItems.map((item, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex p-5 glass-card animate-reveal",
                      `animate-delay-${(index + 1) * 200}`,
                    )}
                  >
                    <div className="mr-4 text-3xl">{item.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-white/70">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background gradient effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-soft opacity-5 rounded-full blur-[100px]"></div>
    </section>
  );
};

export default PersonalizationEngine;
