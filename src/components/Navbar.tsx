import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { FaInstagram, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = ({ isScrolled }: { isScrolled: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const scrollToTop = () => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToSection = (id: string) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleLoginClick = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  return (
    <>
      <nav
        className={`fixed w-full z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-navy/80 backdrop-blur-md py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <Link 
                to="/" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTop();
                }}
                className="text-2xl font-bold text-white"
              >
                Trade<span className="bg-gradient-to-r from-blue-electric to-blue-soft bg-clip-text text-transparent">IQ</span>
              </Link>
              
              <div className="hidden md:flex items-center space-x-4">
                <a
                  href="https://x.com/TradeIQ_App"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] flex items-center justify-center"
                  aria-label="Twitter"
                >
                  <FaXTwitter className="w-4 h-4 text-white" />
                </a>
                <a
                  href="https://www.instagram.com/tradeiq_app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] flex items-center justify-center"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-4 h-4 text-white" />
                </a>
                <a
                  href="https://discord.gg/3xYxKSpCaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] flex items-center justify-center"
                  aria-label="Discord"
                >
                  <FaDiscord className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('personalization')}
                className="text-white/80 hover:text-white transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-white/80 hover:text-white transition-colors"
              >
                Plans
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="text-white/80 hover:text-white transition-colors"
              >
                How It Works
              </button>
              <Link
                to="/about"
                className="text-white/80 hover:text-white transition-colors"
              >
                About
              </Link>
              <button
                onClick={handleLoginClick}
                className="text-white/80 hover:text-white transition-colors px-4 py-2 rounded-lg border border-white/20 relative"
              >
                Login
                {showPopup && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-300 ease-in-out">
                    Coming Soon!
                  </div>
                )}
              </button>
              <button
                onClick={() => scrollToSection('cta')}
                className="bg-gradient-to-r from-blue-electric to-blue-soft hover:from-blue-soft hover:to-blue-electric text-white px-6 py-2 rounded-lg transition-all duration-300"
              >
                Join Waitlist
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Moved outside main nav */}
      <div 
        className={`fixed inset-0 z-50 transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div className={`absolute inset-0 bg-navy/80 backdrop-blur-md transition-all duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`} />
        
        {/* Content */}
        <div className={`relative h-full transition-all duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}>
          <div className="container mx-auto px-4">
            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center py-4">
              <Link 
                to="/" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTop();
                  setIsOpen(false);
                }}
                className="text-2xl font-bold text-white"
              >
                Trade<span className="bg-gradient-to-r from-blue-electric to-blue-soft bg-clip-text text-transparent">IQ</span>
              </Link>
              <button
                className="text-white hover:text-white/80 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <X size={24} />
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex flex-col space-y-8 text-xl max-w-md mx-auto mt-12">
              <button
                onClick={() => {
                  scrollToSection('personalization');
                  setIsOpen(false);
                }}
                className={`text-white/80 hover:text-white transition-all duration-300 text-left py-3 transform ${
                  isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                } delay-[200ms]`}
              >
                Features
              </button>
              <button
                onClick={() => {
                  scrollToSection('pricing');
                  setIsOpen(false);
                }}
                className={`text-white/80 hover:text-white transition-all duration-300 text-left py-3 transform ${
                  isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                } delay-[400ms]`}
              >
                Plans
              </button>
              <button
                onClick={() => {
                  scrollToSection('how-it-works');
                  setIsOpen(false);
                }}
                className={`text-white/80 hover:text-white transition-all duration-300 text-left py-3 transform ${
                  isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                } delay-[600ms]`}
              >
                How It Works
              </button>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className={`text-white/80 hover:text-white transition-all duration-300 text-left py-3 transform ${
                  isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                } delay-[800ms]`}
              >
                About
              </Link>
              <button
                onClick={() => {
                  handleLoginClick();
                  setIsOpen(false);
                }}
                className={`text-white/80 hover:text-white transition-all duration-300 text-left py-3 transform ${
                  isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                } delay-[1000ms]`}
              >
                Login
              </button>
              <button
                onClick={() => {
                  scrollToSection('cta');
                  setIsOpen(false);
                }}
                className={`bg-gradient-to-r from-blue-electric to-blue-soft hover:from-blue-soft hover:to-blue-electric text-white px-6 py-4 rounded-lg transition-all duration-300 transform ${
                  isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                } delay-[1200ms] text-center`}
              >
                Join Waitlist
              </button>

              {/* Social Media Icons */}
              <div className={`flex justify-center space-x-6 transition-all duration-300 transform ${
                isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              } delay-[1400ms]`}>
                <a
                  href="https://x.com/TradeIQ_App"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-white/5 hover:bg-white/10 transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] flex items-center justify-center"
                  aria-label="Twitter"
                >
                  <FaXTwitter className="w-6 h-6 text-white" />
                </a>
                <a
                  href="https://www.instagram.com/tradeiq_app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-white/5 hover:bg-white/10 transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] flex items-center justify-center"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-6 h-6 text-white" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-white/5 hover:bg-white/10 transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] flex items-center justify-center"
                  aria-label="Discord"
                >
                  <FaDiscord className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
