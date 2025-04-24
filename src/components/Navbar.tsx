
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar = ({ isScrolled }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-navy/80 backdrop-blur-md py-3 shadow-md"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="text-xl font-bold text-white">
            Trade<span className="gradient-text">IQ</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#how-it-works" className="text-white/70 hover:text-white transition-colors">
            How It Works
          </a>
          <a href="#signals" className="text-white/70 hover:text-white transition-colors">
            Signals
          </a>
          <a href="#personalization" className="text-white/70 hover:text-white transition-colors">
            AI Engine
          </a>
          <a href="#benefits" className="text-white/70 hover:text-white transition-colors">
            Benefits
          </a>
        </nav>

        <div className="hidden md:flex space-x-4">
          <Button variant="outline" className="border-blue-soft hover:bg-blue-soft/10 text-white">
            Log In
          </Button>
          <Button className="bg-blue-soft hover:bg-blue-electric text-white">
            Join Waitlist
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-navy/95 backdrop-blur-md shadow-lg md:hidden">
          <div className="container py-4 flex flex-col space-y-4">
            <a
              href="#how-it-works"
              className="px-4 py-2 text-white/70 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#signals"
              className="px-4 py-2 text-white/70 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Signals
            </a>
            <a
              href="#personalization"
              className="px-4 py-2 text-white/70 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              AI Engine
            </a>
            <a
              href="#benefits"
              className="px-4 py-2 text-white/70 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Benefits
            </a>
            <div className="flex flex-col space-y-2 pt-2 border-t border-white/10">
              <Button variant="outline" className="border-blue-soft hover:bg-blue-soft/10 text-white w-full">
                Log In
              </Button>
              <Button className="bg-blue-soft hover:bg-blue-electric text-white w-full">
                Join Waitlist
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
