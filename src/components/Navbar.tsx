
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

type NavbarProps = {
  isScrolled: boolean;
};

const Navbar = ({ isScrolled }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-3 bg-navy/80 backdrop-blur-md dark:bg-navy/80 light:bg-white/80' : 'py-5'
    }`}>
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center">
          <span className="text-xl font-bold text-white dark:text-white light:text-navy">
            Trade<span className="gradient-text">IQ</span>
          </span>
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            <a href="#how" className="text-white/80 hover:text-white transition-colors dark:text-white/80 light:text-navy-light/80 dark:hover:text-white light:hover:text-navy">
              How it Works
            </a>
            <a href="#signals" className="text-white/80 hover:text-white transition-colors dark:text-white/80 light:text-navy-light/80 dark:hover:text-white light:hover:text-navy">
              Signal Examples
            </a>
            <a href="#pricing" className="text-white/80 hover:text-white transition-colors dark:text-white/80 light:text-navy-light/80 dark:hover:text-white light:hover:text-navy">
              Pricing
            </a>
          </div>
          
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <Button variant="outline" className="border-white/20 hover:bg-white/5 text-white dark:border-white/20 light:border-navy/20 dark:text-white light:text-navy">
              Login
            </Button>
            <Button className="bg-blue-soft hover:bg-blue-electric text-white">
              Join Waitlist
            </Button>
          </div>
        </div>
        
        <button 
          className="md:hidden p-2 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-navy-light dark:bg-navy-light light:bg-white border-t border-white/10 dark:border-white/10 light:border-navy/10 animate-fade-in">
          <div className="container mx-auto py-4 flex flex-col space-y-4">
            <a href="#how" className="text-white/80 hover:text-white transition-colors dark:text-white/80 light:text-navy/80 py-2">
              How it Works
            </a>
            <a href="#signals" className="text-white/80 hover:text-white transition-colors dark:text-white/80 light:text-navy/80 py-2">
              Signal Examples
            </a>
            <a href="#pricing" className="text-white/80 hover:text-white transition-colors dark:text-white/80 light:text-navy/80 py-2">
              Pricing
            </a>
            <div className="flex flex-col space-y-2 pt-2 border-t border-white/10 dark:border-white/10 light:border-navy/10">
              <div className="flex items-center">
                <Button variant="ghost" className="text-white dark:text-white light:text-navy w-full justify-start">
                  <span className="mr-2"><ThemeToggle /></span> Toggle Theme
                </Button>
              </div>
              <Button variant="outline" className="border-white/20 hover:bg-white/5 text-white dark:border-white/20 light:border-navy/20 dark:text-white light:text-navy w-full justify-center">
                Login
              </Button>
              <Button className="bg-blue-soft hover:bg-blue-electric text-white w-full justify-center">
                Join Waitlist
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
