import { Button } from "@/components/ui/button";
import heroCharacter from "@/assets/hero-character.png";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-subtle flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-fade-in">
              <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span className="text-accent font-medium">AI For the rest of us</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                From <span className="text-transparent bg-clip-text bg-gradient-accent">Idea</span>
                <br />
                to <span className="text-transparent bg-clip-text bg-gradient-accent">Enterprise</span>
              </h1>
              
              <p className="text-xl text-white/80 mb-8 leading-relaxed max-w-2xl">
                The platform that allows ANYONE to leverage the power of AI. 
                No coding, no complexity – just pure innovation at your fingertips.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                  Start Building Now
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
                <Button variant="glow" size="lg" className="text-lg px-8 py-4">
                  Watch Demo
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </Button>
              </div>
              
              <div className="mt-12 flex items-center space-x-6 text-white/60">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">10k+</div>
                  <div className="text-sm">Ideas to Reality</div>
                </div>
                <div className="w-px h-8 bg-white/20"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">99.9%</div>
                  <div className="text-sm">Success Rate</div>
                </div>
                <div className="w-px h-8 bg-white/20"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-sm">AI Support</div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-accent rounded-full blur opacity-30 animate-glow"></div>
                <img 
                  src={heroCharacter} 
                  alt="AI Assistant Character" 
                  className="relative w-80 h-80 object-cover rounded-full border-4 border-white/20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;