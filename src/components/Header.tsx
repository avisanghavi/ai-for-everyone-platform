import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-hero-bg/80 backdrop-blur-lg border-b border-white/10">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">J</span>
          </div>
          <span className="text-white font-bold text-xl">Jarvis</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-white/80 hover:text-white transition-colors">
            Features
          </a>
          <a href="#team" className="text-white/80 hover:text-white transition-colors">
            Meet the Team
          </a>
          <a href="#demo" className="text-white/80 hover:text-white transition-colors">
            See the Proof
          </a>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-white hover:bg-white/10">
            Log In
          </Button>
          <Button variant="hero" size="lg">
            Get Started
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;