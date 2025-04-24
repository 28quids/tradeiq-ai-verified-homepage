
const Footer = () => {
  return (
    <footer className="py-12 bg-navy-dark border-t border-white/5">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <span className="text-xl font-bold text-white">
                Trade<span className="gradient-text">IQ</span>
              </span>
            </a>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-center md:text-left">
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              Support
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              Login
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            © 2025 TradeIQ. All rights reserved.
          </p>
          <p className="text-white/50 text-sm">
            Email: support@tradeiqapp.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
