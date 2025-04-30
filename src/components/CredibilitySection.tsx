import { cn } from "@/lib/utils";

const stats = [
  {
    value: "100+",
    label: "Traders on waitlist",
  },
  {
    value: "15+",
    label: "Years combined experience",
  },
  {
    value: "24/7",
    label: "Market monitoring",
  },
  {
    value: "20+",
    label: "Supported strategies",
  },
];

const roadmapItems = [
  {
    date: "Q1 2025",
    title: "Alpha Testing",
    description: "Closed testing with select traders",
  },
  {
    date: "Q2 2025",
    title: "Beta Launch",
    description: "Early access for waitlist members",
  },
  {
    date: "Q3+4 2025",
    title: "Mobile App",
    description: "iOS and Android applications",
  },
  {
    date: "Q1 2026",
    title: "Full Launch",
    description: "General availability with all features",
  },
  {
    date: "Q2 2026",
    title: "Spot Investment",
    description:
      "New development on the platform to support spot investors as well as leveraged traders.",
  },
];

const CredibilitySection = () => {
  return (
    <section className="section-padding relative">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-reveal">
              Trusted by <span className="gradient-text">Smart Traders</span>
            </h2>
            <p className="text-lg dark:text-white/70 light:text-navy/70 max-w-2xl mx-auto animate-reveal animate-delay-200">
              Join a growing community of traders who rely on data-driven
              decisions.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={cn(
                  "glass-card p-6 text-center animate-reveal",
                  `animate-delay-${(index + 1) * 100}`,
                )}
              >
                <h3 className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </h3>
                <p className="dark:dark:text-white/70 light:text-navy/70 light:text-navy/70">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Roadmap */}
          <div className="dark:bg-navy-light light:bg-gray-100 rounded-xl p-8 animate-reveal animate-delay-300">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Development Roadmap
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 h-full w-px dark:bg-white/10 light:bg-navy/10 transform md:translate-x-px"></div>

              <div className="space-y-12">
                {roadmapItems.map((item, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex flex-col md:flex-row relative z-10",
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse",
                    )}
                  >
                    <div className="md:w-1/2 flex justify-center items-center pb-4 md:pb-0">
                      <div
                        className={cn(
                          "w-full max-w-xs glass-card p-4",
                          index % 2 === 0 ? "md:text-right" : "md:text-left",
                        )}
                      >
                        <span className="text-blue-soft font-medium block mb-1">
                          {item.date}
                        </span>
                        <h4 className="text-xl font-bold">{item.title}</h4>
                        <p className="dark:dark:text-white/70 light:text-navy/70 light:text-navy/70">{item.description}</p>
                      </div>
                    </div>

                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex justify-center">
                      <div className="h-5 w-5 rounded-full bg-blue-soft border-4 border-navy-light"></div>
                    </div>

                    <div className="md:w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;
