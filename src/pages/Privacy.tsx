import { useEffect } from "react";
import Navbar from "@/components/Navbar";

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy to-navy-dark animate-fade-in">
      <Navbar isScrolled={true} />
      <div className="container mx-auto px-4 py-20 text-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 gradient-text animate-fade-in">Privacy Policy</h1>
          
          <div className="space-y-8">
            <section className="animate-fade-in-up">
              <h2 className="text-2xl font-semibold mb-4 text-white/90">1. Information We Collect</h2>
              <p className="text-white/80 leading-relaxed">
                We collect information you provide directly to us, such as when you
                create an account, join our waitlist, or contact us for support. This
                may include your name, email address, and any other information you
                choose to provide.
              </p>
            </section>

            <section className="animate-fade-in-up delay-100">
              <h2 className="text-2xl font-semibold mb-4 text-white/90">2. How We Use Your Information</h2>
              <p className="text-white/80 leading-relaxed">
                We use the information we collect to provide, maintain, and improve
                our services, to communicate with you, and to personalise your
                experience with TradeIQ.
              </p>
            </section>

            <section className="animate-fade-in-up delay-200">
              <h2 className="text-2xl font-semibold mb-4 text-white/90">3. Information Sharing</h2>
              <p className="text-white/80 leading-relaxed">
                We do not share your personal information with third parties except as
                necessary to provide our services (e.g., with payment processors), to
                comply with legal obligations, or with your consent.
              </p>
            </section>

            <section className="animate-fade-in-up delay-300">
              <h2 className="text-2xl font-semibold mb-4 text-white/90">4. Data Security</h2>
              <p className="text-white/80 leading-relaxed">
                We implement reasonable security measures to protect your information
                from unauthorised access, use, or disclosure. However, no method of
                transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="animate-fade-in-up delay-400">
              <h2 className="text-2xl font-semibold mb-4 text-white/90">5. Your Choices</h2>
              <p className="text-white/80 leading-relaxed">
                You may update or delete your account information at any time by
                contacting us. You may also opt-out of marketing communications by
                following the unsubscribe instructions in our emails.
              </p>
            </section>

            <section className="animate-fade-in-up delay-500">
              <h2 className="text-2xl font-semibold mb-4 text-white/90">6. Changes to This Policy</h2>
              <p className="text-white/80 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify
                you of significant changes by posting the updated policy on our
                website.
              </p>
            </section>

            <section className="animate-fade-in-up delay-600">
              <h2 className="text-2xl font-semibold mb-4 text-white/90">7. Contact Us</h2>
              <p className="text-white/80 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us
                at <a href="mailto:Support@TradeIQapp.com" className="text-blue-soft hover:text-blue-electric transition-colors">Support@TradeIQapp.com</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy; 