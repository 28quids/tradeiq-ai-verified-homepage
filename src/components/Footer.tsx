import { FaInstagram, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";
import { MarketTicker } from "./MarketTicker";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSupportClick = () => {
    window.location.href = "mailto:support@tradeiqapp.com";
  };

  const handleLoginClick = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  return (
    <>
      <MarketTicker />
      <footer className="py-12 bg-navy-dark border-t dark:dark:border-white/5 light:border-navy/5 light:border-navy/5">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="flex items-center">
                <span className="text-xl font-bold dark:dark:text-white light:text-navy light:text-navy">
                  Trade<span className="gradient-text">IQ</span>
                </span>
              </Link>
            </div>

            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-center md:text-left">
              <Link
                to="/about"
                className="dark:text-white/70 light:text-navy/70 hover:dark:text-white light:text-navy transition-colors"
              >
                About
              </Link>
              <button
                onClick={handleSupportClick}
                className="dark:text-white/70 light:text-navy/70 hover:dark:text-white light:text-navy transition-colors"
              >
                Support
              </button>
              <Link
                to="/privacy"
                className="dark:text-white/70 light:text-navy/70 hover:dark:text-white light:text-navy transition-colors"
              >
                Privacy
              </Link>
              <div className="relative">
                <button
                  onClick={handleLoginClick}
                  className="dark:text-white/70 light:text-navy/70 hover:dark:text-white light:text-navy transition-colors"
                >
                  Login
                </button>
                {showPopup && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 dark:bg-white/10 light:bg-navy/10 backdrop-blur-sm dark:text-white light:text-navy px-6 py-3 rounded-lg shadow-lg transition-all duration-300 ease-in-out">
                    Coming Soon!
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-6 my-8">
            <a
              href="https://x.com/TradeIQ_App"
              className="p-4 rounded-full dark:bg-white/5 light:bg-navy/5 hover:dark:bg-white/10 light:bg-navy/10 transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] flex items-center justify-center"
              aria-label="Twitter"
            >
              <FaXTwitter className="w-6 h-6 dark:dark:text-white light:text-navy light:text-navy" />
            </a>
            <a
              href="https://www.instagram.com/tradeiq_app/"
              className="p-4 rounded-full dark:bg-white/5 light:bg-navy/5 hover:dark:bg-white/10 light:bg-navy/10 transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] flex items-center justify-center"
              aria-label="Instagram"
            >
              <FaInstagram className="w-6 h-6 dark:dark:text-white light:text-navy light:text-navy" />
            </a>
            <a
              href="#"
              className="p-4 rounded-full dark:bg-white/5 light:bg-navy/5 hover:dark:bg-white/10 light:bg-navy/10 transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] flex items-center justify-center"
              aria-label="Discord"
            >
              <FaDiscord className="w-6 h-6 dark:dark:text-white light:text-navy light:text-navy" />
            </a>
          </div>

          <div className="mt-8 pt-8 border-t dark:border-white/5 light:border-navy/5 flex flex-col md:flex-row justify-between items-center">
            <p className="dark:text-white/50 light:text-navy/50 text-sm mb-4 md:mb-0">
              © 2025 TradeIQ. All rights reserved.
            </p>
            <p className="dark:text-white/50 light:text-navy/50 text-sm">
              Email: support@tradeiqapp.com
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
