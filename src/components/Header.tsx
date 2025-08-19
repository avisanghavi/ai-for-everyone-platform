import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <nav className="container mx-auto px-8 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-premium rounded-2xl flex items-center justify-center shadow-premium">
            <span className="text-white font-bold text-xl">J</span>
          </div>
          <span className="text-foreground font-semibold text-2xl tracking-tight">Jarvis</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-12">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            Features
          </a>
          <a href="#team" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            Team
          </a>
          <a href="#demo" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            Demo
          </a>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="font-medium">
            Sign In
          </Button>
          <Button variant="premium" size="lg" className="px-8">
            Get Started
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;