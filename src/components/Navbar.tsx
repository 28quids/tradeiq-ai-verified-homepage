import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

type NavbarProps = {
  isScrolled?: boolean;
};

const Navbar = ({ isScrolled }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-navy/80 backdrop-blur-md dark:bg-navy/80 light:bg-white/80"
          : "py-5"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold text-white dark:text-white light:text-navy">
            Trade<span className="gradient-text">IQ</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            <button
              onClick={() =>
                document
                  .getElementById("how-it-works")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="transition-colors text-white/80 hover:text-white"
            >
              Features
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("pricing")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="transition-colors text-white/80 hover:text-white"
            >
              Plans
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="outline"
              className="border-white/20 hover:bg-white/5 text-white"
            >
              Login
            </Button>
            <Link to="/waitlist">
              <Button className="bg-blue-soft hover:bg-blue-electric text-white">
                Join Waitlist
              </Button>
            </Link>
          </div>
        </div>

        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-navy-light dark:bg-navy-light light:bg-white border-t border-white/10">
          <div className="container mx-auto py-4 flex flex-col space-y-4">
            <Link
              to="/features"
              className={`transition-colors ${isActive("/features") ? "text-white" : "text-white/80"}`}
            >
              Features
            </Link>
            <Link
              to="/about"
              className={`transition-colors ${isActive("/about") ? "text-white" : "text-white/80"}`}
            >
              Plans
            </Link>
            <Link
              to="/waitlist"
              className={`transition-colors ${isActive("/waitlist") ? "text-white" : "text-white/80"}`}
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
